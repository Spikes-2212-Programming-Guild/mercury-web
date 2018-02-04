import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

class MainMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: props.view,
      ref: undefined,
      toRender: <div className="btn btn-group w-100">
        <button className="btn btn-secondary" onClick={() => {
          if (this.state.currentView !== 'home') {
            this.setState({
              toRender: <Redirect to="/"/>
            })
            this.forceUpdate()
          }
        }}>Home</button>
        <button className="btn btn-secondary" onClick={() => {
          if (this.state.currentView !== 'scouting-form') {
            this.setState({
              toRender: <Redirect to="/scouting-form/"/>
            })
            this.forceUpdate()
          }
        }}>Scout</button>
        <input ref={(c) => { this.setState({ref: c}) }} className="btn btn-warning" type="number" placeholder="Team Number"/>
        <button className="btn btn-secondary" onClick={() => {
          if (this.state.ref) {
            const input = this.state.ref
            const teamNumber = input.value
            if (teamNumber && !isNaN(teamNumber)) {
              this.setState({toRender: <Redirect to={'/team/' + teamNumber} push={true}/>})
            }
          }
        }}>Find Info For This Team </button>
      </div>
    }
  }

  render () {
    return (<div className="w-100">
      {this.state.toRender} <br/>
    </div>)
  }
}

export default MainMenu
