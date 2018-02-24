import React, {Component} from 'react'
import MainMenu from './main-menu'
import GraphSet from '../components/graph-set'
import GeneralInfoParser from '../data-parsing/general-info-parser'
import axios from 'axios'

class AllTeamsInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: undefined
    }
    axios.get('/api/team/info/all/')
      .then(info => {
        this.setState({data: info.data})
      })
      .catch(err => {
        alert('error is ' + JSON.stringify(err))
      })
  }

  render () {
    if (this.state.data) {
      return (
        <div className="text-center">
          <h1>General Info</h1>
          <MainMenu view="general-info"/><br/>
          <GraphSet config="" parser={GeneralInfoParser} data={this.state.data}/>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}
export default AllTeamsInfo
