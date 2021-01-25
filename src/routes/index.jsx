import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home';
import Candidate from '../pages/Candidate'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/candidate/:id" component={Candidate} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
