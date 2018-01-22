import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from '../components/question-set'
import NumericQuestion from '../components/question/number'
import axios from 'axios'

/**
 * This is the main screen of the program.
 * at the moment, it's responsability is to render a scouting and submit data from it.
 * @todo make this called ScoutingForm add add react router that would display different views.
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

    axios.get('/scouting-form/current').then(res => {
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
          <form ref="scouting-form" id="scouting-form">
            <NumericQuestion data={{name: 'Team Number',
              type: 'number',
              params: {
                min: '0'
              }
            }} gameStage=""/>
            {questionSets}

          </form>
          <input type="submit" value="Submit" onClick={
            () => {
              const form = ReactDOM.findDOMNode(this.refs['scouting-form'])

              const data = {}

              const elements = Array.from(form.elements)

              elements.forEach((element) => data[element.name] = element.value)

              axios.post('scouting-form/submit', {form: data}, {
                'Content-Type': 'application/json'
              })
                .then(() => alert('Submitted Data Successfully'))
                .catch(() => alert('Error While Submiting Data'))
            }
          }/>
        </div>
      )
    }

    return <div></div>
  }
}

export default ScoutingForm
