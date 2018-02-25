import React from 'react'
import {generateColors, getScreenOrientation} from './chart-builder'
import {Line} from 'react-chartjs-2'

export default (title, chartRecipe) => {
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
            }
          ]
        }
      }
      height={(() => {
        if (getScreenOrientation() === 'land') return '30vw'
        else return ''
      })()}
      width={'100%'}
      options={{
        maintainAspectRatio: true,
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
