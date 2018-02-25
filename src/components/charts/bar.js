import React from 'react'
import {generateColors} from './chart-builder'
import {Bar} from 'react-chartjs-2'
export default (title, chartRecipe) => {
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
            backgroundColor: generateColors(data.length)
          }
        ]
      }}
      height={'20vh'}
      width={'100%'}
      options={{
        maintainAspectRatio: true,
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
