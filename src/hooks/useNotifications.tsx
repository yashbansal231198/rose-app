import React, { useState } from "react";
import NotificationProps from "../types/NotificationProps";

const useNotifications = (): NotificationProps[] => {
  const [notifications, setNotifications] = useState([]);

  try {
    fetch("http://localhost:8000/notifications")
      .then((resp) => resp.json())
      .then((data) => setNotifications(data));
  } catch (error) {
    console.log(error);
  }

  return notifications;
};

export default useNotifications;
