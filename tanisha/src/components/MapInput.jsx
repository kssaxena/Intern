import React from "react";

const MapInput = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium">Location</label>

      <input
        type="text"
        placeholder="Enter your location..."
        value={value}
        onChange={onChange}
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <p className="text-xs text-gray-500">
        Example: Bhubaneswar, Odisha
      </p>
    </div>
  );
};

export default MapInput;