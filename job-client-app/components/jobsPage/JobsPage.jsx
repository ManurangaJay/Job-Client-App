import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./JobsPage.css";

const JobsPage = () => {
  const navigate = useNavigate();

  const jobs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
    image: "https://via.placeholder.com/150",
    description: `Description for Job ${i + 1}`,
  }));

  const handleNavigateToDetails = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="jobs-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for jobs..."
            />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="filters">
            <select className="filter">
              <option value="category">Category</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
            </select>
            {/* Additional filters */}
          </div>
        </div>
      </section>

      <section className="jobs-section">
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <img
                src={job.image}
                alt={`${job.title}`}
                className="job-image"
                onClick={() => handleNavigateToDetails(job.id)} // Redirect to Job Details
              />
              <h4>{job.title}</h4>
              <p>{job.company}</p>
              <div className="job-buttons">
                <button className="job-btn apply-btn">Apply</button>
                <button className="job-btn save-btn">Save</button>
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
