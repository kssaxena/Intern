import DemoPopUp from "./DemoPopUp";
import { useState } from "react";
import {
  FaCar,
  FaHome,
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaBriefcase,
  FaGamepad,
  FaBook,
  FaHeart
} from "react-icons/fa"

export default function App() {

const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { name: "All Ads", icon: null },
    { name: "Vehicles", icon: <FaCar /> },
    { name: "Property", icon: <FaHome /> },
    { name: "Electronics", icon: <FaLaptop /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Furniture", icon: <FaCouch /> },
    { name: "Jobs", icon: <FaBriefcase /> },
    { name: "Hobbies", icon: <FaGamepad /> },
    { name: "Books", icon: <FaBook /> }
  ]

const listings = [
  {
    id: 1,
    price: "$24,500",
    title: "2020 Toyota Camry SE - Low Mileage",
    location: "New York, NY · 2 hours ago",
    image: "https://images.unsplash.com/photo-1657872737697-737a2d123ef2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "This 2020 Toyota Camry SE is in excellent condition with low mileage and a clean title. It features a fuel-efficient engine, smooth automatic transmission, and a comfortable modern interior. Perfect for daily commuting or long road trips with reliability you can trust."
  },
  {
    id: 2,
    price: "$899",
    title: "iPhone 14 Pro Max 256GB",
    location: "Los Angeles, CA · 5 hours ago",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
      
    description:
      "The iPhone 14 Pro Max 256GB delivers top-tier performance with the powerful A16 Bionic chip and stunning Super Retina XDR display. Capture incredible photos with its advanced triple-camera system. Large storage capacity makes it perfect for apps, photos, and videos."
  },
  {
    id: 3,
    price: "$2,200",
    title: "Modern 2BR Apartment for Rent",
    location: "Chicago, IL · 1 day ago",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXBhcnRtZW50fGVufDB8fDB8fHww",
    description:
      "Spacious and modern 2-bedroom apartment located in a prime neighborhood. Features an open-concept living area, updated kitchen appliances, and large windows for natural light. Ideal for professionals or small families looking for comfort and convenience."
  },
  {
    id: 4,
    price: "$650",
    title: "Leather Sofa Set - 3+2 Seater",
    location: "Houston, TX · 2 days ago",
    image: "https://images.unsplash.com/photo-1643717714673-830d9cb8ea26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhdGhlciUyMHNvZmF8ZW58MHx8MHx8fDA%3D",
      
    description:
      "Premium leather sofa set including a 3-seater and 2-seater combination. Designed for both comfort and durability with high-quality cushioning. A stylish addition to any living room, offering elegance and long-lasting support."
  },
  {
    id: 5,
    price: "$1,899",
    title: "MacBook Pro 16\" M2",
    location: "Seattle, WA · 3 days ago",
    image: "https://images.unsplash.com/photo-1642436381301-e31b17223a5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMHBybyUyMDE2fGVufDB8fDB8fHww",
      
    description:
      "The MacBook Pro 16-inch with M2 chip offers exceptional speed and performance for professionals. Ideal for video editing, coding, and creative work. Features a brilliant Retina display, long battery life, and premium build quality."
  },
  {
    id: 6,
    price: "$450",
    title: "PlayStation 5 with 2 Controllers",
    location: "Miami, FL · 4 days ago",
   image: "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
       
    description:
      "PlayStation 5 console bundled with two wireless controllers for multiplayer gaming. Experience ultra-fast load times, immersive gameplay, and stunning 4K graphics. Perfect for gaming enthusiasts looking for next-gen performance."
  },
  {
    id: 7,
    price: "$220",
    title: "Nike Air Jordan 1 Retro High",
    location: "Dallas, TX · 5 days ago",
    image: "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D",
      
    description:
      "Authentic Nike Air Jordan 1 Retro High sneakers in excellent condition. Stylish design with premium materials and superior comfort. A must-have for sneaker collectors and streetwear enthusiasts."
  },
  {
    id: 8,
    price: "$18,900",
    title: "2019 Honda Civic LX",
    location: "Phoenix, AZ · 1 week ago",
    image: "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D",
       
    description:
      "Reliable 2019 Honda Civic LX with great fuel efficiency and smooth handling. Well-maintained with a clean interior and modern safety features. Perfect sedan for daily driving and long-term reliability."
  },
  {
    id: 9,
    price: "$350",
    title: "Executive Office Desk",
    location: "Boston, MA · 1 week ago",
    image: "https://images.unsplash.com/photo-1767786330387-5cef0327b6c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV4ZWN1dGl2ZSUyMG9mZmljZSUyMGRlc2t8ZW58MHx8MHx8fDA%3D",
      
    description:
      "Spacious executive office desk crafted from high-quality wood with a professional finish. Provides ample workspace and storage drawers for organization. Ideal for home offices or corporate environments."
  },
  {
    id: 10,
    price: "$150",
    title: "Vintage Book Collection",
    location: "Portland, OR · 1 week ago",
   image: "https://plus.unsplash.com/premium_photo-1682125776589-e899882259c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmludGFnZSUyMGJvb2slMjBjb2xsZWN0aW9ufGVufDB8fDB8fHww",
      
    description:
      "A curated collection of vintage books in excellent preserved condition. Includes classic literature and rare editions perfect for collectors. Great addition to any home library or decorative shelf."
  },
  {
    id: 11,
    price: "$550",
    title: "Samsung 65\" 4K Smart TV",
    location: "Denver, CO · 2 weeks ago",
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMHNtYXJ0JTIwdHZ8ZW58MHx8MHx8fDA%3D",
      
    description:
      "Samsung 65-inch 4K Smart TV with ultra-high-definition display and vibrant color clarity. Built-in streaming apps and smart connectivity features included. Perfect for immersive movie nights and gaming sessions."
  },
  {
    id: 12,
    price: "$0",
    title: "Senior Software Engineer - Remote",
    location: "Remote · 3 days ago",
    image: "https://images.unsplash.com/photo-1693339057231-1ec67b71b1f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjByZW1vdGV8ZW58MHx8MHx8fDA%3D",
      
    description:
      "Exciting remote opportunity for an experienced Senior Software Engineer. Work on scalable systems, collaborate with cross-functional teams, and build innovative solutions. Competitive compensation and flexible work environment."
  }
];


  return (
    <div>


      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-emerald-500 text-white px-2 py-1 rounded">M</span>
            Marketplace
          </div>

          <input
            type="text"
            placeholder="Search for anything..."
            className="w-1/2 px-4 py-2 border rounded-lg"
          />

          <div className="flex gap-4 items-center">
            <button>Login</button>
            <button>Register</button>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg">
              + Post Ad
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Buy & Sell Anything</h1>
        <p className="text-gray-500 mt-2">
          Find great deals near you or list your items for free
        </p>
      </section>

      {/* Categories */}
<section className="max-w-7xl mx-auto px-4">
  <h2 className="font-semibold mb-4">Browse Categories</h2>

  <div className="grid grid-cols-9 gap-3">
    {categories.map((cat, i) => (
      <div
        key={i}
        className={`border rounded-lg px-3 py-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 text-sm ${
          i === 0 ? "bg-emerald-50 font-semibold border-emerald-500" : ""
        }`}
      >
        {cat.icon && (
          <div className="text-base text-gray-600">
            {cat.icon}
          </div>
        )}
        <span className="whitespace-nowrap">{cat.name}</span>
      </div>
    ))}
  </div>
</section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Fresh Recommendations</h2>
          <span className="text-sm text-gray-500">
            {listings.length} ads found
          </span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {listings.map((item) => (
  <div
    key={item.id}
    onClick={() => setSelectedProduct(item)}
    className="cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition relative"
  >

              {/* Heart Icon */}
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer">
                <FaHeart className="text-gray-400 hover:text-red-500" />
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-emerald-600 font-bold">{item.price}</p>
                <p className="font-semibold text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-100 mt-16 border-t">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
    
    {/* Logo + Description */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-emerald-600 text-white w-8 h-8 flex items-center justify-center rounded-md font-bold">
          M
        </div>
        <span className="font-semibold text-gray-800 text-base">
          Marketplace
        </span>
      </div>
      <p>
        Buy and sell anything locally. Safe, simple, and free.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li className="hover:text-emerald-600 cursor-pointer">Home</li>
        <li className="hover:text-emerald-600 cursor-pointer">Post an Ad</li>
        <li className="hover:text-emerald-600 cursor-pointer">My Ads</li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
      <ul className="space-y-2">
        <li className="hover:text-emerald-600 cursor-pointer">Help Center</li>
        <li className="hover:text-emerald-600 cursor-pointer">Safety Tips</li>
        <li className="hover:text-emerald-600 cursor-pointer">Contact Us</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
      <ul className="space-y-2">
        <li className="hover:text-emerald-600 cursor-pointer">Terms of Service</li>
        <li className="hover:text-emerald-600 cursor-pointer">Privacy Policy</li>
        <li className="hover:text-emerald-600 cursor-pointer">Cookie Policy</li>
      </ul>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="border-t text-center text-xs text-gray-500 py-4">
    © 2026 Marketplace. All rights reserved.
  </div>
</footer>
{selectedProduct && (
  <DemoPopUp
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)}

    </div>
  )
}
