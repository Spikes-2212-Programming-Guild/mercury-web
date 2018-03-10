import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from '../components/question-set'
import NumericQuestion from '../components/question/number'
import TextQuestion from '../components/question/string'
import MainMenu from './main-menu'
import scoutingFormManager from '../util/scouting-form-manager'
import ConfirmationModal from '../util/confirmation-modal'
import axios from 'axios'

/**
 * This screen is responsible for displaying the scouting form.
 * at the moment, it's responsability is to render a scouting and submit data from it.
 */
class ScoutingForm extends Component {
  /**
   *
   * This constructs a new {ScoutingForm} instance.
   * after calling to super constructor, this constructor would submit a GET request on /scouting-form/current,
   * and from there it would receive the JSON file that represents the current ScoutingForm
   * this instance of mercury is working with
   *
   * @param props
   */
  constructor (props) {
    super(props)
    if (!scoutingFormManager.loadFromStorage()) {
      scoutingFormManager.getFromServer()
        .then((data) => {
          this.form = data
        })
        .catch(err => alert(err))
    } else {
      this.form = scoutingFormManager.loadFromStorage()
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      show: false,
      canSubmit: false
    }
  }

  handleShow () {
    this.setState({show: true})
  }

  handleClose () {
    this.setState({show: false})
  }

  handleSubmit () {
    new Promise((resolve, reject) => {
      this.setState({
        show: false,
        canSubmit: true
      })
      resolve()
    }).then(() => {
      ReactDOM.findDOMNode(this.refs['scouting-form']).dispatchEvent(new Event('submit'))
    })
  }

  /**
   * This method renders the current ScoutingForm instance to the screen
   * @returns {XML} the rendered ScoutingForm
   */
  render () {
    if (this.form) {
      /**
       * Request to reset the form
       * @param force - whether to force the reset or ask for confirmation
       */
      const requestReset = (force = false) => {
        if (typeof force === 'object') {
          force = false // When called from a button (and given an 'event' parameter) don't force reset
        }
        /**
         * The reset function
         */
        const reset = () => {
          const form = ReactDOM.findDOMNode(this.refs['scouting-form'])
          const elements = Array.from(form.elements)
          elements.forEach(function (element) {
            if (element.type === 'radio') {
              if (element.checked) {
                element.checked = false // Empty enum questions
              }
            } else if (element.type === 'number') {
              if (element.name === 'teamnumber') {
                element.value = '' // Empty the team number field
              } else if (element.name !== 'matchnumber') { // Don't reset match number field
                element.value = element.min // Set all other number fields to their minimum value
              }
            } else if (element.type !== 'label' && element.type !== 'button' && element.type !== 'submit' && element.name !== 'scoutername') {
              element.value = '' // Set all other question (but scouter name) fields to nothing
            }
          }
          )
        }
        if (!force) { // Not forced reset
          if (window.confirm('Are you sure you want to reset?')) { // Confirmation
            reset()
          }
        } else { // Forced reset
          reset()
        }
      }

      const questionSets = []

      Object.keys(this.form).forEach((res) => {
        questionSets.push(<QuestionSet questions={this.form[res]} gameStage={res}/>)
      })
      return (
        <div className="text-center">
          <h1>Scouting Form</h1>
          <MainMenu view="scouting-form"/>
          <form ref="scouting-form" onSubmit={(event) => {
            event.preventDefault()
            const form = ReactDOM.findDOMNode(this.refs['scouting-form'])
            const data = {}
            const elements = Array.from(form.elements)
            elements.forEach(function (element) {
              if (element.type === 'radio') {
                if (element.checked) {
                  data[element.name] = element.value
                }
              } else if (element.type !== 'label' && element.type !== 'button' && element.type !== 'submit') {
                data[element.name] = element.value
              }
            })

            if (!this.state.canSubmit) {
              this.data = data
              this.handleShow()
            } else {
              console.log('Submitted')
              this.setState({canSubmit: false})

              axios.post('/api/team/submit-match', {match: data})
                .then(function () {
                  alert('Submited Data Successfully')
                  requestReset(true)
                })
                .catch(function (err) {
                  if (err.response.data === 'match-already-saved') {
                    if (window.confirm('This match was already saved, \n would you like To update it?')) {
                      axios.post('/api/team/submit-match', {match: data, force: true})
                        .then(() => {
                          alert('Updated Match Successfully')
                          requestReset(true)
                        })
                        .catch(err => {
                          alert('Error While Updating Data')
                          console.error(err)
                        })
                    }
                  } else {
                    alert('Error While Submiting Data')
                  }
                })
            }
          }
          }>
            <NumericQuestion data={{
              name: 'Team Number',
              type: 'number',
              params: {}
            }} gameStage="" noHelpers={true}/>

            <NumericQuestion data={{
              name: 'Match Number',
              params: {
                min: 1
              }
            }} gameStage=""/>

            <TextQuestion data={{
              name: 'Scouter Name'
            }} gameStage=""/>

            {questionSets}
            <div className="btn btn-group">
              <input type="submit" value="Submit" className="btn btn-danger"/>
              <input type="button" value="Reset" className="btn btn-info" onClick={requestReset}/>
            </div>
          </form>
          <ConfirmationModal isOpen={this.state.show} close={this.handleClose} submit={this.handleSubmit}
            questions={this.form} answers={() => this.data}/>
        </div>
      )
    }

    return <div>Loading...</div>
  }
}

export default ScoutingForm
