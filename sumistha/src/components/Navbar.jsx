import React from 'react';
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="h-[70px] px-10 flex items-center justify-between bg-white border-b">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Marketplace Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-[#0aa78f]">
          Marketplace
        </span>
      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-[60%] px-4 py-2 border rounded-md text-sm focus:outline-none"
        />
      </div>

      {/* RIGHT */}
      <div className="flex gap-3">
        <button className="text-sm">Login</button>
        <button className="text-sm">Register</button>
        <button className="bg-[#0aa78f] text-white px-4 py-2 rounded-md text-sm">
          + Post Ad
        </button>
      </div>
    </nav>
  );
}