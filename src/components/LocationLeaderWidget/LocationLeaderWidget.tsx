import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Row from "../Row/Row";
import vansh from "../../assets/vansh.jpeg";
const LocationLeaderWidget: React.FC = () => {
  return (
    <div className="location_leaders">
      <div className="headline">
        <LoyaltyIcon style={{ marginLeft: 10 }} />
        <h4>TOP LEADERS OF MY LOCATION</h4>
      </div>
      <Row
        name="Vansh Batra"
        location="Gurgaon, India"
        image={vansh}
        coin="9"
      />
      <Row
        name="Sarthak Saxena"
        location="Gurgaon, India"
        image={profile2}
        coin="8"
      />
      <Row
        name="Aayush Vashish"
        location="Gurgaon, India"
        image={profile3}
        coin="7"
      />
      <Row
        name="Samarth Arora"
        location="Gurgaon, India"
        image={profile4}
        coin="5"
      />
      <Row
        name="Ankush Jain"
        location="Gurgaon, India"
        image={profile5}
        coin="5"
      />
    </div>
  );
};

export default LocationLeaderWidget;
