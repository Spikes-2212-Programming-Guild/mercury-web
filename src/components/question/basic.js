import React, {Component} from 'react'

/**
 * this class defines basic methods for all types of questions.
 */
class Question extends Component {
  /**
   * this constructs a new {Question} instance with props.
   * saves all the relevant props in the state object
   * @param props
   * @constructor
   */
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      gameStage: props.gameStage
    }
  }

  /**
   * this method returns the name of the question that is optimized to be an HTML property.
   * @returns {string} the name of the question, optimized to use as an HTML property
   */
  getOptimizedName () {
    return this.optimizeName(this.state.data.name + this.state.gameStage)
  }

  /**
   * this methods is used to optimize a name to a valid HTML property format.
   * the method removes all spaces and makes all the characters lower case.
   * @param name - the name that should be optimized
   * @returns {string} - the name in an optimized format
   */
  optimizeName (name) {
    return name.split(' ').join('').toLowerCase()
  }

  render () {
    return (
      <div>

      </div>
    )
  }
}

export default Question
