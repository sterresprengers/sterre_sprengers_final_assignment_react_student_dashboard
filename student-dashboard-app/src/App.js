import React from "react"
import './App.css';
import MainContainer from "./components/MainContainer"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;