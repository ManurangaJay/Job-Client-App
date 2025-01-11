import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./JobDetailsPage.css";

const JobDetailsPage = () => {
  const { jobId } = useParams(); // Extract jobId from URL
  const navigate = useNavigate(); // Initialize navigate

  // Placeholder job details (can be fetched dynamically from backend in the future)
  const job = {
    id: jobId,
    title: `Job Title ${jobId}`,
    company: `Company ${jobId}`,
    image: "https://via.placeholder.com/150",
    description: `Detailed description for Job ${jobId}`,
  };

  return (
    <div className="job-details-page">
      <Navbar />
      <div className="job-details-container">
        {/* Left Section: Job Logo and Company Info */}
        <div className="job-logo-section">
          <img
            src={job.image}
            alt={job.title}
            className="job-logo"
          />
          <div className="job-info">
            <h3>{job.company}</h3>
            <p>{job.title}</p>
          </div>
        </div>

        {/* Right Section: About the Job and Actions */}
        <div className="job-about-section">
          <h3>About the Job</h3>
          <p>{job.description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat eros id venenatis pulvinar. Ut sit amet ligula sed risus feugiat posuere.
          </p>
          <div className="job-buttons">
            <button
              className="btn apply-btn"
              onClick={() => navigate("/apply")}
            >
              Apply
            </button>
            <button className="btn save-btn">Save</button>
            <button className="btn review-btn">Add a Review</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetailsPage;
