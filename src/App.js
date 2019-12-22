import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import EstimatePage from "./EstimatePage";
import Login from "./Login";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
import Cookie from "js-cookie";

function App() {
  const token = Cookie.get("token");
const [reload, setReload] = useState(false)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* if no cookie, then redirect to login  */}
          {token ? <Dashboard /> : <Login setReload={setReload} />}
        </Route>
        <Route path="/estimate/:id">
          <EstimatePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
