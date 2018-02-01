const colors = ['rgba(46, 139, 87, 0.8)', 'rgba(220, 20, 60, 0.8)', 'rgba(64, 224, 208, 0.8)', 'rgba(192, 192, 192, 0.8)', 'rgba(255, 218, 185, 0.8)', 'rgba(75, 0, 130, 0.8)']

function generateColors (size) {
  const res = []
  for (let i = 0; i < size; i++) {
    res[i] = colors[i % colors.length]
  }
  return res
}

