import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import Home from "./components/Home";
import Query from "./components/Query";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


function App() {
  

  return( 
  <Fragment>
    
    <Router>
    <div className="container">
    <Switch>

      <Route
        exact
        path="/home"
        component = {Home}
      />
      <Route
        exact
        path="/"
        render={props =>
          
            <Redirect to="/home"/>
          
        } 
      />
      <Route
        exact
        path="/query"
        component = {Query}
      />

      <Route
        exact
        path="/aboutus"
        component = {AboutUs}
      />

      <Route
        exact
        path="/contactus"
        component = {ContactUs}
      />

    </Switch>
  </div>
    </Router>
  </Fragment>
  );

}

export default App;
