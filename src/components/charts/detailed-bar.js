import React from 'react'
import {generateColors, getScreenOrientation} from './chart-utils'
import {Bar} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const labels = chartRecipe.labels
  const datasets = []

  let index = 0
  Object.keys(chartRecipe).forEach((key) => {
    if (key !== 'type' && key !== 'labels') {
      index += 1
      datasets.push({
        label: key,
        borderWidth: 1,
        data: chartRecipe[key],
        backgroundColor: generateColors(index)[index - 1]
      })
    }
  })
  return <Bar
    data={{
      labels: labels,
      datasets: datasets
    }}
    // width='100%'
    height={
      (() => {
        if (getScreenOrientation() === 'land') return '30vw'
        else return ''
      })()
    }

    options={{
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    }}
  />
}
