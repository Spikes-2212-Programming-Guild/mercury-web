import React, {Component} from 'react'

export default (title, chartRecipe) => {
  const data = []

  chartRecipe.data.forEach(item => {
    data.push(<li className="list-group-item active">{item}</li>)
  })
  return (<div>
    <ul className="list-group">
      {data}
    </ul>
  </div>)
}
