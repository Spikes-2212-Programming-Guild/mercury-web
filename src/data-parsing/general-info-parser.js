
const stage1Parsers = {
  number: (question) => {
    const result = {}
    let avg = 0
    question.data = question.data.map((item) => parseInt(item))
    question.data = question.data.sort((a, b) => a - b)
    question.data.map((item) => {
      avg += item
    })
    result.max = question.data[question.data.length - 1]
    result.avg = avg
    return result
  },
  enum: (question) => {
    const result = {}
    question.options.forEach(dataItem => { result[dataItem] = 0 })
    question.data.forEach(dataItem => {
      if (result[dataItem]) {
        result[dataItem] += 1
      }
    })
    return result
  }
}

function parseStage1 (info) {
  const questionInfo = {}
  Object.keys(info).forEach(teamNumber => {
    const question = info[teamNumber]
    if (question.type === 'boolean') {
      question.options = ['Yes']
      questionInfo[teamNumber] = stage1Parsers['enum'](question)
    } else {
      questionInfo[teamNumber] = stage1Parsers[question.type](question)
    }
  })
  return questionInfo
}

function parser (info) {
  const questionInfo = parseStage1(info)
}

export default parser
