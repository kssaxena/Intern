import React from "react";

const ProductCardMobile = ({ product }) => {
  return (
    <div className="flex bg-white rounded-lg shadow p-3 gap-3 hover:shadow-md transition cursor-pointer">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover rounded-md"
      />

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-emerald-600 font-bold">
          {product.price}
        </p>

        <p className="text-xs text-gray-500">
          {product.location}
        </p>
      </div>

    </div>
  );
};

export default ProductCardMobile;