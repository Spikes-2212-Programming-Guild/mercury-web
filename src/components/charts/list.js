import React, {Component} from 'react'

export default (title, chartRecipe) => {
  const data = []

  chartRecipe.matchNumber.forEach(match => {
    const matchData = chartRecipe.data[chartRecipe.matchNumber.indexOf(match)]
    if (matchData !== '') {
      data.push(<li className="list-group-item active">Match {match}: {matchData}</li>)
    }
  })
  return (<div>
    <ul className="list-group">
      {data}
    </ul>
  </div>)
}
