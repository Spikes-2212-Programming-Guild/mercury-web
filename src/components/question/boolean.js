import SelectQuestion from './enum'
import React, {Component} from 'react'

/**
 * This class extends {SelectQuestion}, and it has two built in options, either "Yes" or "No"
 */
class SwitchQuestion extends SelectQuestion {
  constructor (props) {
    props.data.params = {}
    props.data.params.options = ['Yes', 'No']
    super(props)
  }
  render () {
    return super.render()
  }
}

export default SwitchQuestion
