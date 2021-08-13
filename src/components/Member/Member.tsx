import React from "react";
import "./Member.css";
import RankList from "../RankList/RankList";
import Stats from "../Stats/Stats";
import LocationLeaderWidget from "../LocationLeaderWidget/LocationLeaderWidget";
import DepartmentLeaderWidget from "../DepartmentLeaderWidget/DepartmentLeaderWidget";
export const Member = () => {
  return (
    <div className="leaderboard">
      <RankList />
      <div className="leaderboard_right">
        <Stats />
        <DepartmentLeaderWidget />
        <LocationLeaderWidget />
      </div>
    </div>
  );
};
