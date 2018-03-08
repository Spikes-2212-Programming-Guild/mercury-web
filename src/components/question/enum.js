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
        <label className="btn-primary btn enum-btn ">
          <input type="radio" data-placement="left" value={option} className="" name={optimizedName} required /> {option}
        </label>
      )
    })

    return (
      <div >
        <b>{this.state.data.name}</b> <br/>
        <div className="btn-group-vertical btn" data-toggle="buttons">
          {inputs}
        </div>
      </div>
    )
  }
}

export default SelectQuestion
