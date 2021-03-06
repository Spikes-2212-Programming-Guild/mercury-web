import React from 'react'
import {generateColors, getScreenOrientation} from './chart-utils'
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
      height={
        (() => {
          if (getScreenOrientation() === 'land') return '30vw'
          else return ''
        })()
      }
      // width={'100'}
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
