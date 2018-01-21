import Question from './basic'
import React, {Component} from 'react'

/**
 * This class represents one option of a {SelectQuestion} instance
 */
class SelectionOption extends Component {
  render () {
    return (
      <div>
        <input type="radio" name={this.props.questionName} className=""
          value={this.props.title}/> {this.props.title}
      </div>
    )
  }
}

/**
 * This class extends {Question}, and represents a question with multiple choices.
 */
class SelectQuestion extends Question {
  render () {
    const inputs = []
    const optimizedName = this.getOptimizedName()
    this.state.data.params.options.forEach(function (option, index) {
      inputs.push(<SelectionOption title={option}
        questionName={optimizedName} key={index}/>)
    })

    return (
      <div className={this.state.gameStage}>
        <b>{this.state.data.name}</b>
        {inputs}
      </div>
    )
  }
}

export default SelectQuestion
