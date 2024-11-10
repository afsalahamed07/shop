import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <li>Shop</li>
        </Link>
      </div>
      <div className="links">
        <Link to="products">
          <li>Products</li>
        </Link>
        <Link to="cart">
          <li>cart</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
