import { useState } from "react";
import DemoPopUp from "./components/demoPopUp";
import { categories } from "./constants/constants";

function App() {
  const [popup, setShowPopup] = useState(false);

  const products = [
    {
      title: "2020 Toyota Camry SE - Low Mileage",
      price: "$24,500",
      location: "New York, NY",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
      featured: true,
    },
    {
      title: "iPhone 14 Pro Max 256GB",
      price: "$899",
      location: "Los Angeles, CA",
      time: "5 hours ago",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
      featured: true,
    },
    {
      title: "Modern Apartment for Rent",
      price: "$2,200",
      location: "Chicago, IL",
      time: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
      featured: false,
    },
    {
      title: "Leather Sofa Set",
      price: "$650",
      location: "Houston, TX",
      time: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      featured: false,
    },
    {
      title: "PlayStation 5 with 2 Controllers",
      price: "$450",
      location: "Miami, FL",
      time: "4 days ago",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200",
      featured: false,
    },
    {
      title: "Nike Air Jordan High OG",
      price: "$220",
      location: "Dallas, TX",
      time: "5 days ago",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
      featured: false,
    },
    {
      title: "MacBook Pro M2 - 512GB",
      price: "$1,899",
      location: "Seattle, WA",
      time: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
      featured: true,
    },
    {
      title: 'Samsung 65" 4K Smart TV',
      price: "$550",
      location: "Denver, CO",
      time: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200",
      featured: false,
    },
    {
      title: "Honda Civic LX - Clean Title",
      price: "$18,900",
      location: "Phoenix, AZ",
      time: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
      featured: false,
    },
    {
      title: "Gaming PC - RTX 4070",
      price: "$1,400",
      location: "San Diego, CA",
      time: "6 days ago",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200",
      featured: false,
    },
    {
      title: "Office Desk + Ergonomic Chair",
      price: "$350",
      location: "Boston, MA",
      time: "4 days ago",
      image:
        "https://images.unsplash.com/photo-1585129819171-80b02d4c85b0?q=80&w=1200",
      featured: false,
    },
    {
      title: "Vintage Book Collection",
      price: "$150",
      location: "Portland, OR",
      time: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
      featured: false,
    },
    {
      title: "Mountain Bike - Excellent Condition",
      price: "$480",
      location: "Austin, TX",
      time: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1200",
      featured: false,
    },
    {
      title: "Canon DSLR Camera Kit",
      price: "$720",
      location: "Las Vegas, NV",
      time: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      title: "Luxury Bed Frame - King Size",
      price: "$990",
      location: "Atlanta, GA",
      time: "5 days ago",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1200",
      featured: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">
              M
            </div>
            <span className="font-semibold text-lg">Marketplace</span>
          </div>

          <input
            type="text"
            placeholder="Search for anything..."
            className="hidden md:block w-96 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 hover:text-black">
              Login
            </button>
            <button className="text-sm text-gray-600 hover:text-black">
              Register
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-4 py-2 rounded-lg text-sm"
            >
              + Post Ad
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-5xl font-bold mb-4">Buy & Sell Anything</h1>
        <p className="text-gray-500 text-lg">
          Find great deals near you or list your items for free
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="font-semibold mb-6 text-lg">Browse Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-xl border transition ${
                index === 0
                  ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                  : "bg-white hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-semibold text-xl">Fresh Recommendations</h3>
          <span className="text-gray-400 text-sm">
            {products.length} ads found
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative">
                {item.featured && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-md">
                    Featured
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h4 className="text-emerald-600 font-semibold text-lg mb-1">
                  {item.price}
                </h4>
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
              <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">
                M
              </div>
              <h2 className="font-semibold">Marketplace</h2>
            </div>
            <p className="text-sm text-gray-500">
              Buy and sell anything locally. Safe, simple, and free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">Home</li>
              <li className="hover:text-emerald-600 cursor-pointer">
                Post an Ad
              </li>
              <li className="hover:text-emerald-600 cursor-pointer">My Ads</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-emerald-600 cursor-pointer">
                Safety Tips
              </li>
              <li className="hover:text-emerald-600 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-emerald-600 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-emerald-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-emerald-600 cursor-pointer">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center text-sm text-gray-400 py-4">
          © 2026 Marketplace. All rights reserved.
        </div>
      </footer>

      {popup && (
        <div className="fixed top-0 left-0 h-screen w-full z-50">
          <DemoPopUp onClose={() => setShowPopup(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
