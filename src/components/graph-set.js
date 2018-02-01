import React, {Component} from 'react'
import Bar from './charts/bar'
import Doughnut from './charts/doughnut'
import Line from './charts/line'
import LineWithAvg from './charts/line-with-avg'

class GraphSet extends Component {
  constructor (props) {
    super(props)
    this.graphConstructors = {}
    this.graphConstructors['bar'] = Bar
    this.graphConstructors['doughnut'] = Doughnut
    this.graphConstructors['lineWithAvg'] = LineWithAvg
    this.graphConstructors['line'] = Line
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
