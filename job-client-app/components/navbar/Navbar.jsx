import React, { useState } from "react"; // Import useState for managing the state
import { Link } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa"; // Import icons from react-icons
import "./Navbar.css";

const Navbar = () => {
  // State to control visibility of the notifications dropdown
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

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
          <FaUser size={24} color="white" />
        </Link>

        {/* Notification Icon with dropdown */}
        <div className="notification-icon" onClick={toggleNotifications}>
          <FaBell size={24} color="white" />
          {/* Dropdown list */}
          {showNotifications && (
            <div className="notification-dropdown">
              <ul>
                <li>Your application for "Frontend Developer" was reviewed</li>
                <li>Company ABC has saved your profile</li><li>New job posted for Software Developer</li>
                <li>Your application for "Frontend Developer" was reviewed</li>
                <li>Company ABC has saved your profile</li><li>New job posted for Software Developer</li>
                <li>Your application for "Frontend Developer" was reviewed</li>
                <li>Company ABC has saved your profile</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
