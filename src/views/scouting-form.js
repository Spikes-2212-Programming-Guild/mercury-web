import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from '../components/question-set'
import NumericQuestion from '../components/question/number'
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
        <div>
          <h1>Scouting Form</h1>
          <form ref="scouting-form" onSubmit={(event) => {
            event.preventDefault()
            const form = ReactDOM.findDOMNode(this.refs['scouting-form'])
            const data = {}
            const elements = Array.from(form.elements)
            elements.forEach(function (element) {
              if (element.type === 'radio') {
                if (element.checked) data[element.name] = element.value
              } else if (element.type !== 'label') {
                data[element.name] = element.value
              }
            })
            axios.post('/api/team/submit-match', {match: data})
              .then(function () { alert('Submited Data Successfully') })
              .catch(function () { alert('Error While Submitting Data') })
          }}>
            <NumericQuestion data={{name: 'Team Number',
              type: 'number',
              params: {
                min: '0'
              }
            }} gameStage=""/>
            {questionSets}

            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }

    return <div></div>
  }
}

export default ScoutingForm
