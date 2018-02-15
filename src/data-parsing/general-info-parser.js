export default info => {
  const result = info
  Object.keys(result).forEach(key => {
    result[key].type = 'detailedBar'
    result[key].labels = info.labels
  })
  delete result.labels
  return result
}