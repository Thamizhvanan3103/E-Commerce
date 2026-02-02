import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>
            Your one-stop destination for quality products at the best prices.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li><Link to="/cart" className="cart">Shop</Link></li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopEasy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
