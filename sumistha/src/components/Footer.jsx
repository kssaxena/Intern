import React from 'react';
export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Marketplace</h3>
          <p>Buy and sell anything locally.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <p>Home</p>
          <p>Post an Ad</p>
          <p>My Ads</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <p>Help Center</p>
          <p>Safety Tips</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>

      <p className="text-center mt-6 text-xs">
        © 2026 Marketplace. All rights reserved.
      </p>
    </footer>
  );
}