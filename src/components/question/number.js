import React from 'react'
import Question from './basic'

/**
 * This class extends {Question} and represents a question that expects a number as its answer.
 */
class NumericQuestion extends Question {
  constructor(props) {
    super(props)
    this.state.ref = null
  }
  componentDidMount () {
    this.state.ref.value = this.state.data.params.min
  }

  render () {
    const addNumberToInput = (number) => {
      return () => {
        const input = this.state.ref

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
    const max = this.state.data.params.max ? this.state.data.params.max : 100000
    const questionInput = <input min={min} max={max}
      name={this.getOptimizedName()} ref={ (r) => (this.state.ref = r)} type="number"
      className="btn btn-secondary" required/>
    if (!this.props.noHelpers) {
      return (
        <div>
          <b>{this.state.data.name}</b> <br/>
          <div className="btn btn-group">
            <button type="button" className="btn btn-primary helper-btn"
              onClick={addNumberToInput(-1)}>
              -1
            </button>
            {questionInput}
            <button type="button" className="btn btn-primary helper-btn"
              onClick={addNumberToInput(1)}>
              +1
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
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
