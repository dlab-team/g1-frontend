import React from "react";

const NotificationCard = ({ title, description, time, isHighlighted }) => (
  <div
    className={`flex items-center border border-gray-200 rounded-lg p-4 shadow-lg ${
      isHighlighted ? "bg-primary-50" : "bg-white"
    }`}
  >
    <div className="flex-shrink-0">
      <img
        src="src/assets/images/NotificacionImages/desafiologo.png"
        alt={title}
        className="w-12 h-12 rounded-full"
      />
    </div>
    <div className="ml-4">
      <h3 className="text-md font-bold text-tittle-500">{title}</h3>
      <p className="text-sm text-tittle-300">{description}</p>
      <p className="text-sm text-tittle-400">{time}</p>
    </div>
    <div className="ml-auto">
      <span className="w-3 h-3 bg-primary-500 rounded-full inline-block"></span>
    </div>
  </div>
);

export default NotificationCard;
