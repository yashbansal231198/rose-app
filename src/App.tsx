import "./App.css";
import React, { Suspense, lazy } from "react";
import { lazily } from "react-lazily";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Post/Post";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

const { Member } = lazily(() => import("./components/Member/Member"));
const { Notification } = lazily(
  () => import("./components/Notification/Notification")
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Route path="/member" component={Member} />
            <Route path="/profile" component={Profile} />
            <Route path="/notification" component={Notification} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
