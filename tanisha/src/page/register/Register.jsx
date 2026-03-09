import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-96 p-8 rounded-2xl shadow-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join Marketplace to start buying and selling
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Register;