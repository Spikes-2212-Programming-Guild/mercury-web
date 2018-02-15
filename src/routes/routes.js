import React from 'react'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import ScoutingForm from '../views/scouting-form'
import TeamInfo from '../views/team-info'
import InfoHub from '../views/info-hub'
import GeneralInfo from '../views/general-info'
import SettingsMenu from '../views/settings-menu'
/**
 * This module is responsible for displaying different components depending on the url (emulating a multi page app)
 */

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/scouting-form" exact component={ScoutingForm}/>
      <Route path="/" exact render={() => (
        <Redirect to="/scouting-form"/>
      )}/>
      <Route path="/info/all" exact component={GeneralInfo}/>
      <Route path="/team/:teamNumber" exact component={TeamInfo}/>
      <Route path="/info-hub" exact component={InfoHub}/>
      <Route path="/settings" exact component={SettingsMenu}/>
    </Switch>
  </BrowserRouter>
)
