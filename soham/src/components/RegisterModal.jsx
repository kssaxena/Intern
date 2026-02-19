import { useState } from "react";
import { X } from "lucide-react";

export default function RegisterModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[450px] rounded-2xl shadow-lg p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        {/* NAME */}
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

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* SUBMIT BUTTON */}
        <button
          onClick={onClose}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-lg font-medium"
        >
          Register
        </button>
      </div>
    </div>
  );
}
