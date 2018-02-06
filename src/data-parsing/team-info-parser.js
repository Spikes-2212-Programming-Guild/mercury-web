/**
 * This parses data for a numeric question.
 * It takes the information from the question, the view configs, and the object in which to store the recipe,
 * and parses the data as an array of numbers - the same as the given data, an average, and a median.
 * @param question - the question to parse
 * @param config - a Json file containing the view configs for this information
 * @param chartRecipe - the object on which to make the recipe for the chart of this question
 * @returns {} The updated chart recipe
 */
function parseNumberQuestion (question, config, chartRecipe) {
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

/**
 * This parses data for an Enum question.
 * It takes the information from the question, the view configs, and the object in which to store the recipe,
 * and parses the data as an array of numbers corresponding to the number of appearances each option.
 * @param question - the question to parse
 * @param config - a Json file containing the view configs for this information
 * @param isBoolean - whether the enum question is a boolean or not
 * @param chartRecipe - the object on which to make the recipe for the chart of this question
 * @returns {} The updated chart recipe
 */
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

/**
 *
 * @param info - Information from the form
 * @param config - a Json file containing the view configs for this information
 * @returns {{}} A list of chart recipes
 */
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
