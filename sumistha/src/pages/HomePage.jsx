import { useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import { products } from "../constants/products";

const limitedCategories = ["Jobs", "Fashion", "Hobbies"];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  if (limitedCategories.includes(selectedCategory)) {
    filteredProducts = filteredProducts.slice(0, 3);
  }

  return (
    <>
      {/* HERO */}
      <section className="text-center py-14">
        <h1 className="text-4xl font-bold mb-3">
          Buy & Sell Anything
        </h1>
        <p className="text-gray-600">
          Find great deals near you or list your items for free
        </p>
      </section>

      <CategoryBar
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <section className="px-10 pb-20">
        <h3 className="text-xl font-semibold mb-6">
          Fresh Recommendations
        </h3>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}