import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

/**
 * This is a menu bar containing buttons to redirect the user to the scouting form and the info hub.
 */
class MenuBar extends Component {
  /**
   * Constructs a new {MenuBar} which contains buttons to redirect user to wanted pages.
   * @param props
   */
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

  /**
   * Renders what is requested by the user (Either the current page or a {Redirect} to a requested page.
   * @return {XML} The page or the requested page.
   */
  render () {
    return (<div>
      {this.state.toRender} <br/>
    </div>)
  }
}

export default MenuBar
