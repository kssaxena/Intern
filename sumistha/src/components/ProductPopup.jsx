import React from "react";
import "./ProductPopup.css";

export default function ProductPopup({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.title} />

        <div className="popup-content">
          <h3>{product.title}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Condition:</strong> {product.condition}</p>
          <p>{product.description}</p>
          <span className="time">{product.time}</span>

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
