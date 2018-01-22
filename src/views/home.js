import React, {Componenet} from 'react'
import Redirect from 'react-router-dom'
class Home extends Componenet {
  render () {
    return (<div>
      <button onClick={<Redirect to="/scouting-form" push /> }>Scout</button>
    </div>)
  }
}
export default Home
