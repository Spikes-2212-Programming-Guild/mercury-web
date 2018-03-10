import React, {Component} from 'react'
import GraphSet from '../components/chart-set'
import TeamInfoParser from '../data-parsing/team-info-parser'
import TeamInfoConfig from '../data-parsing/configs/team-info-config'
import MainMenu from './main-menu'
import axios from 'axios'

class TeamInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      graphData: [],
      teamNumber: props.match.params.teamNumber,
      formRef: 'colorPick',
      colorSet: 0
    }
    const updateHTML = () => {
      this.toRender = <div className="text-center" style={{
        margin: '20px'
      }}>
        <h1>{'Team ' + this.state.teamNumber}</h1>
        <MainMenu view="team-info" teamNumber={this.state.teamNumber}/>
        <GraphSet data={this.state.graphData} parser={TeamInfoParser} config={TeamInfoConfig}/>
      </div>
    }
    axios.get('/api/team/info/' + this.state.teamNumber).then(res => {
      this.setState({graphData: res.data})
      updateHTML()
      this.forceUpdate()
    })
      .catch(() => alert('Error'))
  }

  render () {
    if (this.toRender) return this.toRender
    return <div>Loading...</div>
  }
}

export default TeamInfo
