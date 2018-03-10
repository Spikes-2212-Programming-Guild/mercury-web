import React, {Component} from 'react'

export default (title, chartRecipe) => {
  const data = []

  chartRecipe.data.forEach(item => {
    if (item !== '') {
      data.push(<li className="list-group-item active">Match {chartRecipe.matchNumber[chartRecipe.data.indexOf(item)]}: {item}</li>)
    }
  })
  return (<div>
    <ul className="list-group">
      {data}
    </ul>
  </div>)
}
