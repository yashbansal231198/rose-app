import React from "react";
import coins from "../../assets/coins.png";
import default_profile from "../../assets/default_profile.png";
function Stats() {
  return (
    <div className="mypoints">
      <img className="featured3" src={default_profile} />
      <h3>Yash Bansal</h3>
      <div className="mystats">
        <div className="mystats_total">
          <div className="data">
            <img className="coins3" src={coins} />
            <span>0</span>
          </div>
          <h6>Total points earned</h6>
        </div>
        <div className="mystats_week">
          <div className="data">
            <img className="coins3" src={coins} />
            <span>0</span>
          </div>
          <h6>Points Earned this Week</h6>
        </div>
      </div>
    </div>
  );
}

export default Stats;
