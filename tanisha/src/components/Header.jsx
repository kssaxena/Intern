import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
  <span className="bg-emerald-500 text-white px-2 py-1 rounded">M</span>
  Marketplace
</Link>

        <input
          type="text"
          placeholder="Search for anything..."
          className="w-1/2 px-4 py-2 border rounded-lg"
        />

        <div className="flex gap-4 items-center">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/post-ad" className="bg-emerald-500 text-white px-4 py-2 rounded-lg">
             + Post Ad
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header