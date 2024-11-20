import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">JobHub</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/jobs">Jobs</a>
        </li>
        <li>
          <a href="/companies">Companies</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/login">
          <button className="btn navbar-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn navbar-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
