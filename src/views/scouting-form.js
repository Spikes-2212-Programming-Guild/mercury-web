import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from '../components/question-set'
import NumericQuestion from '../components/question/number'
import MainMenu from './main-menu'
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

    this.state = {
      form: null
    }

    axios.get('/api/game-config/').then(res => {
      this.setState({form: res.data})
      this.forceUpdate()
    })
  }
  /**
   * This method renders the current ScoutingForm instance to the screen
   * @returns {XML} the rendered ScoutingForm
   */
  render () {
    if (this.state.form) {
      const questionSets = []

      Object.keys(this.state.form).forEach((res) => {
        questionSets.push(<QuestionSet questions={this.state.form[res]} gameStage={res}/>)
      })
      return (
        <div className="text-center" style={{
          margin: '20px'
        }}>
          <h1>Scouting Form</h1>
          <MainMenu view="scouting-form"/>
          <form ref="scouting-form" onSubmit={(event) => {
            event.preventDefault()
            const form = ReactDOM.findDOMNode(this.refs['scouting-form'])
            const data = {}
            const elements = Array.from(form.elements)
            var formValid = true
            var incorrectElement = ''
            console.group('AAAAA')
            elements.forEach(function (element) {
              if ((element.type === 'radio' && element.checked)) {
                data[element.name] = element.value
              } else if (element.type !== 'label' && element.type !== 'button') {
                if (!element.value || element.value === ' ') {
                  formValid = false
                  incorrectElement = element.name
                } else {
                  data[element.name] = element.value
                }
              }

              if (!formValid) {
                console.log(element.name)
              }
            })
            console.groupEnd()
            if (formValid) {
              axios.post('/api/team/submit-match', {match: data})
                .then(function () { alert('Submited Data Successfully') })
                .catch(function () { alert('Error While Submitting Data') })
            } else {
              alert('Invalied Form, Please Fix ' + incorrectElement)
            }
          }}>
            <NumericQuestion data={{name: 'Team Number',
              type: 'number',
              params: {
                min: '0'
              }
            }} gameStage="" noHelpers={true}/>
            {questionSets}

            <input type="submit" value="Submit" className="btn btn-danger"/>
          </form>
        </div>
      )
    }

    return <div>
      <MainMenu view="scouting-form"/></div>
  }
}

export default ScoutingForm
