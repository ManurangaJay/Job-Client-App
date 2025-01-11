import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./JobDetailsPage.css";

const JobDetailsPage = () => {
  const { jobId } = useParams(); // Extract jobId from URL

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
        {/* Left Section */}
        <div className="job-details-left">
          <img src={job.image} alt={job.title} className="company-logo" />
          <h3>{job.company}</h3>
          <p>{job.title}</p>
        </div>

        {/* Right Section */}
        <div className="job-details-right">
          <h3>About the Job</h3>
          <p>{job.description}</p>
          <div className="job-action-buttons">
            <button className="btn apply-btn">Apply</button>
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