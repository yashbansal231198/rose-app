import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.jpeg";
import Account from "../../components/Account/Account";
import PersonIcon from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
const TopAccountsWidget: React.FC = () => {
  return (
    <div className="department_leaders">
      <div className="headline">
        <PersonIcon style={{ marginLeft: 10, marginBottom: 20 }} />
        <h4>ACCOUNTS</h4>
      </div>
      <h5>0 of 4 Channels Added</h5>
      <Divider
        style={{
          height: 4,
          width: "90%",
          marginLeft: 15,
          borderRadius: 3,
          marginBottom: 40,
        }}
      />
      <Account image={linkedin} text="Add Linkedin account" />
      <Account image={twitter} text="Add Twitter account" />
      <Account image={logo} text="Add Facebook account" />
      <Account image={instagram} text="Add Instagram account" />
      <h4>Manage Accounts</h4>
    </div>
  );
};

export default TopAccountsWidget;
