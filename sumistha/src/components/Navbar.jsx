import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const getUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    getUser();

    window.addEventListener("userLoggedIn", getUser);

    return () => {
      window.removeEventListener("userLoggedIn", getUser);
    };

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    window.location.href = "/";
  };

  return (
    <nav className="h-17.5 px-10 flex items-center justify-between bg-white border-b relative z-40">

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

        {user ? (

          <>
            <Link to="/account">
              <div className="w-9 h-9 rounded-full bg-[#0aa78f] text-white flex items-center justify-center font-semibold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <Link to="/login" className="text-sm hover:text-[#0aa78f]">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#0aa78f] text-white px-4 py-2 rounded-md text-sm"
            >
              Register
            </Link>
          </>

        )}

      </div>

    </nav>
  );
}