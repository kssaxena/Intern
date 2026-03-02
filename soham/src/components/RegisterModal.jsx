import { useState } from "react";
import { X } from "lucide-react";
import api from "../api";

export default function RegisterModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await api.post("/users/register", {
        name,
        email,
        password,
      });

      console.log("Registration Success:", res.data);
      alert("Registration successful!");
      onClose(); // close modal after success

    } catch (err) {
      console.log(err);
      alert("Registration failed!");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[450px] rounded-2xl shadow-lg p-8 relative"
      >

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-red-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-lg font-medium"
        >
          Register
        </button>
      </div>
    </div>
  );
}