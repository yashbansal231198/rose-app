import React, { useState } from "react";
import "./Profile.css";
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
import { List, AutoSizer } from "react-virtualized";
import Divider from "@material-ui/core/Divider";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { profile } from "console";
import Info from "../../components/Info/Info";
import Stats from "../../components/Stats/Stats";
import Row from "../../components/Row/Row";
import TopAccountsWidget from "../../components/TopAccountsWidget/TopAccountsWidget";
import TopRankingProfiles from "../../components/TopRankingProfiles/TopRankingProfiles.jsx";
import Account from "../../components/Account/Account";
import PersonIcon from "@material-ui/icons/Person";
function LeaderBoard() {
  return (
    <div className="leaderboard">
      <Info />
      <div className="leaderboard_right">
        <Stats />
        <TopAccountsWidget />
        <TopRankingProfiles />
      </div>
    </div>
  );
}
export default LeaderBoard;
