/**
 * @param info
 * @returns {*}
 */

function parseNumberQuestion(question, config) {
  const chartRecipe = {labels: question.labels}
  chartRecipe.data = question.data
  chartRecipe.type = config.number
  let tot = 0
  chartRecipe.data.forEach(input => {
    tot += parseInt(input) // Calculates the total of all data values
  })
  chartRecipe.avg = tot / question.data.length // The average is the total of all values divided by the number of values
  let arr = [] // Holder array for finding median
  chartRecipe.data.forEach(input => {
    arr.push(parseInt(input)) // Copying values from data to arr
  })
  let middle = Math.floor((arr.length - 1) / 2)
  if (arr.length % 2 !== 0) { // If there's an odd number of arguments
    chartRecipe.med = arr[middle] // The middle value is the median
  } else { // If there's an even number of arguments
    chartRecipe.med = (arr[middle] + arr[middle + 1]) / 2 // The median is the average of the two middle values
  }
  return chartRecipe
}

function parseEnumQuestion(question, config, isBoolean) {
  const chartRecipe = {
    labels: question.labels,
    matches: question.matches
  }
  if (isBoolean) {
    chartRecipe.type = config.boolean
  } else {
    chartRecipe.type = config.enum
  }
  const parsedData = {}

  if (chartRecipe.type === 'enumLine') {
    chartRecipe.data = question.data.map((item) => {
      return question.labels.indexOf(item)
    })
  } else {
    chartRecipe.labels.forEach(option => {
      parsedData[option] = 0
    })

    question.data.forEach(input => {
      parsedData[input] += 1
    })

    const arr = []
    Object.keys(parsedData).forEach(option => arr.push(parsedData[option]))

    chartRecipe.data = arr
  }

  return chartRecipe
}

function parser(info, config) {
  const chartRecipes = {}
  Object.keys(info).forEach(key => {
    if (key !== 'matchnumber') {
      if (info[key].options) {
        info[key].matches = info['matchnumber']
        info[key].labels = info[key].options
        chartRecipes[key] = parseEnumQuestion(info[key], config, false)
      } else if (info[key].type === 'boolean') {
        info[key].matches = info['matchnumber']
        info[key].labels = ['No', 'Yes']
        chartRecipes[key] = parseEnumQuestion(info[key], config, true)
      } else if (info[key].type === 'number') {
        info[key].labels = info['matchnumber']
        chartRecipes[key] = parseNumberQuestion(info[key], config)
      } else {
        const chartRecipe = {
          data: info[key].data,
          matchNumber: info['matchnumber'],
          type: 'list'
        }
        chartRecipes[key] = chartRecipe
      }
    }
  })
  return chartRecipes
}

export default parser
