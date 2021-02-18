import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import HistoryComponent from './HistoryComponent';
import RegisterComponent from './RegisterComponent';
import NavComponent from './NavComponent';

export default function MainComponent() {
  return (
    <div>
      <NavComponent />
      <Switch>
        <Route exact path="/home">
          <HomeComponent />
        </Route>
        <Route exact path="/history">
          <HistoryComponent />
        </Route>
      </Switch>
    </div>
  );
}
