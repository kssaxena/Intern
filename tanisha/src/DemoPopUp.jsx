import React from "react";
import { IoMdClose } from "react-icons/io";

const DemoPopUp = ({ product, onClose }) => {
  if (!product) return null;

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
        <p className="text-emerald-600 font-bold text-lg">
          {product.price}
        </p>

      </div>
    </div>
  );
};

export default DemoPopUp;
