import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
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
            <select className="filter">
              <option value="experience">Experience Level</option>
              <option value="entry">Entry-level</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior-level</option>
              <option value="executive">Executive/Management</option>
            </select>
            <select className="filter">
              <option value="salary">Work Environment</option>
              <option value="Remote">Remote</option>
              <option value="low">On-site</option>
              <option value="Remote">Hybrid</option>
            </select>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
