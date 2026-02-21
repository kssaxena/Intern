import { useState } from "react";
import ProductPopup from "./ProductPopup";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative bg-white rounded-xl transition-all duration-300 cursor-pointer
        ${hovered ? "shadow-2xl -translate-y-2" : "shadow-lg"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <div className="relative h-[190px] overflow-hidden rounded-t-xl">
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              hovered ? "scale-110" : ""
            }`}
          />

          {/* HOVER INFO CARD */}
          <div
            className={`absolute left-3 right-3 bottom-3 bg-white rounded-lg p-3 shadow-lg transition-all duration-300
            ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <p className="text-sm">
              <strong>Condition:</strong> {product.condition}
            </p>
            <p className="text-xs text-gray-600">
              {product.description}
            </p>
            <span className="text-[11px] text-gray-400">
              {product.time}
            </span>
          </div>
        </div>

        {/* NORMAL INFO */}
        <div className="p-4">
          <span className="font-bold text-[#0aa78f]">
            {product.price}
          </span>
          <h4 className="text-sm font-semibold my-1">
            {product.title}
          </h4>
          <p className="text-sm text-gray-500">
            {product.location}
          </p>
        </div>
      </div>

      {/* CLICK POPUP */}
      {open && (
        <ProductPopup product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}