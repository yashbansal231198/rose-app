import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Row from "../Row/Row";
import vansh from "../../assets/vansh.jpeg";
import ryan from "../../assets/ryan.jpeg";
import joel from "../../assets/joel.jpeg";
const DepartmentLeaderWidget: React.FC = () => {
  return (
    <div className="department_leaders">
      <div className="headline">
        <LoyaltyIcon style={{ marginLeft: 10 }} />
        <h4>TOP LEADERS OF MY DEPARTMENT</h4>
      </div>
      <Row name="Joel Lindhe" location="San Francisco" image={joel} coin="90" />
      <Row name="Ryan Parr" location="Portland, OR" image={ryan} coin="35" />
      <Row
        name="Vansh Batra"
        location="Gurgaon, India"
        image={vansh}
        coin="30"
      />
      <Row
        name="Rachit Pathak"
        location="Bangalore, India"
        image={profile5}
        coin="27"
      />
      <Row
        name="Sarthak Saxena"
        location="Gurgaon, India"
        image={profile4}
        coin="25"
      />
    </div>
  );
};

export default DepartmentLeaderWidget;
