import React, { useState } from "react";
import "./Recent.css";
import { List, AutoSizer } from "react-virtualized";
import SettingsIcon from "@material-ui/icons/Settings";
import coins from "../../assets/coins.png";
import notification1 from "../../assets/notification1.png";
import notification2 from "../../assets/notification2.png";
import notification3 from "../../assets/notification3.png";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import ArticleProps from "../../types/ArticleProps";
import useNotifications from "../../hooks/useNotifications";
import NotificationImages from "./NotificationImages";
const Recent: React.FC = () => {
  const notifications = useNotifications();
  const [notification, setNotification] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e: React.MouseEvent) => {
    let cur = (e.target as HTMLInputElement).id;
    if (cur === "notification") {
      setNotification(true);
      const announcements = document.getElementById("announcements");
      announcements!.style.color = "black";
      announcements!.style.background = "gainsboro";
      const notification = document.getElementById("notification");
      notification!.style.color = "green";
      notification!.style.background = "rgb(234, 245, 234)";
    } else {
      setNotification(false);
      const announcements = document.getElementById("announcements");
      announcements!.style.color = "green";
      announcements!.style.background = "rgb(234, 245, 234)";
      const notification = document.getElementById("notification");
      notification!.style.color = "black";
      notification!.style.background = "gainsboro";
    }
  };
  return (
    <div className="recent">
      <div className="settings">
        <h2>Notifications</h2>
        <SettingsIcon onClick={handleClickOpen} style={{ cursor: "pointer" }} />
      </div>
      <div className="notify">
        <div className="option">
          <h4 onClick={handleClick} id="notification">
            Notifications
          </h4>
          <h4 onClick={handleClick} id="announcements">
            Accouncements
          </h4>
        </div>
        {!notification ? (
          <div className="second_page">
            <h4>No Announcements</h4>
            <h5>No announcements for you right now!</h5>
            <button>Reload</button>
          </div>
        ) : !notifications ? null : notifications.length == 0 ? null : (
          <div className="recentPosts">
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
                        <div className="single">
                          <img
                            className="single_left"
                            src={NotificationImages[index % 3]}
                          />
                          <div className="single_right">
                            <h2 className="title">
                              {notifications[index % 3].title}
                            </h2>
                            <p className="description">
                              {notifications[index % 3].description}
                            </p>
                            <span>1 day ago</span>
                          </div>
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
      <Dialog
        open={open}
        scroll="body"
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div className="title">
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
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
    </div>
  );
};

export default Recent;
