import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const DemoPopUp = ({ product, onClose }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleBuyNow = () => {
    navigate("/buy-now", { state: { product } });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-xl font-semibold mb-1">
          {product.title}
        </h2>

        {/* Location */}
        <p className="text-sm text-gray-500 mb-3">
          {product.location}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-emerald-600 font-bold text-lg mb-4">
          {product.price}
        </p>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default DemoPopUp;