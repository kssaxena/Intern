import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [search, setSearch] = useState("");

  useEffect(() => {

    const updateUser = () => {

      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }

    };

    window.addEventListener("userLoggedIn", updateUser);
    window.addEventListener("userLoggedOut", updateUser);

    return () => {
      window.removeEventListener("userLoggedIn", updateUser);
      window.removeEventListener("userLoggedOut", updateUser);
    };

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

    window.dispatchEvent(new Event("userLoggedOut"));

    navigate("/");
  };

  const handleSearch = (e) => {

    e.preventDefault();

    if (search.trim() !== "") {

      navigate(`/search?q=${search}`);

      setSearch("");
    }
  };

  return (
    <nav className="h-[70px] px-10 flex items-center justify-between bg-white border-b">

      {/* LEFT LOGO */}
      <Link to="/" className="flex items-center gap-2">

        <img
          src={logo}
          alt="Marketplace Logo"
          className="w-8 h-8"
        />

        <span className="text-xl font-bold text-[#0aa78f]">
          Marketplace
        </span>

      </Link>

      {/* SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        className="flex-1 flex justify-center"
      >

        <div className="flex w-[60%]">

          <input
            type="text"
            placeholder="Search for anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-r-0 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0aa78f]"
          />

          <button
            type="submit"
            className="px-5 bg-[#0aa78f] text-white rounded-r-md hover:bg-[#099b85] transition"
          >
            Search
          </button>

        </div>

      </form>

      {/* RIGHT MENU */}
      <div className="flex items-center gap-6 text-sm">

        <Link to="/" className="hover:text-[#0aa78f]">
          Home
        </Link>

        <Link to="/about" className="hover:text-[#0aa78f]">
          About
        </Link>

        <Link to="/safety-tips" className="hover:text-[#0aa78f]">
          Safety
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
              className="text-red-500 hover:underline"
            >
              Logout
            </button>

          </>

        ) : (

          <>
            <Link
              to="/login"
              className="hover:text-[#0aa78f]"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#0aa78f] text-white px-4 py-2 rounded-md"
            >
              Register
            </Link>
          </>

        )}

      </div>

    </nav>
  );
}