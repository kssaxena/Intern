import React from "react";
import {
  FiGrid,
  FiTruck,
  FiHome,
  FiSmartphone,
  FiShoppingBag,
  FiArchive,
  FiBriefcase,
  FiHeart,
  FiBookOpen,
  FiMoreHorizontal,
} from "react-icons/fi";
import "./CategoryBar.css";

const categories = [
  { label: "All Ads", icon: <FiGrid /> },
  { label: "Vehicles", icon: <FiTruck /> },
  { label: "Property", icon: <FiHome /> },
  { label: "Electronics", icon: <FiSmartphone /> },
  { label: "Fashion", icon: <FiShoppingBag /> },
  { label: "Furniture", icon: <FiArchive /> },
  { label: "Jobs", icon: <FiBriefcase /> },
  { label: "Hobbies", icon: <FiHeart /> },
  { label: "Books", icon: <FiBookOpen /> },
];

export default function CategoryBar() {
  return (
    <section className="category-section">
      <h3 className="category-title">Browse Categories</h3>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-card ${index === 0 ? "active" : ""}`}
          >
            <div className="category-icon">{cat.icon}</div>
            <span className="category-label">{cat.label}</span>
          </div>
        ))}

        <div className="category-card more">
          <div className="category-icon">
            <FiMoreHorizontal />
          </div>
          <span className="category-label">More</span>
        </div>
      </div>
    </section>
  );
}
