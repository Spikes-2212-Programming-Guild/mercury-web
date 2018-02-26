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
        <label className="btn-primary btn enum-btn">
          <input type="radio" value={option} className="" name={optimizedName} required/> {option}
        </label>
      )
    })

    return (
      <div className="enum-container">
        <b>{this.state.data.name}</b> <br/>
        <div className="btn-group" style={{margin: 'auto'}}>
          {inputs}
        </div>
      </div>
    )
  }
}

export default SelectQuestion
