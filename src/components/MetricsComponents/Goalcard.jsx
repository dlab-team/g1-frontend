import React from "react";
import CircularProgress from "./CircularProgress";

const GoalCard = ({ title, percentage, description }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md space-x-4">
      <CircularProgress percentage={percentage} />
      <div>
        <h3 className="font-workSans font-semibold text-title-500">{title}</h3>
        <p className="text-sm text-title-400">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;