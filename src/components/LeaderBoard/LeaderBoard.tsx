import React from "react";
import "./LeaderBoard.css";
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
import default_profile from "../../assets/default_profile.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import {List, AutoSizer} from "react-virtualized";
import Divider from '@material-ui/core/Divider';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { profile } from "console";
import RankList from "../../components/RankList/RankList"; 
import Stats from "../../components/Stats/Stats";
import Row from "../../components/Row/Row";
function LeaderBoard () {
    
    return (
        <div className="leaderboard">
            <RankList/>
            <div className="leaderboard_right">
              <Stats/>
                <div className="department_leaders">
                  <div className="headline">
                      <LoyaltyIcon style={{marginLeft: 10}}/>
                      <h4>TOP LEADERS OF MY DEPARTMENT</h4>
                  </div> 
              <Row name="Joel Lindhe" location="San Francisco" image={joel} coin="90"/>
              <Row name="Ryan Parr" location="Portland, OR" image={ryan} coin="35"/>
              <Row name="Vansh Batra" location="Gurgaon, India" image={vansh} coin="30"/>
              <Row name="Rachit Pathak" location="Bangalore, India" image={profile5} coin="27"/>
              <Row name="Sarthak Saxena" location="Gurgaon, India" image={profile4} coin="25"/>
                </div>
                <div className="location_leaders">
                <div className="headline">
                      <LoyaltyIcon style={{marginLeft: 10}}/>
                      <h4>TOP LEADERS OF MY LOCATION</h4>
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
}
export default LeaderBoard;