import React, {Component} from 'react'
import GraphSet from '../components/graph-set'
import viewConfig from '../view-configs/team-config'
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
      <GraphSet data={this.state.graphData} config={viewConfig}/>
    </div>)
  }
}

export default TeamInfo
