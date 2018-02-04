import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

class MainMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: props.view,
      ref: undefined,
      toRender: <div className="btn btn-group-vertical" style={{
        margin: '0px'
      }}>
        <div className="btn-group">
          <button className="btn btn-secondary" style={{
            width: '35vw'
          }} onClick={() => {
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
          }} style={{
            width: '35vw'
          }}>Scout</button>
        </div>

        <div className="btn-group">
          <input ref={(c) => { this.setState({ref: c}) }} className="btn btn-warning" type="number"
            placeholder="Team Number" style={{
              width: '35vw'
            }}/>
          <button className="btn btn-secondary" onClick={() => {
            if (this.state.ref) {
              const input = this.state.ref
              const teamNumber = input.value
              if (teamNumber && !isNaN(teamNumber) && teamNumber !== this.props.teamNumber) {
                this.setState({toRender: <Redirect to={'/team/' + teamNumber} push={true}/>})
              }
            }
          }} style={{
            width: '35vw'
          }}>Find Info </button>
        </div>

      </div>
    }
  }

  render () {
    return (<div>
      {this.state.toRender} <br/>
    </div>)
  }
}

export default MainMenu
