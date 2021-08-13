import React, { useState } from "react";
import "./Notification.css";
import vansh from "../../assets/vansh.jpeg";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.jpeg";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import { List, AutoSizer } from "react-virtualized";
import Divider from "@material-ui/core/Divider";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Recent from "../../components/Recent/Recent";
import Stats from "../../components/Stats/Stats";
import Row from "../../components/Row/Row";
import Account from "../../components/Account/Account";
import PersonIcon from "@material-ui/icons/Person";
import TopAccountsWidget from "../TopAccountsWidget/TopAccountsWidget";
import TopRankingProfiles from "../TopRankingProfiles/TopRankingProfiles";
export const Notification: React.FC = () => {
  return (
    <div className="leaderboard">
      <Recent />
      <div className="leaderboard_right">
        <Stats />
        <TopAccountsWidget />
        <TopRankingProfiles />
      </div>
    </div>
  );
};
