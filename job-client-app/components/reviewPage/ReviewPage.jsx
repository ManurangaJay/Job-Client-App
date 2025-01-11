import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./ReviewPage.css";

const ReviewPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = () => {
    // Logic for submitting the review
    console.log("Review Submitted: ", { rating, reviewText });
    navigate("/jobs"); // Navigate back to job list after submission
  };

  return (
    <div className="review-page">
      <Navbar />
      <section className="review-section">
        <div className="review-container">
          <h2>Review this Job</h2>
          
          <div className="rate-container">
            <h4>Add a Rate</h4>
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
              placeholder="Write your review here..."
              value={reviewText}
              onChange={handleReviewChange}
            ></textarea>
          </div>

          <button className="btn submit-btn" onClick={handleSubmitReview}>
            Submit Review
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReviewPage;
