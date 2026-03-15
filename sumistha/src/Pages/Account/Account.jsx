import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Account() {

  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser);
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(storedUser?.name || "");
  const [phone, setPhone] = useState(storedUser?.phone || "");
  const [location, setLocation] = useState(storedUser?.location || "");

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const saveProfile = async () => {

    try {

      const res = await axios.put(
        "http://localhost:5000/api/users/update",
        {
          name,
          phone,
          location
        }
      );

      const updatedUser = res.data.data;

      setUser(updatedUser);

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      setEditing(false);

      alert("Profile updated!");

    } catch (error) {

      console.log(error);
      alert("Update failed");

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white shadow-md p-6">

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-full bg-[#0aa78f] text-white flex items-center justify-center text-3xl font-bold mb-3">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="font-semibold text-lg">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>

        </div>

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

        {/* PERSONAL INFO */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">

          <div className="flex justify-between mb-4">

            <h3 className="font-semibold text-lg">
              Personal Information
            </h3>

            {editing ? (
              <button
                onClick={saveProfile}
                className="text-green-600 text-sm"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="text-[#0aa78f] text-sm"
              >
                Edit Profile
              </button>
            )}

          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">

            {/* NAME */}
            <div>
              <p className="text-gray-500">Full Name</p>

              {editing ? (
                <input
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                <p className="font-medium">{user?.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            {/* PHONE */}
            <div>
              <p className="text-gray-500">Phone</p>

              {editing ? (
                <input
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                <p className="font-medium">{user?.phone}</p>
              )}
            </div>

            {/* LOCATION */}
            <div>
              <p className="text-gray-500">Location</p>

              {editing ? (
                <input
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                <p className="font-medium">
                  {user?.location || "Add location"}
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}