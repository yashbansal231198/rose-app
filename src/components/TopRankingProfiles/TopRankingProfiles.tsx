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
