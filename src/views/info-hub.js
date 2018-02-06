import React, {Component} from 'react'
import MainMenu from './main-menu'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

// TODO: Make this generic.
/**
 * This page is responsible to direct the user to whichever type of information they desire.
 * It gives option to search for data according to whichever options given.
 */
class InfoHub extends Component {
  /**
   * This constructs a new {InfoHub}, with an input field for each type of information display.
   * There's a form for each input so the user can press Enter to submit their request.
   * @param props
   */
  constructor (props) {
    super(props)
    this.state = {
      form: null,
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
          <input className='btn btn-secondary' type='number' name='teamNumber'/>
        </form>
      </div>
    }
  }

  /**
   * Renders the page containing all info directs.
   * @return {*}
   */
  render () {
    return (<div className="text-center" style={{
      margin: '20px'
    }}>
      {this.state.toRender}
    </div>)
  }
}

export default InfoHub
