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
const Notification: React.FC = () => {
  return (
    <div className="leaderboard">
      <Recent />
      <div className="leaderboard_right">
        <Stats />
        <div className="department_leaders">
          <div className="headline">
            <PersonIcon style={{ marginLeft: 10, marginBottom: 20 }} />
            <h4>ACCOUNTS</h4>
          </div>
          <h5>0 of 4 Channels Added</h5>
          <Divider
            style={{
              height: 4,
              width: "90%",
              marginLeft: 15,
              borderRadius: 3,
              marginBottom: 40,
            }}
          />
          <Account image={linkedin} text="Add Linkedin account" />
          <Account image={twitter} text="Add Twitter account" />
          <Account image={logo} text="Add Facebook account" />
          <Account image={instagram} text="Add Instagram account" />
          <h4>Manage Accounts</h4>
        </div>
        <div className="location_leaders">
          <div className="headline">
            <LoyaltyIcon style={{ marginLeft: 10 }} />
            <h4>TOP 5 RANKING PROFILES</h4>
          </div>
          <Row
            name="Vansh Batra"
            location="Gurgaon, India"
            image={vansh}
            coin="9"
          />
          <Row
            name="Sarthak Saxena"
            location="Gurgaon, India"
            image={profile2}
            coin="8"
          />
          <Row
            name="Aayush Vashish"
            location="Gurgaon, India"
            image={profile3}
            coin="7"
          />
          <Row
            name="Samarth Arora"
            location="Gurgaon, India"
            image={profile4}
            coin="5"
          />
          <Row
            name="Ankush Jain"
            location="Gurgaon, India"
            image={profile5}
            coin="5"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
