import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBell, FaTachometerAlt } from "react-icons/fa"; // Import icons from react-icons
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">JobHub</Link> {/* Use Link for Home navigation */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Home link */}
        </li>
        <li>
          <Link to="/jobs">Jobs</Link> {/* Jobs link */}
        </li>
        <li>
          <Link to="/companies">Companies</Link> {/* Companies link */}
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/login">
          <button className="btn navbar-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn navbar-btn">Register</button>
        </Link>


        {/* User Icon for Dashboard */}
        <Link to="/dashboard">
          <FaUser size={24} color="white" className="navbar-icon" />
        </Link>

        {/* Notification Icon */}
        <Link to="/notifications">
          <FaBell size={24} color="white" className="navbar-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
