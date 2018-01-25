import React, {Component} from 'react'
import axios from 'axios'
import {Bar, Line} from 'react-chartjs-2'

class TeamInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      graphData: [],
      renderedGraphs: [],
      teamNumber: props.match.params.teamNumber
    }
    function countAppearances (options, labels) {
      const appearances = {}
      labels.forEach(item => {
        appearances[item] = 0
      })
      options.forEach(option => {
        appearances[option] += 1
      })
      const arr = []
      Object.keys(appearances).forEach(key => arr.push(appearances[key]))
      return arr
    }
    this.graphConstructors = {}
    this.graphConstructors['enum'] = (title, data, options) => {
      return (
        <Bar
          data={{
            labels: options,
            datasets: [
              {
                label: title,
                borderWidth: 1,
                data: countAppearances(data, options)
              }
            ]
          }}
          height={'10%'}
          width={'100%'}
          options={{
            maintainAspectRation: false,
            scales: {
              yAxes: [{
                ticks: {
                  min: 0
                }
              }]
            }
          }}
        />)
    }
    this.graphConstructors['boolean'] = (title, data) => {
      return this.graphConstructors['enum'](title, data, ['Yes', 'No'])
    }
    this.graphConstructors['number'] = (title, data) => {
      return (
        <Line
          data={
            {
              labels: data,
              datasets: [
                {
                  label: title,
                  borderWidth: 1,
                  data: data
                }
              ]
            }
          }
          height={'10%'}
          width={'100%'}
          options={{
            maintainAspectRation: false,
            scales: {
              yAxes:
                [{
                  ticks: {
                    min: 0
                  }
                }]
            }
          }}
        />
      )
    }
    this.graphConstructors['text'] = () => <div></div>

    axios.get('/team/info/' + this.state.teamNumber).then(res => {
      this.setState({graphData: res.data})
    })
      .catch(() => alert("Error"))
  }
  generateGraphs (data) {
    const graphs = []
    Object.keys(data).forEach(key => {
      console.log(data[key].type)
      graphs.push(this.graphConstructors[data[key].type](key, data[key].data, data[key].options))
    })
    return graphs
  }

  render () {
    const graphs = this.generateGraphs(this.state.graphData)
    return (<div>
      <h1>{'Team ' + this.state.teamNumber}</h1>
      {graphs}
    </div>)
  }
}

export default TeamInfo
