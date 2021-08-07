import React from "react";
import "./Navbar.css";
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import sprinklr from "../../assets/sprinklr.png";
import profile from "../../assets/profile.png";
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
function Navbar()
{
    return(
        <div className="navbar_icons">
         <img className="navbar_logo" src={sprinklr} />
         <div className="navbar_middle">
       <HomeIcon style={{fontSize: 32, marginBottom: 27}}/>
       <AssessmentIcon style={{fontSize: 32, marginBottom: 27}}/>
       <DateRangeIcon style={{fontSize: 32, marginBottom: 27}}/>
       <TurnedInIcon style={{fontSize: 32, marginBottom: 27}}/>
       <ViewHeadlineIcon style={{fontSize: 32}}/>
       </div>
       <div className="navbar_bottom">
        <NotificationsIcon style={{fontSize: 32, marginBottom: 30}}/>
       <AccountBoxIcon style={{fontSize: 32}}/>
       </div>
       </div>
    )
}
export default Navbar;