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
        else if (newValue > input.max) newValue = input.max
        input.value = newValue
      }
    }
    // Setting a default minimum value if not set
    const min = this.state.data.params.min ? this.state.data.params.min : 0
    // Setting a default maximum value if not set
    const max = this.state.data.params.max ? this.state.data.params.max : 10000
    const questionInput = <input min={min} max={max}
      name={this.getOptimizedName()} placeholder={this.state.data.params.min} ref={this.getOptimizedName() + 'input'} type="number"
      className="btn btn-secondary" style={{
        width: '30vw'
      }
      } required/>
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
