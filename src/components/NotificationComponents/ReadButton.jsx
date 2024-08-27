import React from "react";

const MarkAsReadButton = ({ onClick }) => (
  <div className="flex justify-end">
    <button
      onClick={onClick}
      className="text-sm text-black-500 border px-3 py-1 rounded mb-6"
    >
      Marcar todo como leído
    </button>
  </div>
);

export default MarkAsReadButton;
