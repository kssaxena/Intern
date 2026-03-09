import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="text-center py-16 bg-white shadow-sm">
        <h1 className="text-4xl font-bold mb-4">About Marketplace</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Marketplace is a modern platform where people can buy, sell, and
          discover amazing deals nearby. Our goal is to make online trading
          simple, fast, and accessible to everyone.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
          alt="marketplace"
          className="rounded-xl shadow"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We aim to connect buyers and sellers through a simple and secure
            digital marketplace. Whether you’re looking to sell unused items or
            find great deals near you, our platform makes the process easy.
          </p>

          <p className="text-gray-600">
            From electronics to vehicles, property, and jobs — Marketplace helps
            people discover opportunities and products in one convenient place.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Why Choose Marketplace?</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl hover:shadow transition">
              <h3 className="font-semibold text-lg mb-2">Easy Buying</h3>
              <p className="text-gray-600 text-sm">
                Find great deals near you with powerful search and category
                filtering.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow transition">
              <h3 className="font-semibold text-lg mb-2">Fast Selling</h3>
              <p className="text-gray-600 text-sm">
                List your items quickly and connect with buyers in minutes.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow transition">
              <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
              <p className="text-gray-600 text-sm">
                Secure and reliable platform designed for smooth transactions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Vision</h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Our vision is to build a global digital marketplace where people can
          easily exchange products, services, and opportunities while creating
          a community built on trust and convenience.
        </p>
      </section>

    </div>
  );
};

export default About;