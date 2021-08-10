
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import { Link , Route, Switch, BrowserRouter as Router } from 'react-router-dom';
export type ItemProps= {
  urlToImage: string,
  title: string,
  url: string,
  description: string,
  publishedAt: string
}

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Posts} />
      <Route  path="/leaderboard" component={LeaderBoard}/>
      <Route  path="/profile" component={Profile}/>
    </Switch>
    </div>
    </Router>
  );
}


export default App;
