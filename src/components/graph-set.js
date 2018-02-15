import React, {Component} from 'react'
import Bar from './charts/bar'
import Doughnut from './charts/doughnut'
import Line from './charts/line'
import detailedLine from './charts/detailed-line'
import detailedBar from './charts/detailed-bar'

class GraphSet extends Component {
  constructor (props) {
    super(props)
    this.graphConstructors = {}
    this.graphConstructors['bar'] = Bar
    this.graphConstructors['doughnut'] = Doughnut
    this.graphConstructors['detailedLine'] = detailedLine
    this.graphConstructors['line'] = Line
    this.graphConstructors['detailedBar'] = detailedBar
  }

  render () {
    const graphs = []
    const parser = this.props.parser
    const chartRecipes = parser(this.props.data, this.props.config)
    Object.keys(chartRecipes).forEach(chartName => {
      console.log(chartRecipes[chartName].type)
      const graph = this.graphConstructors[chartRecipes[chartName].type](chartName, chartRecipes[chartName])
      graphs.push(<div className="chart-container">
        <h2>{chartName}</h2> <br/>
        {graph}
      </div>)
    })
    return (<div>{graphs}</div>)
  }
}

export default GraphSet
