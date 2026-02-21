import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Log In
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <span className="text-xs text-[#0aa78f] cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
              />

              {/* SHOW / HIDE */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#0aa78f] text-white py-2.5 rounded-md font-medium hover:bg-[#099b85] transition"
          >
            Login
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#0aa78f] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* FOOTER LINKS */}
        <div className="flex justify-center gap-4 text-xs text-gray-400 mt-8">
          <span>Help Center</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>

        {/* BACK TO HOME */}
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-xs text-[#0aa78f] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}