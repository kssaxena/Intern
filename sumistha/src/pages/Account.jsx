import { useNavigate } from "react-router-dom";

export default function Account() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white shadow-md p-6">

        <div className="flex flex-col items-center">

          {/* PROFILE ICON */}
          <div className="w-20 h-20 rounded-full bg-[#0aa78f] text-white flex items-center justify-center text-3xl font-bold mb-3">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="font-semibold text-lg">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>

        </div>

        {/* MENU */}
        <div className="mt-8 flex flex-col gap-4 text-sm">

          <button className="text-left hover:text-[#0aa78f]">Profile</button>
          <button className="text-left hover:text-[#0aa78f]">My Ads</button>
          <button className="text-left hover:text-[#0aa78f]">Messages</button>
          <button className="text-left hover:text-[#0aa78f]">Favorites</button>
          <button className="text-left hover:text-[#0aa78f]">Transactions</button>
          <button className="text-left hover:text-[#0aa78f]">Settings</button>

          <button
            onClick={logout}
            className="text-left text-red-500 hover:underline mt-4"
          >
            Logout
          </button>

        </div>

      </div>

      {/* RIGHT DASHBOARD */}
      <div className="flex-1 p-8">

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Active Listings</p>
            <h3 className="text-2xl font-semibold">24</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Items Sold</p>
            <h3 className="text-2xl font-semibold">148</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Total Earned</p>
            <h3 className="text-2xl font-semibold">$12.4k</h3>
          </div>

        </div>

        {/* PERSONAL INFO */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">

          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <button className="text-[#0aa78f] text-sm">Edit Profile</button>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">

            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">+91 XXXXX XXXXX</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-medium">India</p>
            </div>

          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white p-6 rounded-lg shadow">

          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

          <div className="flex flex-col gap-3 text-sm">

            <p>📦 Sold "Vintage Camera Lens"</p>
            <p>📢 New listing created</p>
            <p>⭐ Received a 5-star review</p>

          </div>

        </div>

      </div>

    </div>
  );
}