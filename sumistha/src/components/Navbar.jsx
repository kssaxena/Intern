import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {

  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <nav className="w-full px-10 py-3 flex items-center bg-white border-b">

      {/* LEFT */}
      <div className="flex items-center gap-2 w-1/4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Marketplace Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-[#0aa78f]">
            Marketplace
          </span>
        </Link>
      </div>

      {/* CENTER SEARCH */}
      <div className="w-2/4 flex justify-center">
        <input
          type="text"
          placeholder="Search for anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full max-w-xl px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0aa78f]"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-5 w-1/4">

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
            <Link to="/login" className="px-4 py-2 bg-gray-200 rounded-md text-sm">
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