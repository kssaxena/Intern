import { useState } from "react";

function App() {
  const categories = [
    "All",
    "Vehicles",
    "Property",
    "Electronics",
    "Fashion",
    "Furniture",
    "Jobs",
    "Hobbies",
    "Books",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

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
      title: "Samsung 65\" 4K Smart TV",
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

      {/* HEADER */}
<header className="bg-white border-b sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">
        M
      </div>
      <span className="font-semibold text-lg">Marketplace</span>
    </div>

    {/* Search Bar */}
    <div className="flex-1 mx-8">
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-full px-6 py-3 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />
    </div>

    {/* Navigation Links */}
    <ul className="flex items-center gap-8 text-sm text-gray-600">
      <li className="hover:text-black cursor-pointer">Home</li>
      <li className="hover:text-black cursor-pointer">Categories</li>
      <li className="hover:text-black cursor-pointer">About</li>
      <li className="hover:text-black cursor-pointer">Contact</li>
    </ul>

    {/* Right Buttons */}
    <div className="flex items-center gap-5 ml-6">
      <button className="text-sm text-gray-600 hover:text-black">
        Login
      </button>
      <button className="text-sm text-gray-600 hover:text-black">
        Register
      </button>
      <button className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm">
        + Post Ad
      </button>
    </div>

  </div>
</header>

{/* HERO SECTION */}
<section className="bg-gray-100 py-28 text-center">
  <h1 className="text-6xl font-bold mb-6">
    Buy & Sell Anything
  </h1>

  <p className="text-gray-600 text-xl">
    Find great deals near you or list your items for free
  </p>
</section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
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
<footer className="bg-gray-100 border-t mt-auto">
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand Section */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-emerald-500 text-white px-3 py-1 rounded-md font-bold">
          M
        </div>
        <h2 className="font-semibold text-lg tracking-wide">Marketplace</h2>
      </div>
      <p className="text-sm text-gray-500">
        Buy and sell anything locally. Safe, simple, and free.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Home</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Post an Ad</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">My Ads</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Help Center</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Safety Tips</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Contact Us</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="font-semibold mb-3">Legal</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Terms of Service</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Privacy Policy</li>
        <li className="hover:text-emerald-600 transition duration-200 cursor-pointer">Cookie Policy</li>
      </ul>
    </div>

  </div>

  <div className="border-t text-center text-sm text-gray-400 py-4">
    © 2026 Marketplace. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default App;