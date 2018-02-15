import React, {Component} from 'react'
import MainMenu from './main-menu'
import GraphSet from '../components/graph-set'
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
        <div className="text-center" style={{
          margin: '20px'
        }}>
          <MainMenu view="general-info"/><br/>
          <GraphSet config="" parser={a => {
            const result = a
            Object.keys(result).forEach(key => {
              result[key].type = 'detailedBar'
              result[key].labels = a.labels
            })
            delete result.labels
            return result
          }} data={this.state.data}/>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}
export default AllTeamsInfo
