/**
 * @param info
 * @returns {*}
 */

function parseNumberQuestion (question, chartRecipe) {
  chartRecipe.data = question.data
  chartRecipe.type = 'lineWithAvg'
  let tot = 0
  chartRecipe.data.forEach(input => {
    tot += parseInt(input)
  })
  chartRecipe.avg = tot / question.data.length
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
