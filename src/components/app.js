import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionSet from './question-set'
import NumericQuestion from './question/number'
import axios from 'axios'

class App extends Component {
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

    return (<div></div>)
  }
}

export default App
