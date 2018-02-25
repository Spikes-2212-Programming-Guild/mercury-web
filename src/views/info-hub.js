import React, {Component} from 'react'
import MainMenu from './main-menu'
import {Redirect} from 'react-router-dom'
import TeamInfoForm from '../components/info-hub/team-info-form'

class InfoHub extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formRef: '',
      toRender: <div><h1>{'Data Hub'}</h1>
        <MainMenu view="info-hub"/>
        <TeamInfoForm/>
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
