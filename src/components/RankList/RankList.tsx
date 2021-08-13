import React from "react";
import _2nd from "../../assets/2nd.png";
import _3rd from "../../assets/3rd.png";
import crown from "../../assets/crown.png";
import stars1 from "../../assets/stars1.png";
import stars2 from "../../assets/stars2.png";
import stars3 from "../../assets/stars3.png";
import coins from "../../assets/coins.png";
import { List, AutoSizer } from "react-virtualized";
import Divider from "@material-ui/core/Divider";
import useMembers from "../../hooks/useMembers";
import MemberImages from "./MemberImages";
function RankList() {
  const members = useMembers();
  return (
    <div className="leaderboard_middle">
      <h2>Members</h2>
      {!members ? null : members.length == 0 ? null : (
        <div className="points_list">
          <div className="featured">
            <div className="leader1">
              <img className="position" src={_2nd} />
              <img className="featured1" src={MemberImages[0]} />
              <div className="box">
                <img className="star" src={stars1} />
                <span>{members[0].coin}</span>
              </div>
              <h5>{members[0].name}</h5>
              <h6>{members[0].location}</h6>
            </div>
            <div className="leader2">
              <img className="position1" src={crown} />
              <img className="featured2" src={MemberImages[1]} />
              <div className="box">
                <img className="star" src={stars1} />
                <span>{members[1].coin}</span>
              </div>
              <h5>{members[1].name}</h5>
              <h6>{members[1].location}</h6>
            </div>
            <div className="leader1">
              <img className="position" src={_3rd} />
              <img className="featured1" src={MemberImages[2]} />
              <div className="box">
                <img className="star" src={stars1} />
                <span>{members[2].coin}</span>
              </div>
              <h5>{members[2].name}</h5>
              <h6>{members[2].location}</h6>
            </div>
          </div>
          <h5>HIGH ACHIEVERS</h5>

          <div style={{ width: "100%", height: "10000px" }}>
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={100}
                  rowCount={1000}
                  rowRenderer={({ key, index, style, parent }) => {
                    return (
                      <div>
                        <div className="row">
                          <h3>{index + 4}</h3>
                          <img
                            className="profile"
                            src={MemberImages[index % 8]}
                          />
                          <div className="meta">
                            <h5>{members[index % 8].name}</h5>
                            <h6>{members[index % 8].location}</h6>
                          </div>
                          <div className="row_right">
                            <img src={coins} className="coins" />
                            <span>{members[index % 8].coin}</span>
                          </div>
                        </div>
                        <Divider />
                      </div>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
        </div>
      )}
    </div>
  );
}

export default RankList;
