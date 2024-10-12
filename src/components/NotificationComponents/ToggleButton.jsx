import React from "react";

const ToggleButton = ({ onClick, isEnabled }) => {
  return (
    <div
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        isEnabled ? "bg-red-500" : "bg-gray-300"
      }`}
      onClick={onClick}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isEnabled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
