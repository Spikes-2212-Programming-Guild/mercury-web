import React from 'react'
import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const avg = chartRecipe.avg
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
              backgroundColor: 'cyan',
              borderColor: 'cyan'
            }
          ]
        }
      }
      height={'10%'}
      width={'100%'}
      options={{
        maintainAspectRation: false,
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
