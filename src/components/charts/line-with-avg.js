import {generateColors} from './chart-builder'
import {Line} from 'react-chartjs-2'
export default (title, data) => {
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
