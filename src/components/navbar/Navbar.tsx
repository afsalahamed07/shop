import React from "react";

import "./Navbar.css";
import NavLink from '../reusables/NavLink/NavLink'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink navLink="/" navText="shop" />
      </div>
      <div className="links">
        <NavLink navLink="products" navText="Books" />
        <NavLink navLink="cart" navText="Cart" />
      </div>
    </div>
  );
};

export default Navbar;
