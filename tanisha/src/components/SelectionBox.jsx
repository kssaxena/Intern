import React from "react";

const SelectionBox = ({ label, options = [], value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <option value="">Select</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}

      </select>
    </div>
  );
};

export default SelectionBox;