import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./AddCompanyReviewPage.css"; // Use the same CSS as before

const AddCompanyReviewPage = () => {
  const { companyId } = useParams(); // Extract companyId from URL
  const navigate = useNavigate(); // Initialize navigate

  // State for rating (stars) and review text
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // Placeholder company details (can be fetched dynamically from backend in the future)
  const company = {
    id: companyId,
    name: `Company ${companyId}`,
    logo: "https://via.placeholder.com/150",
    description: `Company description for ${companyId}`,
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    // Handle review submission (this can be connected to a backend)
    console.log(`Review submitted for ${company.name} with rating: ${rating}`);
    console.log(`Review text: ${reviewText}`);
    // After submission, navigate back or show a success message
    navigate(`/companies/${companyId}`);
  };

  return (
    <div className="review-page">
      <Navbar />
      <div className="review-section">
        <div className="review-container">
          <h2>Add a Review for {company.name}</h2>
          <div className="rate-container">
            <h4>Rate the Company</h4>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "filled" : ""}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="review-text-container">
            <h4>Your Review</h4>
            <textarea
              className="review-textarea"
              value={reviewText}
              onChange={handleReviewTextChange}
              placeholder="Write your review here..."
            />
          </div>

          <button className="submit-btn" onClick={handleSubmitReview}>
            Submit Review
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCompanyReviewPage;
