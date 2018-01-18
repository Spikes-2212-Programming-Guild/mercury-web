import SelectQuestion from './enum'
import React, {Component} from 'react'

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
