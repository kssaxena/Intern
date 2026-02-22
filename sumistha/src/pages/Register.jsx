import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // PASSWORD STRENGTH LOGIC
  const getStrength = () => {
    if (password.length === 0) return null;
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const strength = getStrength();

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Join the Marketplace
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Connect with buyers in your neighborhood.
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* PASSWORD STRENGTH */}
            {strength && (
              <>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded">
                  <div
                    className={`h-1 rounded transition-all ${
                      strength === "weak"
                        ? "w-1/3 bg-red-500"
                        : strength === "medium"
                        ? "w-2/3 bg-yellow-500"
                        : "w-full bg-green-500"
                    }`}
                  />
                </div>
                <p className="text-xs mt-1 text-gray-500">
                  {strength.charAt(0).toUpperCase() + strength.slice(1)} strength
                </p>
              </>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#0aa78f] text-white py-2.5 rounded-md font-medium hover:bg-[#099b85] transition"
          >
            Create Account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0aa78f] font-medium hover:underline"
          >
            Log In
          </Link>
        </p>

        {/* BACK HOME */}
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