import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Conversations from '../Conversations/Conversations';
import Home from '../Home/Home';

export default function Routes() {
  return (
    <Switch>
      {/** Home */}
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />

      {/** Conversations */}
      <Route path="/conversations" component={Conversations} />
    </Switch>
  );
}
