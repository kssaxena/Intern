import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="h-17.5 px-10 flex items-center justify-between bg-white border-b relative z-50">
      {/* LEFT */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Marketplace Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-[#0aa78f]">
          Marketplace
        </span>
      </Link>

      {/* CENTER */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-[60%] px-4 py-2 border rounded-md text-sm focus:outline-none"
        />
      </div>

      {/* RIGHT */}
      <div className="flex gap-5 items-center">
        <Link to="/about" className="text-sm hover:text-[#0aa78f]">
          About
        </Link>

        <Link to="/login" className="text-sm hover:text-[#0aa78f]">
          Login
        </Link>

        <Link
          to="/register"
          className="bg-[#0aa78f] text-white px-4 py-2 rounded-md text-sm"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}