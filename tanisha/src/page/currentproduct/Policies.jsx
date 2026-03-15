import React from "react";
import { FaTruck, FaUndoAlt, FaShieldAlt } from "react-icons/fa";

const Policies = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-12">

      <h2 className="text-xl font-semibold mb-6">
        Delivery & Policies
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Delivery */}
        <div className="border rounded-xl p-5 flex gap-4 items-start bg-white shadow-sm">
          <FaTruck className="text-emerald-600 text-xl mt-1" />
          <div>
            <h3 className="font-semibold">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Orders are processed within 24 hours and
              delivered within 3-5 business days.
            </p>
          </div>
        </div>

        {/* Refund */}
        <div className="border rounded-xl p-5 flex gap-4 items-start bg-white shadow-sm">
          <FaUndoAlt className="text-emerald-600 text-xl mt-1" />
          <div>
            <h3 className="font-semibold">
              Easy Refund
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              If the product is damaged or incorrect,
              you can request a refund within 7 days.
            </p>
          </div>
        </div>

        {/* Safety */}
        <div className="border rounded-xl p-5 flex gap-4 items-start bg-white shadow-sm">
          <FaShieldAlt className="text-emerald-600 text-xl mt-1" />
          <div>
            <h3 className="font-semibold">
              Secure Payments
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              All payments are encrypted and secured
              to protect your personal information.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Policies;