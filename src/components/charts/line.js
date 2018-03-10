import React from 'react'
import {generateColors, getScreenOrientation} from './chart-utils'
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
      height='90px'
      // width={'100%'}
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
