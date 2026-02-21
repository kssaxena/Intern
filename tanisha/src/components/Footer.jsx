import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
          <p>Buy and sell anything locally. Safe, simple, and free.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-600 cursor-pointer">Home</li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Post an Ad
            </li>
            <li className="hover:text-emerald-600 cursor-pointer">My Ads</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-600 cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Safety Tips
            </li>
            <li className="hover:text-emerald-600 cursor-pointer">
              Contact Us
            </li>
            <li>
              <Link to="/about">About Link</Link>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-emerald-600 cursor-pointer"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="space-y-2">
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

      {/* Bottom Copyright */}
      <div className="border-t text-center text-xs text-gray-500 py-4">
        © 2026 Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
