import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import "./App.css";
import { useHistory } from "react-router-dom";

export default function App() {
  const [userNow, setUserNow] = useState();
  let history = useHistory();
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

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
