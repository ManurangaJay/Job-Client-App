import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./PostJobPage.css"; // Import CSS for this page

const PostJobPage = () => {
  const [jobName, setJobName] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const navigate = useNavigate();

  // Handle the file upload (logo)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Post job logic here, for now, just log the data
    console.log({
      jobName,
      location,
      skills,
      jobDescription,
      logo,
    });

    // Optionally, navigate or show success message
    alert("Job posted successfully!");
    navigate("/jobs"); // Redirect to jobs page after posting
  };

  return (
    <div>
    <div className="post-job-page">
      <Navbar />
      <div className="post-job-container">
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit} className="post-job-form">
          {/* Job Name */}
          <div className="input-group">
            <label htmlFor="jobName">Name of the Job</label>
            <input
              type="text"
              id="jobName"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              placeholder="Enter the job name"
              required
            />
          </div>

          {/* Location */}
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter the job location"
              required
            />
          </div>

          {/* Skills Required */}
          <div className="input-group">
            <label htmlFor="skills">Skills Required</label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter skills (comma-separated)"
              required
            />
          </div>

          {/* Job Description */}
          <div className="input-group">
            <label htmlFor="jobDescription">More about the Job</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Describe the job in more detail"
              required
            />
          </div>

          {/* Logo Upload */}
          <div className="input-group">
            <label htmlFor="logo">Upload Job Logo</label>
            <input
              type="file"
              id="logo"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Post Job Button */}
          <button type="submit" className="btn post-job-btn">
            Post Job
          </button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default PostJobPage;
