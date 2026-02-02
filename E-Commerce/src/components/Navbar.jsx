import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h1>ShopEase</h1>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart">
          🛒 <span>{cartItems.length}</span>
        </Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
