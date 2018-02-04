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
    const questionInput = <input min={this.state.data.params.min}
      name={this.getOptimizedName()} ref={this.getOptimizedName() + 'input'} type="number"
      className="btn btn-secondary" style={{
        width: '30vw'
      }
      }/>
    if (!this.props.noHelpers) {
      return (
        <div className={this.optimizeName(this.state.gameStage)}>
          <b>{this.state.data.name}</b> <br/>
          <div className="btn btn-group">
            <button type="button" className="btn btn-primary"
              onClick={addNumberToInput(-1, this.getOptimizedName() + 'input')} style={{
                width: '15vw'
              }
              }>
              -1
            </button>
            {questionInput}
            <button type="button" className="btn btn-primary"
              onClick={addNumberToInput(1, this.getOptimizedName() + 'input')} style={{
                width: '15vw'
              }
              }>
              +1
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className={this.optimizeName(this.state.gameStage)}>
          <b>{this.state.data.name}</b> <br/>
          <div className="btn-group">
            {questionInput}
          </div>
        </div>
      )
    }
  }
}

export default NumericQuestion
