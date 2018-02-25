import React from 'react'
import {generateColors, getScreenOrientation} from './chart-utils'
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
      height={
        (() => {
          if (getScreenOrientation() === 'land') return '30vw'
          else return ''
        })()
      }
      // width={'100%'}
      options={{
        maintainAspectRatio: true
      }}
    />)
}
