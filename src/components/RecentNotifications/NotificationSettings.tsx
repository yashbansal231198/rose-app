import "./RecentNotifications.css";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
type DialogProps = {
  close: () => void;
  valueOpen: boolean;
};
export const NotificationSettings = ({ close, valueOpen }: DialogProps) => {
  return (
    <Dialog
      open={valueOpen}
      scroll="body"
      keepMounted
      onClose={close}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <div className="title">
          <CloseIcon onClick={close} style={{ cursor: "pointer" }} />
          <h4>Preferences</h4>
          <div></div>
        </div>
      </DialogTitle>
      <Divider />

      <DialogActions>
        <div className="form_element">
          <h3>Awards</h3>
          <h5>Get notified when you unlock Awards</h5>
          <input type="checkbox" className="checkbox" />
        </div>
      </DialogActions>
      <Divider />
      <DialogActions>
        <div className="form_element">
          <h3>New Posts Available</h3>
          <h5>Get notified when new posts are available for sharing</h5>
          <input type="checkbox" className="checkbox" />
        </div>
      </DialogActions>
      <Divider />
      <DialogActions>
        <div className="form_element">
          <h3>Points</h3>
          <h5>Get notified when you gain points</h5>
          <input type="checkbox" className="checkbox" />
        </div>
      </DialogActions>
      <Divider />
      <DialogActions>
        <div className="form_element">
          <h3>Comment Mentions</h3>
          <h5>Get notified when someone mentions you in a comment</h5>
          <input type="checkbox" className="checkbox" />
          <Divider />
        </div>
      </DialogActions>
      <Divider />
    </Dialog>
  );
};
