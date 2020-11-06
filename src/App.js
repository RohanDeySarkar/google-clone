import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="https://rohandeysarkar.github.io/google-clone/">
            <Home />
          </Route>
          <Route exact path="https://rohandeysarkar.github.io/google-clone/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
