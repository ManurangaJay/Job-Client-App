import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./ApplyPage.css";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    about: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="apply-page">
      <Navbar />
      <div className="apply-container">
        <h2>Apply for Job</h2>
        <form onSubmit={handleSubmit} className="apply-form">
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            More About You:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </label>
          <label>
            Upload Your CV:
            <input
              type="file"
              name="cv"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
