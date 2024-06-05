import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import '../../styles/header.css';
import { TbBurger } from "react-icons/tb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Initial state: menu closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="nav-menu left">
        <Link to="/" className="nav-link button_slide slide_down ">HOME</Link>
        <Link to="/shop" className="nav-link button_slide slide_down ">SHOP</Link>
        <Link to="/story" className="nav-link button_slide slide_down ">OUR STORY</Link>
      </div>
      <img className="nav-link logo" src="/Half_logo.png" alt="Small Logo" />
      <div className="nav-menu right">
        <Link to="/contact" className="nav-link button_slide slide_down ">CONTACT</Link>
        <Link to="/account" className="nav-link button_slide slide_down ">ACCOUNT</Link>
        <Link to="/favorites" className="nav-link button_slide slide_down "><FaHeart /></Link>
        <Link to="/cart" className="nav-link button_slide slide_down "><FaShoppingCart /></Link>
      </div>
      <TbBurger className='burger-icon button_slide slide_down' onClick={toggleMenu} />
      {
        isOpen && (
          <div className="mobile-nav-menu">
          <Link to="/" className="nav-link button_slide slide_down ">HOME</Link>
          <Link to="/shop" className="nav-link button_slide slide_down ">SHOP</Link>
          <Link to="/story" className="nav-link button_slide slide_down ">OUR STORY</Link>
          <Link to="/contact" className="nav-link button_slide slide_down ">CONTACT</Link>
          <Link to="/account" className="nav-link button_slide slide_down ">ACCOUNT</Link>
          <Link to="/favorites" className="nav-link button_slide slide_down "><FaHeart /></Link>
          <Link to="/cart" className="nav-link button_slide slide_down "><FaShoppingCart /></Link>
        </div>
        )
      }
      </div>
  );
}

export default Header;
