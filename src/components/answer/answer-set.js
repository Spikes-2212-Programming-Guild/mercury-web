import React, {Component} from 'react'
import Answer from './answer'

/**
 * This class is responsible for displaying a set of answer that all share the same game stage (auto, teleop etc)
 */
class AnswerSet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: props.questions,
      gameStage: props.gameStage
    }
  }

  render () {
    const renderedAnswers = []
    const gameStage = this.props.gameStage
    this.props.questions.forEach((question) => {
      renderedAnswers.push(<Answer data={question} gameStage={gameStage}/>)
    })
    return (
      <div>
        <h2>{this.props.gameStage}</h2>
        {renderedAnswers}
      </div>
    )
  }
}

export default AnswerSet
