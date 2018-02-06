import React from 'react'
import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'

/**
 * Creates a line chart using parsed information.
 * @param title - the title of the chart
 * @param chartRecipe - the parsed data to display
 * @returns {} The line chart tag.
 */
export default (title, chartRecipe) => {
  const data = chartRecipe.data
  const labels = chartRecipe.labels // What's this for?
  return (
    <Line
      data={
        {
          labels: data,
          datasets: [
            {
              label: title,
              borderWidth: 1,
              borderColor: this.generateColors(data.length),
              data: data,
              fill: false,
              backgroundColor: this.generateColors(data.length)
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
