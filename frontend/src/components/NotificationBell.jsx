import { useEffect, useState } from "react";
import API from "../api/axios";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await API.get("/notifications");
        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <span className="text-xl">🔔</span>
      {unread > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
          {unread}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;
