import { useState } from "react";
import DemoPopUp from "./Components/demoPopUp.jsx";
import ProductModal from "./Components/ProductModal.jsx";
import PostAdModal from "./Components/PostAdModal.jsx";
import LoginModal from "./Components/LoginModal.jsx";
import RegisterModal from "./Components/RegisterModal.jsx";
import CategoriesModal from "./Components/CategoriesModal.jsx";
import ContactModal from "./Components/ContactModal.jsx";
import AboutModal from "./Components/AboutModal.jsx";
import { productsData } from "./Constants/products.js";
import CategoriesBar from "./Components/CategoriesBar.jsx";

function App() {
  const [popup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPostAd, setShowPostAd] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All Ads");
  const filteredProducts =
    selectedCategory === "All Ads"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">M</div>
            <span className="font-semibold text-lg">Marketplace</span>
          </div>
          {/* Search */}
          <div className="flex-1 mx-10">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full px-6 py-3 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>
          {/* Nav */}
          <ul className="flex items-center gap-8 text-sm text-gray-600 relative z-[9999]">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li onClick={() => setShowCategories(true)} className="hover:text-black cursor-pointer">Categories</li>
            <li onClick={() => setShowAbout(true)} className="hover:text-black cursor-pointer">About</li>
            <li onClick={() => setShowContact(true)} className="hover:text-black cursor-pointer">Contact</li>
          </ul>
          {/* Buttons */}
          <div className="flex items-center gap-6 ml-6">
            <button onClick={() => setShowLogin(true)} className="text-sm text-gray-600 hover:text-black">Login</button>
            <button onClick={() => setShowRegister(true)} className="text-sm text-gray-600 hover:text-black">Register</button>
            <button
              onClick={() => setShowPostAd(true)}
              className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm"
            >
              + Post Ad
            </button>
          </div>

        </div>
      </header>
      {/* HERO */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Buy & Sell Anything</h1>
        <p className="text-gray-600 text-lg">Find great deals near you or list your items for free</p>
      </section>
      {/*  CATEGORY BAR */}
      <div className="max-w-7xl mx-auto px-6">
        <CategoriesBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      {/* ⭐ PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/*  NO PRODUCTS FOUND */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600 text-lg col-span-full">
              No products are available here
            </p>
          )}
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(item)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                {item.featured && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-md">Featured</span>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="text-emerald-600 font-semibold text-lg mb-1">{item.price}</h4>
                <p className="text-sm mb-3 line-clamp-2">{item.title}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{item.location}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">M</div>
              <h2 className="font-semibold">Marketplace</h2>
            </div>
            <p className="text-sm text-gray-500">Buy and sell anything locally.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">Home</li>
              <li className="hover:text-emerald-600 cursor-pointer">Post an Ad</li>
              <li className="hover:text-emerald-600 cursor-pointer">My Ads</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">Help Center</li>
              <li className="hover:text-emerald-600 cursor-pointer">Safety Tips</li>
              <li className="hover:text-emerald-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">Terms of Service</li>
              <li className="hover:text-emerald-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-emerald-600 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t text-center text-sm text-gray-400 py-4">© 2026 Marketplace.</div>
      </footer>
      {/* POPUPS */}
      {popup && <DemoPopUp onClose={() => setShowPopup(false)} />}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {showPostAd && <PostAdModal onClose={() => setShowPostAd(false)} onSubmit={handleAddProduct} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showCategories && <CategoriesModal onClose={() => setShowCategories(false)} />}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    </div>
  );
}
export default App;