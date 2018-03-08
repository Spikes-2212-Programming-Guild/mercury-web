import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

class MainMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: props.view,
      ref: undefined,
      toRender:
        <div className="btn-group " style={{margin: '0px'}}>
          <button className="btn btn-secondary main-menu-btn" onClick={() => {
            if (this.state.currentView !== 'scouting-form') {
              this.setState({
                toRender: <Redirect to="/scouting-form/"/>
              })
              this.forceUpdate()
            }
          }} >Scout
          </button>
          <button className="btn btn-secondary main-menu-btn" onClick={() => {
            if (this.state.currentView !== 'info-hub') {
              this.setState({
                toRender: <Redirect to="/info-hub/"/>
              })
              this.forceUpdate()
            }
          }} >Info Hub
          </button>
          <button className="btn btn-secondary main-menu-btn" onClick={() => {
            if (this.state.currentView !== 'settings-menu') {
              this.setState({
                toRender: <Redirect to="/settings/" push={true}/>
              })
              this.forceUpdate()
            }
          }} >Settings
          </button>
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
