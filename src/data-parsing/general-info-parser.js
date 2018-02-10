
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
      if (result[dataItem] || result[dataItem] === 0) {
        result[dataItem] += 1
      }
    })
    return result
  }
}

function parseStage1 (info) {
  const infoByQuestion = {}
  Object.keys(info).forEach(teamNumber => {
    const teamInfo = info[teamNumber]
    const teamResult = {}
    Object.keys(teamInfo).forEach(questionName => {
      const question = teamInfo[questionName]
      if (question.type === 'boolean') {
        question.options = ['Yes']
        teamResult[questionName] = stage1Parsers['enum'](question)
      } else {
        teamResult[questionName] = stage1Parsers[question.type](question)
      }
    })
    infoByQuestion[teamNumber] = teamResult
  })
  return infoByQuestion
}

function parser (info) {
  const questionInfo = parseStage1(info)
  console.log(questionInfo)
}

export default parser
