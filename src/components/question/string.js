import React from 'react'
import Question from './basic'

/**
 * This class extends {Question} and represents a question that expects a string as its answer
 */
class TextQuestion extends Question {
  render () {
    return (
      <div className={this.state.gameStage}>
        <b>{this.state.data.name}</b> <br/>
        <input className="btn btn-outline-secondary" name={this.getOptimizedName()} required style={{width: '95vw'}}/>
      </div>
    )
  }
}

export default TextQuestion
