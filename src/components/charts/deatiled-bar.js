import React from 'react'
import {generateColors} from './chart-builder'
import {Bar} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const labels = chartRecipe.labels
  const datasets = []

  Object.keys(chartRecipe).forEach((key, index) => {
    if (key !== 'type') {
      datasets.push({
        label: key,
        borderWidth: 1,
        data: chartRecipe[key],
        backgroundColor: generateColors(index)
      })
    }
  })

  return <Bar>
    data={{
      labels: labels,
      datasets: datasets,
      width: '100%',
      height: '30vh'
    }}
  </Bar>
}
