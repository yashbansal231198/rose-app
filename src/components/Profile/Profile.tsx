import React, { useState } from "react";
import "./Profile.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Stats from "../../components/Stats/Stats";
import TopAccountsWidget from "../../components/TopAccountsWidget/TopAccountsWidget";
import TopRankingProfiles from "../../components/TopRankingProfiles/TopRankingProfiles";
const Profile = () => {
  return (
    <div className="leaderboard">
      <ProfileInfo />
      <div className="leaderboard_right">
        <Stats />
        <TopAccountsWidget />
        <TopRankingProfiles />
      </div>
    </div>
  );
};

export default Profile;
