import React, {Component} from 'react'
import GraphSet from '../components/graph-set'
import TeamInfoParser from '../data-parsing/team-info-parser'
import TeamInfoConfig from '../data-parsing/configs/team-info-config'
import MainMenu from './main-menu'
import axios from 'axios'

/**
 * This page is responsible for displaying a team's information in graphs.
 */
class TeamInfo extends Component {
  /**
   * This constructs a new {TeamInfo} with a given team number,
   * and requests the information about that team from the server.
   * @param props
   */
  constructor (props) {
    super(props)
    this.state = {
      graphData: [],
      teamNumber: props.match.params.teamNumber
    }
    axios.get('/api/team/info/' + this.state.teamNumber).then(res => {
      this.setState({graphData: res.data})
      this.forceUpdate()
    })
      .catch(() => alert('Error'))
  }

  /**
   * This renders a page with the graphs of information about the requested team.
   *
   * @return {XML} The page with the requested team's information in graphs.
   * @see GraphSet
   */
  render () {
    return (<div className="text-center" style={{
      margin: '20px'
    }}>
      <h1>{'Team ' + this.state.teamNumber}</h1>
      <MainMenu view="team-info" teamNumber={this.state.teamNumber}/>
      <GraphSet data={this.state.graphData} parser={TeamInfoParser} config={TeamInfoConfig}/>
    </div>)
  }
}

export default TeamInfo
