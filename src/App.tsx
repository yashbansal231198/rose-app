import "./App.css";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Post/Post";
import Profile from "./components/Profile/Profile";
import Notification from "./components/Notification/Notification";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
export type ItemProps = {
  urlToImage: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
};
const Home = lazy(() => import("./components/Home/Home"));
const Member = lazy(() => import("./components/Member/Member"));
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/leaderboard" component={Member} />
            <Route path="/profile" component={Profile} />
            <Route path="/notification" component={Notification} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
