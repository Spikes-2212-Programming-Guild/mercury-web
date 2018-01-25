import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ScoutingForm from '../views/scouting-form'
import HomePage from '../views/home'
import TeamInfo from '../views/team-info'

/**
 * This module is responsible for displaying different components depending on the url (emulating a multi page app)
 */

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/scouting-form" exact component={ScoutingForm}/>
      <Route path="/" exact component={HomePage}/>
      <Route path="/team/:teamNumber" exact component={TeamInfo}/>
    </Switch>
  </BrowserRouter>
)
