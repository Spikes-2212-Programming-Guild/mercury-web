import React, {Component} from 'react'
import GraphSet from '../components/graph-set'
import TeamInfoParser from '../data-parsing/team-info-parser'
import TeamInfoConfig from '../data-parsing/configs/team-info-config'
import MainMenu from './main-menu'
import axios from 'axios'

class TeamInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graphData: [],
      teamNumber: props.match.params.teamNumber
    }
    axios.get('/api/team/info/' + this.state.teamNumber).then(res => {
      this.setState({graphData: res.data})
      this.forceUpdate()
    })
      .catch(() => alert("Error"))
  }

  render () {
    return (<div>
      <h1>{'Team ' + this.state.teamNumber}</h1>
      <MainMenu view="team-info"/>
      <GraphSet data={this.state.graphData} parser={TeamInfoParser} config={TeamInfoConfig}/>
    </div>)
  }
}

export default TeamInfo
