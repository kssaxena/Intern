import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const countryCodes = [
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+81", label: "🇯🇵 +81" },
    { code: "+49", label: "🇩🇪 +49" },
    { code: "+33", label: "🇫🇷 +33" },
    { code: "+86", label: "🇨🇳 +86" },
    { code: "+7", label: "🇷🇺 +7" },
    { code: "+55", label: "🇧🇷 +55" },
  ];
  // PASSWORD STRENGTH
  const getStrength = () => {
    if (password.length === 0) return null;
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const strength = getStrength();

  // REGISTER FUNCTION
  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
phone: countryCode + phone,
          password
        }
      );

      alert("Account created successfully!");

      console.log(res.data);

    } catch (error) {

      console.log(error.response?.data);

      alert("Registration failed");

    }
  };

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
        <form className="space-y-4" onSubmit={handleRegister}>

          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>

            <div className="flex items-center gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f] bg-white"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "");
                  setPhone(digits);
                  if (phoneError) setPhoneError("");
                }}
                className="flex-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
              />
            </div>
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
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

            {/* PASSWORD STRENGTH BAR */}
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

          {/* SUBMIT BUTTON */}
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
          <Link to="/login" className="text-[#0aa78f] font-medium hover:underline">
            Log In
          </Link>
        </p>

        {/* BACK HOME */}
        <div className="text-center mt-4">
          <Link to="/" className="text-xs text-[#0aa78f] hover:underline">
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}