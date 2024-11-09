import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <li>
          <Link to="/">Shop</Link>
        </li>
      </div>
      <div className="links">
        <div>
          <li>
            <Link to="products">Products</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="cart">cart</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
