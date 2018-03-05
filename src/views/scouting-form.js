import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from '../components/question-set'
import NumericQuestion from '../components/question/number'
import MainMenu from './main-menu'
import scoutingFormManager from '../util/scouting-form-manager'
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
  }

  /**
   * This method renders the current ScoutingForm instance to the screen
   * @returns {XML} the rendered ScoutingForm
   */
  render () {
    if (this.form) {
      const reset = () => {
        const form = ReactDOM.findDOMNode(this.refs['scouting-form'])
        const elements = Array.from(form.elements)
        elements.forEach(function (element) {
          if (element.type === 'radio') {
            if (element.checked) {
              element.checked = false
            }
          } else if (element.type !== 'label' && element.type !== 'button' && element.type !== 'submit') {
            element.value = ''
          }
        }
        )
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
            if (window.confirm('Are You Sure You Want To Insert This Match? \n ' + JSON.stringify(data))) {
              axios.post('/api/team/submit-match', {match: data})
                .then(function () {
                  alert('Submited Data Successfully')
                  reset()
                })
                .catch(function (err) {
                  if (err.response.data === 'match-already-saved') {
                    if (window.confirm('This match was already saved, \n would you like To update it?')) {
                      axios.post('/api/team/submit-match', {match: data, force:true})
                        .then(() => alert('Updated Match Successfully'))
                        .catch(err => {
                          alert('Error While Updating Data')
                          console.error(err)
                        })
                    } else {
                      reset()
                    }
                  } else {
                    alert('Error While Submiting Data')
                  }
                })
            }
          }}>
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

            {questionSets}
            <div className="btn btn-group">
              <input type="submit" value="Submit" className="btn btn-danger"/>
              <input type="button" value="Reset" className="btn btn-info" onClick={reset}/>
            </div>
          </form>
        </div>
      )
    }

    return <div>Loading...</div>
  }
}

export default ScoutingForm
