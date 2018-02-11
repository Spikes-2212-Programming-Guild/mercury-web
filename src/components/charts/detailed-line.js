import React from 'react'
import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const avg = chartRecipe.avg
  const med = chartRecipe.med
  const data = chartRecipe.data
  return (
    <Line
      data={
        {
          labels: data,
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
              backgroundColor: generateColors(2)[1],
              borderColor: generateColors(2)[1]
            },
            {
              label: 'Median',
              borderWidth: 1,
              data: data.map(() => med),
              fill: false,
              backgroundColor: generateColors(3)[2],
              borderColor: generateColors(3)[2]
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
