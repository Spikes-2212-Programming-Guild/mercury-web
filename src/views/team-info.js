import React, {Component} from 'react'
import GraphSet from '../components/graph-set'
import TeamInfoParser from '../data-parsing/team-info-parser'
import TeamInfoConfig from '../data-parsing/configs/team-info-config'
import MainMenu from './main-menu'
import {pickScheme} from '../components/charts/chart-builder'
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
        <form ref={(ci) => this.setState({formRef: ci})} onSubmit={(event) => {
          event.preventDefault()
          const form = this.state.formRef
          const elements = Array.from(form.elements)
          elements.forEach((element) => {
            if (element.name === 'chooseColors') {
              pickScheme(element.value)
              updateHTML()
              this.forceUpdate()
            }
          })
        }}>
          <div className="btn btn-group">
            <select name='chooseColors' class='btn btn-info'>
              <option value="0">Normal</option>
              <option value="1">Sagi Mode</option>
              <option value="2">Greyscale</option>
            </select>
            <input type='submit' value='Change colors' class='btn btn-warning'/>
          </div>
        </form>
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
