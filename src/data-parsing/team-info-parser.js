/**
 * @param info
 * @returns {*}
 */
function parser (info) {
  const parsedInfo = {}
  Object.keys(info).forEach(key => {
    const newQuestion = {
      'type': info[key].type
    }
    if (info[key].options) {
      newQuestion.options = info[key].options
    } else if (newQuestion.type === 'boolean') {
      newQuestion.options = ['Yes', 'No']
    } else {
      newQuestion.data = info[key].data
      parsedInfo[key] = newQuestion
      return
    }

    const parsedData = {}
    newQuestion.options.forEach(option => {
      parsedData[option] = 0
    })

    info[key].data.forEach(input => {
      parsedData[input] += 1
    })

    const arr = []
    Object.keys(parsedData).forEach(option => arr.push(parsedData[option]))

    newQuestion.data = arr

    parsedInfo[key] = newQuestion
  }
  )
  return parsedInfo
}

export default parser
