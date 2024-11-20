import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-left">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for jobs..."
          />
          <div className="filters">
            <select className="filter">
              <option value="category">Category</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
            </select>
            <select className="filter">
              <option value="location">Location</option>
              <option value="remote">Remote</option>
              <option value="new-york">New York</option>
            </select>
            <select className="filter">
              <option value="salary">Salary</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <div className="hero-right">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
