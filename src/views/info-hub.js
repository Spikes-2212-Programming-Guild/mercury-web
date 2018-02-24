import React, {Component} from 'react'
import MainMenu from './main-menu'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

class InfoHub extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formRef: '',
      toRender: <div><h1>{'Data Hub'}</h1>
        <MainMenu view="info-hub"/>
        <form ref={(ci) => {
          this.setState({formRef: ci})
        }} onSubmit={(event) => {
          event.preventDefault()
          const form = this.state.formRef
          const elements = Array.from(form.elements)
          var teamNumber = 0
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
          <input min={1} max={10000} className='btn btn-secondary' type='number' name='teamNumber'/>
        </form>
        <br/>
        <button className="btn btn-secondary" onClick={() => {
          this.setState({
            toRender: <Redirect to="/info/all" push={true}/>
          })
        }}>General Info</button>
      </div>
    }
  }

  render () {
    return (<div className="text-center">
      {this.state.toRender}
    </div>)
  }
}

export default InfoHub
