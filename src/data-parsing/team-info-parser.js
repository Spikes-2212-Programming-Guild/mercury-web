/**
 * @param info
 * @returns {*}
 */

function parseNumberQuestion (question, chartRecipe) {
  chartRecipe.data = question.data
  chartRecipe.type = 'detailedLine'
  let tot = 0
  chartRecipe.data.forEach(input => {
    tot += parseInt(input) // Calculates the total of all data values
  })
  chartRecipe.avg = tot / question.data.length // The average is the total of all values divided by the number of values
  let arr = [] // Holder array for finding median
  chartRecipe.data.forEach(input => {
    arr.push(parseInt(input)) // Copying values from data to arr
  })
  arr.sort(function sortNumber (a, b) {
    return a - b
  }) // Sorts the array numerically
  let middle = Math.floor((arr.length - 1) / 2)
  if (arr.length % 2 !== 0) { // If there's an odd number of arguments
    chartRecipe.med = arr[middle] // The middle value is the median
  } else { // If there's an even number of arguments
    chartRecipe.med = (arr[middle] + arr[middle + 1]) / 2 // The median is the average of the two middle values
  }
  console.log('med: ' + chartRecipe.med)
  return chartRecipe
}

function parseEnumQuestion (question, chartRecipe) {
  const parsedData = {}
  chartRecipe.labels.forEach(option => {
    parsedData[option] = 0
  })

  question.data.forEach(input => {
    parsedData[input] += 1
  })

  const arr = []
  Object.keys(parsedData).forEach(option => arr.push(parsedData[option]))

  chartRecipe.data = arr
  chartRecipe.type = 'doughnut'
  return chartRecipe
}

function parser (info) {
  const chartRecipes = {}
  Object.keys(info).forEach(key => {
    const chartRecipe = {
      'type': info[key].type
    }
    if (info[key].options) {
      chartRecipe.labels = info[key].options
    } else if (chartRecipe.type === 'boolean') {
      chartRecipe.labels = ['Yes', 'No']
    } else {
      chartRecipes[key] = parseNumberQuestion(info[key], chartRecipe)
      return
    }

    chartRecipes[key] = parseEnumQuestion(info[key], chartRecipe)
  }
  )
  return chartRecipes
}

export default parser
