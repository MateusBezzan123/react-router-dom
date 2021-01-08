import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashBoard";
import Preferences from "./Preferences";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
