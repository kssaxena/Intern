import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">No product selected</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Updated Order Function
  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          location: product.location,
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Order placed successfully!");
        navigate("/current-order");
      } else {
        alert(data.message || "Failed to place order");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 gap-10">

      {/* Product Summary */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Product Summary</h2>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover rounded"
        />

        <div className="mt-4">
          <p className="text-emerald-600 text-xl font-bold">
            {product.price}
          </p>

          <p className="font-semibold mt-1">
            {product.title}
          </p>

          <p className="text-gray-500 text-sm mt-2">
            {product.location}
          </p>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>

        <form onSubmit={handleOrder} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700"
          >
            {loading ? "Placing Order..." : "Confirm Purchase"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default BuyNow;