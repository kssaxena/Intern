import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <p className="text-gray-600">Manage your account settings here.</p>
          {/* Add account management content */}
        </div>
      </div>
    </div>
  );
}