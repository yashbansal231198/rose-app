import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Row from "../Row/Row";
import useLocationLeaders from "../../hooks/useLocationMembers";
import LocationImages from "./LocationImages";
const LocationLeaderWidget: React.FC = () => {
  const locationLeaders = useLocationLeaders();
  return (
    <div className="location_leaders">
      <div className="headline">
        <LoyaltyIcon style={{ marginLeft: 10 }} />
        <h4>TOP LEADERS OF MY LOCATION</h4>
      </div>
      {!locationLeaders
        ? null
        : locationLeaders.length == 0
        ? null
        : locationLeaders.map((leader, index) => (
            <Row
              name={leader.name}
              location={leader.location}
              image={LocationImages[index]}
              coin={leader.coin}
            />
          ))}
    </div>
  );
};

export default LocationLeaderWidget;
