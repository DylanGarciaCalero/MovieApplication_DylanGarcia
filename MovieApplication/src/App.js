import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import * as Routes from './Routes'
import { Home, Movies, Account, Detail } from './pages';

const App = () => {

  return (
    <div className="App__Wrapper">
      <Router>
        <Switch>
          <Route exact path={Routes.ACCOUNT}>
            <Account />
          </Route>
          <Route exact path={Routes.MOVIES}>
            <Movies />
          </Route>
          <Route exact path={Routes.HOME}>
            <Home />
          </Route>
          <Route exact path={Routes.DETAIL}>
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
