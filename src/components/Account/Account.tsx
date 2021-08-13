import AddIcon from "@material-ui/icons/Add";
import "./Account.css";
import Divider from "@material-ui/core/Divider";
import AccountProps from "../../types/AccountProps";
function Account({ image, text }: AccountProps) {
  return (
    <div>
      <div className="account">
        <div className="current">
          <img src={image} />
          <h5>{text}</h5>
        </div>
        <AddIcon style={{ marginRight: 15, color: "gray", fontSize: 18 }} />
      </div>
      <Divider style={{ width: "90%", marginLeft: 17, marginBottom: 15 }} />
    </div>
  );
}
export default Account;
