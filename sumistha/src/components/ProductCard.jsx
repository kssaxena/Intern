import React, { useState } from "react";
import "./ProductCard.css";
import ProductPopup from "./ProductPopup";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className={`product-card ${hovered ? "active" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowPopup(true)}   
      >
 
        <div className="image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>

        <div className={`popup-info ${hovered ? "show" : ""}`}>
          <p><strong>Condition:</strong> {product.condition}</p>
          <p className="desc">{product.description}</p>
          <span className="time">{product.time}</span>
        </div>

      
        <div className="product-info">
          <span className="price">${product.price}</span>
          <h4>{product.title}</h4>
          <p className="location">{product.location}</p>
        </div>
      </div>

    
      {showPopup && (
        <ProductPopup
          product={product}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
