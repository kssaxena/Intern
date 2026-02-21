import { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { products } from "./constants/products";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories that should show ONLY 3 items
  const limitedCategories = ["Jobs", "Fashion", "Hobbies"];

  // Filter products based on category
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  // Limit to 3 products for "More" categories
  if (limitedCategories.includes(selectedCategory)) {
    filteredProducts = filteredProducts.slice(0, 3);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-14">
        <h1 className="text-4xl font-bold mb-3">
          Buy & Sell Anything
        </h1>
        <p className="text-gray-600">
          Find great deals near you or list your items for free
        </p>
      </section>

      {/* CATEGORY BAR */}
      <CategoryBar
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* PRODUCTS SECTION */}
      <section className="px-10 pb-20">
        <h3 className="text-xl font-semibold mb-6">
          Fresh Recommendations
        </h3>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}