import axios from 'axios'
function getFromServer () {
  return new Promise((resolve, reject) => {
    axios.get('/api/game-config/')
      .then(res => {
        localStorage.setItem('scouting-form', JSON.stringify(res.data))
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
function loadFromMemory () {
  return JSON.parse(localStorage.getItem('scouting-form'))
}

export default {
  getFromServer,
  loadFromStorage: loadFromMemory
}
