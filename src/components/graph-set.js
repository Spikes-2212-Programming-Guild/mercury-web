import React, {Component} from 'react'

import {Bar, Line} from 'react-chartjs-2'

class GraphSet extends Component {
  constructor (props) {
    super(props)
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
                data: data
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
                  min: 0,
                  stepSize: 1
                }
              }]
            }
          }}
        />)
    }
    this.graphConstructors['boolean'] = this.graphConstructors['enum']
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
  }
  render () {
    const graphs = []
    const parser = this.props.parser
    const data = parser(this.props.data)
    Object.keys(data).forEach(key => {
      console.log(data[key].type)
      graphs.push(this.graphConstructors[data[key].type](key, data[key].data, data[key].options))
    })
    return (<div>{graphs}</div>)
  }
}

export default GraphSet
