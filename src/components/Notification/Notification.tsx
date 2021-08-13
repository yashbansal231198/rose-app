import React, { useState } from "react";
import "./Notification.css";
import Recent from "../../components/Recent/Recent";
import Stats from "../../components/Stats/Stats";
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
