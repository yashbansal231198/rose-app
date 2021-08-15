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
          <HomeIcon style={{ fontSize: 32 }} />
          <span>Home</span>
        </a>
        <a href="/member">
          <AssessmentIcon
            style={{
              fontSize: 32,
            }}
          />
          <span>Members</span>
        </a>
      </div>
      <div className="navbar_bottom">
        <a href="/notification">
          <NotificationsIcon
            style={{
              fontSize: 32,
            }}
          />
          <span>Notifications</span>
        </a>
        <a href="/profile">
          <AccountBoxIcon
            style={{
              fontSize: 32,
            }}
          />
          <span>Account</span>
        </a>
      </div>
    </div>
  );
}
export default Navbar;
