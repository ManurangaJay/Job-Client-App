import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./CompaniesPage.css"; // Import CompaniesPage specific CSS

const CompaniesPage = () => {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      name: `Company ${i + 1}`,
      image: "https://via.placeholder.com/150", // Placeholder image
      description: `Company description for Company ${i + 1}`,
    }))
  );

  const handleNavigate = (id) => {
    navigate(`/companies/${id}`); // Redirect to company details page
  };

  return (
    <div className="companies-page">
      <Navbar />
      
      <section className="hero-section">
        <div className="hero-content">
          {/* Search bar and button */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for companies..."
            />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>

          {/* Filters Section */}
          <div className="filters">
            <select className="filter">
              <option value="industry">Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="health">Healthcare</option>
            </select>
            <select className="filter">
              <option value="location">Location</option>
              <option value="remote">Remote</option>
              <option value="new-york">New York</option>
              <option value="san-francisco">San Francisco</option>
            </select>
          </div>
        </div>
      </section>

      {/* Companies Listing Section */}
      <section className="companies-section">
        <div className="companies-grid">
          {companies.map((company) => (
            <div
              key={company.id}
              className="company-card"
              onClick={() => handleNavigate(company.id)}
            >
              <img
                src={company.image}
                alt={`${company.name}`}
                className="company-image"
              />
              <h4>{company.name}</h4>
              <p>{company.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompaniesPage;
