import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-1">
      <div className="container">
        <a className="left brand-logo">Payment Gateway</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>      
          <li><NavLink to="/donate">Donate</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
