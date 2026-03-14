import React from "react";
import Button from "./Button";

export default function PopUpWrapper({ product, onClose }) {

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <div
        className="w-[420px] bg-white rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[230px] object-cover"
        />

        <div className="p-5">

          <h3 className="text-lg font-semibold mb-2">
            {product.title}
          </h3>

          <p className="text-sm">
            <strong>Price:</strong> {product.price}
          </p>

          <p className="text-sm">
            <strong>Location:</strong> {product.location}
          </p>

          <p className="text-sm mt-2">
            {product.description}
          </p>

          <Button
            onClick={onClose}
            className="mt-4 bg-[#0aa78f] text-white"
          >
            Close
          </Button>

        </div>

      </div>

    </div>
  );
}