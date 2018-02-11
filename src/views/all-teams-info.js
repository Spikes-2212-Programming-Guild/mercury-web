import React, {Component} from 'react'
import axios from 'axios'

class AllTeamsInfo extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    axios.get('/api/team/info/all/')
      .then(info => {

      })
      .catch(err => {
        alert('error is ' + JSON.stringify(err))
      })
    return (<div></div>)
  }
}
export default AllTeamsInfo