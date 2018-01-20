import React, {Component} from 'react'
import SwitchQuestion from './question/boolean'
import SelectQuestion from './question/enum'
import NumericQuestion from './question/number'
import TextQuestion from './question/string'

class QuestionSet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: props.questions,
      gameStage: props.gameStage
    }

    this.questionConstructors = {}
    this.questionConstructors['text'] =
            (data, gameStage) => { return <TextQuestion data={data} gameStage={gameStage}/> }
    this.questionConstructors['number'] =
            (data, gameStage) => { return <NumericQuestion data={data} gameStage={gameStage}/> }
    this.questionConstructors['enum'] =
            (data, gameStage) => { return <SelectQuestion data={data} gameStage={gameStage}/> }
    this.questionConstructors['boolean'] =
            (data, gameStage) => { return <SwitchQuestion data={data} gameStage={gameStage}/> }
  }

  render () {
    const renderedQuestions = []
    const gameStage = this.state.gameStage
    this.state.questions.forEach((question) => {
      renderedQuestions.push(this.questionConstructors[question.type](question, gameStage))
    })

    return (
      <div>
        <h1>{this.state.gameStage}</h1>
        {renderedQuestions}
      </div>
    )
  }
}

export default QuestionSet
