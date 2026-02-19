import React from "react";
import "./Footer.css";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <img src={logo} alt="Marketplace Logo" className="footer-logo" />
            <h4>Marketplace</h4>
          </div>
          <p>Buy and sell anything locally. Safe, simple, and free.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Post an Ad</li>
            <li>My Ads</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Safety Tips</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Marketplace. All rights reserved.
      </div>
    </footer>
  );
}
