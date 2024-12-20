import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./JobsPage.css"; // Import JobsPage specific CSS

const JobsPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const jobs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
    image: "https://via.placeholder.com/150", // Placeholder image
  }));

  const handleAction = () => {
    navigate("/login"); // Redirect to login page on Apply/Save click
  };

  return (
    <div className="jobs-page">
      <Navbar />
      
      <section className="hero-section">
        <div className="hero-content">
          {/* Search bar and button */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for jobs..."
            />
            <button className="search-btn">
              <i className="fa fa-search"></i> {/* Font Awesome search icon */}
            </button>
          </div>

          {/* Filters Section */}
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
              <option value="work-environment">Work Environment</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listing Section */}
      <section className="jobs-section">
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.image} alt={`${job.title}`} className="job-image" />
              <h4>{job.title}</h4>
              <p>{job.company}</p>
              <div className="job-buttons">
                <button className="job-btn apply-btn" onClick={handleAction}>
                  Apply
                </button>
                <button className="job-btn save-btn" onClick={handleAction}>
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsPage;
