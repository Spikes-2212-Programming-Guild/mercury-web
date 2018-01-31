/**
 * @param info
 * @returns {*}
 */
function parser (info) {
  const parsedInfo = {}
  Object.keys(info).forEach(key => {
    const chart = {
      'type': info[key].type
    }
    if (info[key].options) {
      chart.options = info[key].options
    } else if (chart.type === 'boolean') {
      chart.options = ['Yes', 'No']
    } else {
      chart.data = info[key].data
      chart.type = 'lineWithAvg'
      var tot = 0
      chart.data.forEach(input => {
        tot += parseInt(input)
      })
      chart.avg = tot / info[key].data.length
      console.log('Avg: ' + chart.avg)
      parsedInfo[key] = chart
      return
    }

    const parsedData = {}
    chart.options.forEach(option => {
      parsedData[option] = 0
    })

    info[key].data.forEach(input => {
      parsedData[input] += 1
    })

    const arr = []
    Object.keys(parsedData).forEach(option => arr.push(parsedData[option]))

    chart.data = arr
    chart.type = 'doughnut'

    parsedInfo[key] = chart
  }
  )
  return parsedInfo
}

export default parser
