import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class TeamInfoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formRef: null,
      toRender: <form ref={(ci) => {
        this.setState({formRef: ci})
      }} onSubmit={(event) => {
        event.preventDefault()
        const form = this.state.formRef
        const elements = Array.from(form.elements)
        let teamNumber = 0
        elements.forEach((element) => {
          if (element.name === 'teamNumber') {
            teamNumber = element.value
            console.log('Received TeamNumber: ' + teamNumber)
          }
        })
        if (teamNumber) {
          this.setState({
            toRender: <Redirect to={'/team/' + teamNumber} push={true}/>
          })
          this.forceUpdate()
        }
      }}>
        <h2>{'Info by team'}</h2>
        <b>{'Enter Team Number'}</b> <br/>
        <div className="btn btn-group">
          <input min={1} max={10000} className='btn btn-secondary' type='number' name='teamNumber'/>
          <input type="submit" className="btn btn-secondary" value="Search"/>
        </div>
      </form>
    }
  }
  render () {
    return this.state.toRender
  }
}
export default TeamInfoForm
