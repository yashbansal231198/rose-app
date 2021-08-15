import React, { useState, Suspense } from "react";
import "./RecentNotifications.css";
import { List, AutoSizer } from "react-virtualized";
import SettingsIcon from "@material-ui/icons/Settings";
import coins from "../../assets/coins.png";
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
import { lazily } from "react-lazily";

const { NotificationSettings } = lazily(() => import("./NotificationSettings"));
const RecentNotifications: React.FC = () => {
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
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <NotificationSettings close={handleClose} valueOpen={open} />
      </Suspense>
    </div>
  );
};

export default RecentNotifications;
