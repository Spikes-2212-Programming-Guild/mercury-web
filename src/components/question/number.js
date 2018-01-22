import React from 'react'
import Question from './basic'

/**
 * This class extends {Question} and represents a question that expects a number as its answer.
 */
class NumericQuestion extends Question {
  render () {
    return (
      <div className={this.optimizeName(this.state.gameStage)}>
        <b>{this.state.data.name}</b> <br/>
        <input name={this.getOptimizedName()}
          type="number"
          min={this.state.data.params.min}/>
      </div>
    )
  }
}

export default NumericQuestion
