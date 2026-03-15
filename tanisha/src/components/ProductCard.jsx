import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h3>

        <p className="text-emerald-600 font-bold mt-1">
          {product.price}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {product.location}
        </p>
      </div>

    </div>
  );
};

export default ProductCard;