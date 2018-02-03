import React from 'react'
import Question from './basic'

/**
 * This class extends {Question} and represents a question that expects a number as its answer.
 */
class NumericQuestion extends Question {
  render () {
    const addNumberToInput = (number, inputName) => {
      return () => {
        const input = this.refs[inputName]

        let value = parseInt(input.value)
        if (!value) value = 0

        let newValue = value + number
        if (newValue < input.min) newValue = input.min
        input.value = newValue
      }
    }

    if (!this.props.noHelpers) {
      return (
        <div className={this.optimizeName(this.state.gameStage)}>
          <b>{this.state.data.name}</b> <br/>
          <button type="button" className="btn btn-primary" onClick={addNumberToInput(-1, this.getOptimizedName() + 'input')}>
            -1</button>
          <input min={this.state.data.params.min} ref={this.getOptimizedName() + 'input'} type="number"/>
          <button type="button" className="btn btn-primary" onClick={addNumberToInput(1, this.getOptimizedName() + 'input')}>
            +1</button>
        </div>
      )
    } else {
      return (
        <div className={this.optimizeName(this.state.gameStage)}>
          <input min={this.state.data.params.min} ref={this.getOptimizedName() + 'input'} type="number"/>
        </div>
      )
    }
  }
}

export default NumericQuestion
