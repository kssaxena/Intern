import { Link } from "react-router-dom";

export default function HelpCenter() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SEARCH SECTION */}
      <section className="bg-[#e8f9fb] py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How can we help you?
        </h1>

        <div className="max-w-xl mx-auto flex bg-white rounded-lg shadow overflow-hidden">
          <input
            type="text"
            placeholder="Search for articles, guides, and more..."
            className="flex-1 px-4 py-3 text-sm focus:outline-none"
          />
          <button className="bg-[#0aa78f] text-white px-6 text-sm font-medium">
            Search
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-3">
          Popular:
          <span className="text-[#0aa78f] ml-2 cursor-pointer">
            Safety guidelines
          </span>
          ,
          <span className="text-[#0aa78f] ml-1 cursor-pointer">
            Payment methods
          </span>
          ,
          <span className="text-[#0aa78f] ml-1 cursor-pointer">
            Account verification
          </span>
        </p>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Browse by Category</h2>
          <span className="text-sm text-[#0aa78f] cursor-pointer">
            View all categories →
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-md transition cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#e9faf7] text-[#0aa78f] flex items-center justify-center rounded mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOTED ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6">
          Promoted Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            >
              {article}
            </div>
          ))}
        </div>
      </section>

      {/* HELP BANNER */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-4">
        <div>
          <p className="text-sm font-medium">Still need help?</p>
          <p className="text-xs text-gray-300">
            Our support team is available 24/7
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-[#0aa78f] px-4 py-2 rounded-md text-sm font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

/* DATA */
const categories = [
  {
    title: "Getting Started",
    desc: "Learn the basics of using Marketplace to buy and sell locally.",
    icon: "🚀",
  },
  {
    title: "Buying",
    desc: "Everything you need to know about finding and purchasing items.",
    icon: "🛒",
  },
  {
    title: "Selling",
    desc: "How to create listings, manage offers, and close deals.",
    icon: "🏷️",
  },
  {
    title: "Account & Security",
    desc: "Protect your account and manage passwords and settings.",
    icon: "🔐",
  },
  {
    title: "Safety Tips",
    desc: "Best practices for staying safe when buying or selling.",
    icon: "🛡️",
  },
  {
    title: "Rules & Policies",
    desc: "Important terms of service and prohibited items.",
    icon: "📜",
  },
];

const articles = [
  "How to create an ad and optimize visibility",
  "Avoiding common scams: a guide for buyers and sellers",
  "Secure payment methods for in-person transactions",
  "How to verify your profile to build trust",
  "Using Marketplace delivery partner program",
  "Reporting a user or a suspicious listing",
];