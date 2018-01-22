import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ScoutingForm from '../components/scouting-form'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/scouting-form" exact component={ScoutingForm}/>
    </Switch>
  </BrowserRouter>
)
