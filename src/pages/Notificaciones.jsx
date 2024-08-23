import React, { useState, useEffect } from "react";
import NotificationCard from "../components/NotificacionComponents/NotificationCard";
import ToggleButton from "../components/NotificacionComponents/ToggleButton";
import MarkAsReadButton from "../components/NotificacionComponents/ReadButton";
import notificationsData from "../components/NotificacionComponents/NotificationsTest.json";

const Notificaciones = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsData.sections);
  }, []);

  const handleMarkAsRead = () => {
    console.log("Marcar todo como leído");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold font-sans">Notificaciones</h1>
        <div className="hidden tablet:block">
          <ToggleButton />
        </div>
      </div>
      <div className="flex justify-end hidden tablet:block">
        <MarkAsReadButton onClick={handleMarkAsRead} />
      </div>
      <div className="space-y-4">
        {notifications.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.notifications.map((notification, idx) => (
                <NotificationCard
                  key={idx}
                  title={notification.title}
                  description={notification.description}
                  time={notification.time}
                  isHighlighted={index < 2 && idx < 2}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notificaciones;
