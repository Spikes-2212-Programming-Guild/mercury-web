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
          <button className="btn btn-secondary" onClick={() => {
            if (this.state.currentView !== 'scouting-form') {
              this.setState({
                toRender: <Redirect to="/scouting-form/"/>
              })
              this.forceUpdate()
            }
          }} style={{
            width: '25vw'
          }}>Scout
          </button>
          <button className="btn btn-secondary" onClick={() => {
            if (this.state.currentView !== 'info-hub') {
              this.setState({
                toRender: <Redirect to="/info-hub/"/>
              })
              this.forceUpdate()
            }
          }} style={{
            width: '25vw'
          }}>Info Hub
          </button>
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
