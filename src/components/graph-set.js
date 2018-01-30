import React, {Component} from 'react'

import {Line, Doughnut, Bar} from 'react-chartjs-2'

class GraphSet extends Component {
  constructor (props) {
    super(props)
    this.graphConstructors = {}
    this.graphConstructors['doughnut'] = (title, data, labels) => {
      return (
        <Doughnut
          data={{
            datasets: [
              {
                label: title,
                borderWidth: 1,
                data: data
              }
            ],
            labels: labels
          }}
          height={'10%'}
          width={'100%'}
          options={{
          }}
        />)
    }

    this.graphConstructors['bar'] = (title, data, labels) => {
      return (
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: title,
                borderWidth: 1,
                data: data
              }
            ]
          }}
          height={'10%'}
          width={'100%'}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  min: 0,
                  stepSize: 1
                }
              }]
            }
          }}
        />
      )
    }

    this.graphConstructors['line'] = (title, data) => {
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
  }
  render () {
    const graphs = []
    const parser = this.props.parser
    const data = parser(this.props.data)
    Object.keys(data).forEach(key => {
      console.log(data[key].type)
      const graph = this.graphConstructors[data[key].type](key, data[key].data, data[key].options)
      graphs.push(<div>
        <h2>{key}</h2> <br/>
        {graph}
      </div>)
    })
    return (<div>{graphs}</div>)
  }
}

export default GraphSet
