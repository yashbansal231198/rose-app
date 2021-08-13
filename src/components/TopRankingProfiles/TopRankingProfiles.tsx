import profile0 from "../../assets/vansh.jpeg";
import profile1 from "../../assets/profile2.png";
import profile2 from "../../assets/profile3.png";
import profile3 from "../../assets/profile4.png";
import profile4 from "../../assets/profile5.png";
import Account from "../Account/Account";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Row from "../Row/Row";
import useTopProfiles from "../../hooks/useTopProfiles";
import profileImages from "./ProfileImageData";
function TopRankingProfiles() {
  const topProfiles = useTopProfiles();
  return (
    <div className="location_leaders">
      <div className="headline">
        <LoyaltyIcon style={{ marginLeft: 10 }} />
        <h4>TOP 5 RANKING PROFILES</h4>
      </div>
      {!topProfiles ? null : topProfiles.length === 0 ? null : (
        <div>
          {topProfiles.map((Profile, idx) => (
            <Row
              name={Profile.name}
              location={Profile.location}
              image={profileImages[idx]}
              coin={Profile.coin}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopRankingProfiles;
