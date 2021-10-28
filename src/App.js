import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          {/* <Route path="/search" component={SearchPage}></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
