import React, {Component} from 'react'
import SwitchQuestion from './question/boolean'
import SelectQuestion from './question/enum'
import NumericQuestion from './question/number'
import TextQuestion from './question/string'

/**
 * This class is responsible for displaying a set of questions that all share the same game stage (auto, teleop etc)
 */
class QuestionSet extends Component {
  /**
   * Constructs a new {QuestionSet} given the questions to display and the game stage to display the questions for.
   * @param props - question and game stage.
   */
  constructor (props) {
    super(props)

    this.state = {
      questions: props.questions,
      gameStage: props.gameStage
    }

    /**
     * An object containing constructors to various question types.
     * @type {{input}}
     */
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

  /**
   * Renders a div containing all the questions with in one game stage
   * @returns {} A div containing the input tags
   */
  render () {
    const renderedQuestions = []
    const gameStage = this.state.gameStage
    this.state.questions.forEach((question) => {
      renderedQuestions.push(this.questionConstructors[question.type](question, gameStage))
    })
    return (
      <div>
        <h2>{this.state.gameStage}</h2>
        {renderedQuestions}
      </div>
    )
  }
}

export default QuestionSet
