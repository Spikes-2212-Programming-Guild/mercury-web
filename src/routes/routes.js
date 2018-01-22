import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ScoutingForm from '../views/scouting-form'
import HomePage from '../views/home'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/scouting-form" exact component={ScoutingForm}/>
      <Route path="/" exact component={HomePage}/>
    </Switch>
  </BrowserRouter>
)
