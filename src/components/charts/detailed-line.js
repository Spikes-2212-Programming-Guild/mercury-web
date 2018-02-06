import React from 'react'
import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'

/**
 * Creates a line chart with average and median lines using parsed information.
 * @param title - the title of the chart
 * @param chartRecipe - the parsed data to display
 * @returns {} The line chart tag.
 */
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
