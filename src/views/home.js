import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

/**
 * This is the main page of the program, that contains links to different parts of the program.
 */
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToScoutingForm: false
    }

    this.renderResult = (<div className="text-center" style={{
      margin: '20px'
    }}>
      <h1>Welcome To Mercury!!!</h1>
      <button onClick={
        () => {
          this.renderResult = <Redirect to="/scouting-form" push={true}/>
          this.forceUpdate()
        }
      }>
        Scout
      </button>
      <br/> <br/>
      <button onClick={() => {
        const teamNumber = prompt('Enter Team Number')
        if (teamNumber) {
          this.renderResult = <Redirect to={'/team/' + teamNumber} push={true}/>
          this.forceUpdate()
        }
      }}>
        info
      </button>
    </div>)
  }

  render () {
    return this.renderResult
  }
}

export default HomePage
