import React from 'react'
import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'

export default (title, chartRecipe) => {
  const data = chartRecipe.data
  const labels = chartRecipe.labels
  return (
    <Line
      data={
        {
          labels: data,
          datasets: [
            {
              label: title,
              borderWidth: 1,
              borderColor: this.generateColors(1),
              data: data,
              fill: false,
              backgroundColor: this.generateColors(1)
            }
          ]
        }
      }
      height={'30vh'}
      width={'100%'}
      options={{
        maintainAspectRatio: true,
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
