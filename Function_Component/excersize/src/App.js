import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Info from "./E1/Info";
import Num from "./E1/Num";
import Prime from "./E1/Prime";
import RCAPI from "./E2/RCAPI1";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/rcapi">
            <RCAPI/>
          </Route>
          <Route path="/info">
            <Info />
            <Link to="/todo">TODO</Link>
            <Link to="/num">NUM</Link><br/>
            <Link to="/prime">PRIME</Link>
          </Route>
          <Route path="/num">
            <Num />
            <Link to="/info">INFO</Link><br/>
            <Link to="/prime">PRIME</Link><br/>
            <Link to="/todo">TODO</Link>
          </Route>
          <Route path="/prime">
              <Prime />
              <Link to="/info">INFO</Link><br/>
              <Link to="/todo">TODO</Link><br/>
              <Link to="/num">NUM</Link>
          </Route>
          <Route path="/">
            <Link to="/api">API</Link><br/>
            <Link to="/info">INFO</Link><br/>
            <Link to="/num">NUM</Link><br/>
            <Link to="/prime">PRIME</Link><br/>
            <Link to="/todo">TODO</Link>
            <Link to="/rcapi">RCAPI</Link>
            <Link to="/rcapi2">RCAPI2</Link>
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
