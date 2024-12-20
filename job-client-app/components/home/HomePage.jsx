import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Placeholder data for jobs (can be replaced with dynamic data)
  const jobs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
    image: "https://via.placeholder.com/150", // Placeholder image
  }));

  const handleAction = () => {
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className="home-page">
      <Navbar />
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to JobHub</h1>
          <h2>Your Gateway to Endless Opportunities!</h2>
          <p>
            At JobHub, we connect talent with opportunity. Discover your dream job,
            explore career paths, and take the next step toward success—all in one place!
          </p>
        </div>
      </section>

      <section className="jobs-section">
        <h3>Related Jobs For You:</h3>
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

export default HomePage;
