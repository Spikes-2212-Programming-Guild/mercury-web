const colorSchemes = {
  'default': ['rgba(46, 139, 87, 0.8)', 'rgba(220, 20, 60, 0.8)', 'rgba(64, 224, 208, 0.8)', 'rgba(192, 192, 192, 0.8)', 'rgba(255, 218, 185, 0.8)', 'rgba(75, 0, 130, 0.8)'],
  'redGreen': ['rgba(255, 215, 0, 0.8)', 'rgba(220, 20, 60, 0.8)', 'rgba(173, 200, 255, 0.8)', 'rgba(192, 192, 192, 0.8)', 'rgba(244, 164, 96, 0.8)', 'rgba(0, 0, 128, 0.8)'],
  'greyScale': ['rgba(0, 0, 0, 0.8)', 'rgba(47, 79, 79, 0.8)', 'rgba(119, 136, 153, 0.8)', 'rgba(128, 128, 128, 0.8)', 'rgba(192, 192, 192, 0.8)', 'rgba(220, 220, 220, 0.8)']
}

var schemeNum = 0

export function pickScheme (num) {
  console.log('Changed scheme to: ' + num + ' (from: ' + schemeNum + ')')
  schemeNum = num
  console.log('Scheme is now: ' + schemeNum)
}

function getColorScheme (num) {
  switch (parseInt(num)) {
    case 1:
      return colorSchemes.redGreen
    case 2:
      return colorSchemes.greyScale
    default:
      return colorSchemes.default
  }
}

export function generateColors (size) {
  const res = []
  var colors = getColorScheme(schemeNum)
  for (let i = 0; i < size; i++) {
    res[i] = colors[i % colors.length]
  }
  return res
}
