import React from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import sprinklr from "../../assets/sprinklr.png";
import profile from "../../assets/profile.png";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link, BrowserRouter as Router } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar_icons">
      <img className="navbar_logo" src={sprinklr} />
      <div className="navbar_middle">
        <a href="/">
          <HomeIcon
            style={{
              fontSize: 32,
              position: "absolute",
              top: "0",
              bottom: "490",
              left: "0",
              right: "0",
              margin: "auto",
            }}
          />
        </a>
        <a href="/leaderboard">
          <AssessmentIcon
            style={{
              fontSize: 32,
              position: "absolute",
              top: "0",
              bottom: "375",
              left: "0",
              right: "0",
              margin: "auto",
            }}
          />
        </a>
      </div>
      <div className="navbar_bottom">
        <a href="/notification">
          <NotificationsIcon
            style={{
              fontSize: 32,
              position: "absolute",
              top: "535",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
            }}
          />
        </a>
        <a href="/profile">
          <AccountBoxIcon
            style={{
              fontSize: 32,
              position: "absolute",
              top: "650",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
            }}
          />
        </a>
      </div>
    </div>
  );
}
export default Navbar;
