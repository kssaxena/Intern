import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryInstructions = () => {
  const navigate = useNavigate();

  const [instructions, setInstructions] = useState({
    note: "",
    callBeforeDelivery: false,
    leaveAtDoor: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInstructions({
      ...instructions,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // later you can send this to backend
    console.log("Delivery Instructions:", instructions);

    alert("Delivery instructions saved!");

    navigate("/current-order");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6">
        Delivery Instructions
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-5"
      >

        {/* Text Instructions */}
        <div>
          <label className="block font-semibold mb-2">
            Additional Instructions
          </label>

          <textarea
            name="note"
            placeholder="Example: Ring the bell twice, apartment 302..."
            value={instructions.note}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Call Before Delivery */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="callBeforeDelivery"
            checked={instructions.callBeforeDelivery}
            onChange={handleChange}
          />
          <label>Call before delivery</label>
        </div>

        {/* Leave at Door */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="leaveAtDoor"
            checked={instructions.leaveAtDoor}
            onChange={handleChange}
          />
          <label>Leave package at door</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700"
        >
          Save Instructions
        </button>

      </form>

    </div>
  );
};

export default DeliveryInstructions;