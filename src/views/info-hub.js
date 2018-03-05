import React, {Component} from 'react'
import MainMenu from './main-menu'
import {Redirect} from 'react-router-dom'
import TeamInfoForm from '../components/info-hub/team-info-form'
import GeneralInfoForm from '../components/info-hub/general-info-form'

class InfoHub extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formRef: '',
      toRender: <div><h1>{'Data Hub'}</h1>
        <MainMenu view="info-hub"/>
        <TeamInfoForm/>
        <br/>
        <GeneralInfoForm/>
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
