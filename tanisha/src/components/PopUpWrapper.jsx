import React from "react";

const PopUpWrapper = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      
      {/* Popup Box */}
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-[90%] max-w-md">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Popup Content */}
        {children}

      </div>
    </div>
  );
};

export default PopUpWrapper;