import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import EstimateCard from "./EstimateCard";
import EstimatePage from "./EstimatePage";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        {/* if no cookie then login  */}
        <Route path="/estimate/:id">
          <EstimatePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
