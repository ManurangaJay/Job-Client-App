import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./CompanyDetailsPage.css"; // Import specific CSS for this page
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const CompanyDetailsPage = () => {
  // Assuming the companyId is available (for demonstration purposes, we are using a placeholder)
  const companyId = 1;  // You can dynamically set this based on the company you are displaying

  return (
    <div className="company-details-page">
      <Navbar />
      <div className="company-details-container">
        {/* Left Side: Company Logo */}
        <div className="company-logo-section">
          <img
            src="https://via.placeholder.com/150"
            alt="Company Logo"
            className="company-logo"
          />
          <div className="company-info">
            <h3>Company Name</h3>
            <p>Location: New York</p>
            <p>Industry: Technology</p>
            <p>Website: <a href="https://company.com">company.com</a></p>
          </div>
        </div>

        {/* Right Side: About Company and Actions */}
        <div className="company-about-section">
          <h3>About the Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat eros id venenatis pulvinar. Ut sit amet ligula sed risus
            feugiat posuere.
          </p>
          <div className="company-buttons">
            <button className="btn save-btn">Save</button>
            {/* Link the "Add a Review" button to the AddCompanyReviewPage */}
            <Link to={`/reviewc/${companyId}`} className="btn review-btn">
              Add a Review
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyDetailsPage;
