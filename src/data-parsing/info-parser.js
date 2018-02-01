/**
 * @param info
 * @returns {*}
 */

function parseNumberQuestion (question, config, chartRecipe) {
  chartRecipe.data = question.data
  chartRecipe.type = config.number
  let tot = 0
  chartRecipe.data.forEach(input => {
    tot += parseInt(input)
  })
  chartRecipe.avg = tot / question.data.length
  return chartRecipe
}

function parseEnumQuestion (question, config, isBoolean, chartRecipe) {
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
  if (isBoolean) {
    chartRecipe.type = config.boolean
  } else {
    chartRecipe.type = config.enum
  }
  return chartRecipe
}

function parser (info, config) {
  const chartRecipes = {}
  Object.keys(info).forEach(key => {
    const chartRecipe = {
      'type': info[key].type
    }
    if (info[key].options) {
      chartRecipe.labels = info[key].options
      chartRecipes[key] = parseEnumQuestion(info[key], config, false, chartRecipe)
    } else if (chartRecipe.type === 'boolean') {
      chartRecipe.labels = ['Yes', 'No']
      chartRecipes[key] = parseEnumQuestion(info[key], config, true, chartRecipe)
    } else {
      chartRecipes[key] = parseNumberQuestion(info[key], config, chartRecipe)
    }
  }
  )
  return chartRecipes
}

export default parser
