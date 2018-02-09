import React, {Component} from 'react'
import Bar from './charts/bar'
import Doughnut from './charts/doughnut'
import Line from './charts/line'
import detailedLine from './charts/detailed-line'

/**
 * Creates a div containing all graphs to be displayed with given data.
 */
class GraphSet extends Component {
  /**
   * Constructs a new {GraphSet} given the data to display,
   * a data parser to format the data, and a Json file with viewing configs.
   * @param props - data, data parser, and info config
   */
  constructor(props) {
    super(props)
    /**
     * An object containing constructors to various chart types.
     * @type {{ChartJS}}
     */
    this.graphConstructors = {}
    this.graphConstructors['bar'] = Bar
    this.graphConstructors['doughnut'] = Doughnut
    this.graphConstructors['detailedLine'] = detailedLine
    this.graphConstructors['line'] = Line
  }

  /**
   * This renders a divider containing all the graphs of the given data using a given format.
   * @returns {XML} a div containing all the graphs.
   */
  render () {
    // An array to contain the graphs.
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
