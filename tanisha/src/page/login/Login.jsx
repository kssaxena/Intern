import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-96 p-8 rounded-2xl shadow-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your Marketplace account
        </p>

        <form className="space-y-4">

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

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Login;