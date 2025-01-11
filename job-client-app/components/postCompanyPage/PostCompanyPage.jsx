import React, { useState } from "react";
import Navbar from "../navbar/Navbar"; // Import Navbar
import Footer from "../footer/Footer"; // Import Footer
import "./PostCompanyPage.css";

const PostCompanyPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);

  // Handle file upload
  const handleLogoUpload = (e) => {
    setCompanyLogo(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Details Submitted");
    console.log({ companyName, location, industry, description, companyLogo });
    // You can handle the form submission here (e.g., send the data to an API)
  };

  return (
    <div className="post-company-page">
      <Navbar /> {/* Include Navbar */}

      <div className="post-company-content">
        <h2>Post a Company</h2>
        <form onSubmit={handleSubmit} className="post-company-form">
          <div className="input-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Enter Industry"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Company Description"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="companyLogo">Upload Company Logo</label>
            <input
              type="file"
              id="companyLogo"
              accept="image/*"
              onChange={handleLogoUpload}
            />
          </div>

          <button type="submit" className="btn-submit">
            Post Company
          </button>
        </form>
      </div>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default PostCompanyPage;
