import React from 'react'
import {generateColors, getScreenOrientation} from './chart-utils'
import {Line} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const data = chartRecipe.data
  const options = chartRecipe.labels
  const matches = chartRecipe.matches
  return (
    <Line
      data={
        {
          labels: options,
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
      height='110px'
      // width={'100vw'}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          yAxes:
            [{
              ticks: {
                min: 0
              }
            }]
        }
      }}
    />
  )
}
