import React from 'react'
import {generateColors} from './chart-builder'
import {Doughnut} from 'react-chartjs-2'
export default (title, chartRecipe) => {
  const labels = chartRecipe.labels
  const data = chartRecipe.data
  return (
    <Doughnut
      data={{
        datasets: [
          {
            label: title,
            borderWidth: 1,
            data: data,
            backgroundColor: generateColors(data.length)
          }
        ],
        labels: labels
      }}
      height={'30vh'}
      width={'100%'}
      options={{
        maintainAspectRatio: true
      }}
    />)
}
