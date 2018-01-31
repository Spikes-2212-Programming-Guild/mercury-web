/**
 * @param info
 * @returns {*}
 */

function parseNumberQuestion (question) {
  const chart = {}
  chart.data = question.data
  chart.type = 'lineWithAvg'
  var tot = 0
  chart.data.forEach(input => {
    tot += parseInt(input)
  })
  chart.avg = tot / question.data.length
}

function parser (info) {
  const parsedInfo = {}
  Object.keys(info).forEach(key => {
    const chart = {
      'type': info[key].type
    }
    if (info[key].options) {
      chart.labels = info[key].options
    } else if (chart.type === 'boolean') {
      chart.labels = ['Yes', 'No']
    } else {
      parsedInfo[key] = parseNumberQuestion(info[key])
      return
    }

    const parsedData = {}
    chart.labels.forEach(option => {
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
