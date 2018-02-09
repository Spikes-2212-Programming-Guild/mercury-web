import React from 'react'
import {generateColors} from './chart-builder'
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
              backgroundColor: 'cyan',
              borderColor: 'cyan'
            },
            {
              label: 'Median',
              borderWidth: 1,
              data: data.map(() => med),
              fill: false,
              backgroundColor: 'red',
              borderColor: 'red'
            }
          ]
        }
      }
      height={'50vh'}
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
