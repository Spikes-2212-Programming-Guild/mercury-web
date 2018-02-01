import React, {Component} from 'react'

import {Line, Doughnut, Bar} from 'react-chartjs-2'

class GraphSet extends Component {
  constructor (props) {
    super(props)
    const colors = ['rgba(46, 139, 87, 0.8)', 'rgba(220, 20, 60, 0.8)', 'rgba(64, 224, 208, 0.8)', 'rgba(192, 192, 192, 0.8)', 'rgba(255, 218, 185, 0.8)', 'rgba(75, 0, 130, 0.8)']
    this.generateColors = function (size) {
      const res = []
      for (var i = 0; i < size; i++) {
        res[i] = colors[i % colors.length]
      }
      return res
    }
    this.graphConstructors = {}
    this.graphConstructors['doughnut'] = (title, chartRecipe) => {
      const labels = chartRecipe.labels
      const data = chartRecipe.data
      return (
        <Doughnut
          data={{
            datasets: [
              {
                label: title,
                borderWidth: 1,
                data: data,
                backgroundColor: this.generateColors(data.length)
              }
            ],
            labels: labels
          }}
          height={'10%'}
          width={'100%'}
          options={{}}
        />)
    }

    this.graphConstructors['bar'] = (title, chartRecipe) => {
      const labels = chartRecipe.labels
      const data = chartRecipe.data
      return (
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: title,
                borderWidth: 1,
                data: data,
                backgroundColor: this.generateColors(data.length)
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
                  borderColor: this.generateColors(1),
                  data: data,
                  fill: false,
                  backgroundColor: this.generateColors(1)
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

    this.graphConstructors['lineWithAvg'] = (title, chartRecipe) => {
      const avg = chartRecipe.avg
      const data = chartRecipe.data
      return (
        <Line
          data={
            {
              labels: data,
              datasets: [
                {
                  label: title,
                  borderWidth: 1,
                  borderColor: this.generateColors(1),
                  data: data,
                  fill: false,
                  backgroundColor: this.generateColors(1)
                },
                {
                  label: 'Average',
                  borderWidth: 1,
                  data: data.map(() => avg),
                  fill: false,
                  backgroundColor: 'cyan',
                  borderColor: 'cyan'
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
    const chartRecipes = parser(this.props.data)
    Object.keys(chartRecipes).forEach(chartName => {
      console.log(chartRecipes[chartName].type)
      const graph = this.graphConstructors[chartRecipes[chartName].type](chartName, chartRecipes[chartName])
      graphs.push(<div>
        <h2>{chartName}</h2> <br/>
        {graph}
      </div>)
    })
    return (<div>{graphs}</div>)
  }
}

export default GraphSet
