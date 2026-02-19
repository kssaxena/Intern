import React from "react";
import "./Home.css";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import data from "../data";

export default function Home() {
  return (
    <div>

      <section className="hero">
        <h1>Buy & Sell Anything</h1>
        <p>Find great deals near you or list your items for free</p>
      </section>

    
      <CategoryBar />

     
      <section className="products-section">
        <div className="products-header">
          <h3>Fresh Recommendations</h3>
          
        </div>

        <div className="products-grid">
          {data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
