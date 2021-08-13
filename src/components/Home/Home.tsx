import React, { useMemo } from "react";
import "./Home.css";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Navbar from "../Navbar/Navbar";
import Stats from "../Stats/Stats";
import Post from "../Post/Post";
import * as Member from "../Member/Member";
import { List, AutoSizer } from "react-virtualized";
import StarIcon from "@material-ui/icons/Star";
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

import Divider from "@material-ui/core/Divider";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { profile } from "console";
import Info from "../Info/Info";
import useSearchPosts from "../../hooks/useSearchPosts";
import Row from "../Row/Row";
import TopAccountsWidget from "../TopAccountsWidget/TopAccountsWidget";
import TopRankingProfiles from "../TopRankingProfiles/TopRankingProfiles";
import PersonIcon from "@material-ui/icons/Person";
import CircularProgress from "@material-ui/core/CircularProgress";
import ItemProps from "../../types/ItemProps";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";

const Home = () => {
  const [query, posts, loading, onChangeSearch] = useSearchPosts();
  return (
    <div className="right">
      <div className="results">
        <form className="search">
          <input
            autoFocus
            value={query}
            placeholder="Search Content"
            onChange={onChangeSearch}
          />
        </form>
        <div className="right_middle" tabIndex={0}>
          <StarIcon />
          <span>Featured Posts</span>
        </div>
        {!posts ? null : posts.length === 0 ? null : !loading ? (
          <div style={{ width: "100%", height: "100vh" }}>
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={450}
                  rowCount={500}
                  rowRenderer={({ key, index, style, parent }) => {
                    return (
                      <div className="posts">
                        {posts.map((item: ItemProps, i: number) => (
                          <Post key={i} item={item} />
                        ))}
                      </div>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
        ) : (
          <CircularProgress
            style={{ marginTop: "250px", marginLeft: "400px" }}
          />
        )}
      </div>

      <div className="leaderboard_right">
        <Stats />
        <TopAccountsWidget />
        <TopRankingProfiles />
      </div>
    </div>
  );
};

export default Home;
