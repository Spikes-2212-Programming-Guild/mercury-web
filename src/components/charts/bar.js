import React from 'react'
import {generateColors} from './chart-builder'
import {Bar} from 'react-chartjs-2'

/**
 * Creates a bar chart using parsed information.
 * @param title - the title of the chart
 * @param chartRecipe - the parsed data to display
 * @returns {} The bar chart tag.
 */
export default (title, chartRecipe) => {
  const labels = chartRecipe.labels
  const data = chartRecipe.data
  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: title,
            borderWidth: 1,
            data: data,
            backgroundColor: generateColors(data.length)
          }
        ]
      }}
      height={'30vh'}
      width={'100%'}
      options={{
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
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
