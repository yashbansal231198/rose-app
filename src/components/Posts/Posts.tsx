import React, {useMemo} from 'react';
import "./Posts.css";
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Navbar from "../../components/Navbar/Navbar";
import Stats from "../../components/Stats/Stats";
import Item from "../../components/Item/Item";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import {List, AutoSizer} from "react-virtualized";
import StarIcon from '@material-ui/icons/Star';
import ryan from "../../assets/ryan.jpeg";
import joel from "../../assets/joel.jpeg";
import vansh from "../../assets/vansh.jpeg";
import _2nd from "../../assets/2nd.png";
import _3rd from "../../assets/3rd.png";
import crown from "../../assets/crown.png";
import stars1 from "../../assets/stars1.png";
import stars2 from "../../assets/stars2.png";
import stars3 from "../../assets/stars3.png";
import coins from "../../assets/coins.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.jpeg";
import default_profile from "../../assets/default_profile.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";

import Divider from '@material-ui/core/Divider';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { profile } from "console";
import Info from "../../components/Info/Info"; 

import Row from "../../components/Row/Row";
import Account from "../../components/Account/Account.tsx";
import PersonIcon from '@material-ui/icons/Person';
import { Link , Route, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
export type ItemProps= {
  urlToImage: string,
  title: string,
  url: string,
  description: string,
  publishedAt: string
}
async function searchNews(q : string ) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://newsapi.org/v2/everything?q=${q}&from=2021-08-08&sortBy=publishedAt&language=en&apiKey=e8f88e032eee479b96b08f42b235a13f`);
  
  const body = await response.json();
  while(body.articles.length%2!=0) {
    body.articles.splice(0,1);
  }
  return body.articles;
}
function Posts() {
  const [list, setList] = React.useState([]);
  const [query, setQuery] = React.useState("instagram");
  const search = (e : React.FormEvent)  => {
    e.preventDefault();
    searchNews(query).then(res=> setList(res));
  };
  return (
<div className="right">
     <div className="results">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          placeholder="Search Content"
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
        
      </form>
      <div className="right_middle">
          <StarIcon/>
          <span>Featured Posts</span>
      </div>
      {!list
        ? null
        : list.length === 0
          ? null
          : 
        <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={450}
              rowCount={500}
              rowRenderer={({ key, index, style, parent }) => {
                

                return (<div className="posts">
                {list.map((item: ItemProps, i : number) => (
                  <Item key={i} item={item} />
                ))}
              </div> );
              }}
            />
          )}
        </AutoSizer>
      </div>
 }
 </div>
 <div className="leaderboard_right">
              <Stats/>
                <div className="department_leaders">
                  <div className="headline">
                      <PersonIcon style={{marginLeft: 10, marginBottom: 20}}/>
                      <h4>ACCOUNTS</h4>
                  </div> 
                  <h5>0 of 4 Channels Added</h5>
                  <Divider style={{height: 4, width: "90%", marginLeft: 15, borderRadius: 3, marginBottom: 40}}/>
              <Account image={linkedin} text="Add Linkedin account"/>
              <Account image={twitter} text="Add Twitter account"/>
              <Account image={logo} text="Add Facebook account"/>
              <Account image={instagram} text="Add Instagram account"/>
              <h4>Manage Accounts</h4>
                </div>
                <div className="location_leaders">
                <div className="headline">
                      <LoyaltyIcon style={{marginLeft: 10}}/>
                      <h4>TOP 5 RANKING PROFILES</h4>
                     
                  </div>
              <Row name="Vansh Batra" location="Gurgaon, India" image={vansh} coin="9"/>
              <Row name="Sarthak Saxena" location="Gurgaon, India" image={profile2} coin="8"/>
              <Row name="Aayush Vashish" location="Gurgaon, India" image={profile3} coin="7"/>
              <Row name="Samarth Arora" location="Gurgaon, India" image={profile4} coin="5"/>
              <Row name="Ankush Jain" location="Gurgaon, India" image={profile5} coin="5"/>
                </div>
            </div>
 </div>
  )
};

export default Posts;