import Question from './basic'
import React, {Component} from 'react'
/**
 * This class extends {Question}, and represents a question with multiple choices.
 */
class SelectQuestion extends Question {
  render () {
    const inputs = []
    const optimizedName = this.getOptimizedName()
    this.state.data.params.options.forEach((option, index) => {
      inputs.push(
        <label className="btn btn-primary">
          <input type="radio" value={option} className="btn btn-primary" name={optimizedName}/> {option}
        </label>
      )
    })

    return (
      <div className={this.state.gameStage}>
        <b>{this.state.data.name}</b> <br/>
        <div className="btn btn-group btn-group-justified">
          {inputs}
        </div>
      </div>
    )
  }
}

export default SelectQuestion
