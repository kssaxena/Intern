import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CurrentProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 gap-10">

      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[420px] object-cover rounded-xl shadow"
        />
      </div>

      {/* Product Details */}
      <div>

        <h1 className="text-3xl font-bold mb-3">
          {product.title}
        </h1>

        <p className="text-emerald-600 text-2xl font-bold mb-3">
          {product.price}
        </p>

        <p className="text-gray-500 mb-4">
          {product.location}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="flex gap-4">

          <button
            onClick={() =>
              navigate("/buy-now", { state: { product } })
            }
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
          >
            Buy Now
          </button>

          <button
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default CurrentProduct;