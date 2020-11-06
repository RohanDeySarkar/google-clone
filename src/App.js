import React from "react";
import './App.css';
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
