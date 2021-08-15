import React, { useState } from "react";
import "./Notification.css";
import Stats from "../../components/Stats/Stats";
import TopAccountsWidget from "../TopAccountsWidget/TopAccountsWidget";
import TopRankingProfiles from "../TopRankingProfiles/TopRankingProfiles";
import RecentNotifications from "../RecentNotifications/RecentNotifications";
export const Notification: React.FC = () => {
  return (
    <div className="leaderboard">
      <RecentNotifications />
      <div className="leaderboard_right">
        <Stats />
        <TopAccountsWidget />
        <TopRankingProfiles />
      </div>
    </div>
  );
};
