import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Tasks from '../pages/Tasks';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/tasks" component={Tasks} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
