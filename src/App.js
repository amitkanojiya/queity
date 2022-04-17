import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./component/About";
import Service from "./component/Service";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Service} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
