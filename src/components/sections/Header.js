import React from 'react';
import { FaHeart,FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-menu">
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Our Story</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
      <img className="logo" src="Half_logo.png" alt="Small Logo" />
      <div className="nav-menu">
        <a href="#" className="nav-link">Account</a>
        <a href="#" className="nav-link "><FaHeart /></a>
        <a href="#" className="nav-link "><FaShoppingCart /></a>
      </div>
    </div>
  );
}

export default Header;
