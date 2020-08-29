import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import "./App.scss";

export default function App() {
  const [userNow, setUserNow] = useState();
  const passUserToApp = (user) => {
    setUserNow(user);
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Join passUserToApp={passUserToApp} />
          </Route>
          <Route exact path="/chat">
            <Chat userNow={userNow} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
