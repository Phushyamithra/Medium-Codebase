import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/story" className="nav-link">Our Story</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <img className="logo" src="Half_logo.png" alt="Small Logo" />
      <div className="nav-menu">
        <Link to="/account" className="nav-link">Account</Link>
        <Link to="/favorites" className="nav-link"><FaHeart /></Link>
        <Link to="/cart" className="nav-link"><FaShoppingCart /></Link>
      </div>
    </div>
  );
}

export default Header;
