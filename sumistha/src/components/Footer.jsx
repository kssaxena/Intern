import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white px-16 py-10 border-t">
      <div className="flex justify-between flex-wrap gap-10">
        {/* BRAND */}
        <div>
          <h4 className="font-semibold mb-2">Marketplace</h4>
          <p className="text-sm text-gray-600">
            Buy and sell anything locally.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/post-ad" className="hover:text-black">
                Post an Ad
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black">
                My Ads
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <Link to="/help">Help Center</Link>
            <li>Safety Tips</li>
            <li>
            <Link to="/contact" className="hover:text-black">
             Contact Us
             </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        © 2026 Marketplace. All rights reserved.
      </p>
    </footer>
  );
}