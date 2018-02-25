import React from 'react'
import {generateColors, getScreenOrientation} from './chart-builder'
import {Line} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const avg = chartRecipe.avg
  const med = chartRecipe.med
  const data = chartRecipe.data
  const labels = chartRecipe.labels
  return (
    <Line
      data={
        {
          labels: labels,
          datasets: [
            {
              label: title,
              borderWidth: 1,
              borderColor: generateColors(1),
              data: data,
              fill: false,
              backgroundColor: generateColors(1)
            },
            {
              label: 'Average',
              borderWidth: 1,
              data: data.map(() => avg),
              fill: false,
              backgroundColor: generateColors(3)[2],
              borderColor: generateColors(3)[2]
            },
            {
              label: 'Median',
              borderWidth: 1,
              data: data.map(() => med),
              fill: false,
              backgroundColor: generateColors(5)[4],
              borderColor: generateColors(5)[4]
            }
          ]
        }
      }
      height={
        (() => {
          if (getScreenOrientation() === 'land') return '30vw'
          else return ''
        })()
      }
      // width={'100vw'}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          yAxes:
            [{
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
