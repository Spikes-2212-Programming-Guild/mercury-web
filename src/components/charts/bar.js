import {generateColors} from './chart-builder'
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
      height={'10%'}
      width={'100%'}
      options={{
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
