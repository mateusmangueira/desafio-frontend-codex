import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Tasks from '../pages/Tasks';
import TaskCreate from '../pages/Tasks/Create';
import TaskEdit from '../pages/Tasks/Edit';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/tasks" exact component={Tasks} isPrivate />
        <Route path='/tasks/create' component={TaskCreate} isPrivate />
        <Route path='/tasks/edit/:_id' component={TaskEdit} isPrivate />
      </Switch>
  );
}
