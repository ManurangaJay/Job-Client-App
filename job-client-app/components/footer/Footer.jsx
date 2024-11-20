// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>For Candidates</h3>
          <ul>
            <li>
              <a href="/browse-jobs">Browse Jobs</a>
            </li>
            <li>
              <a href="/add-resume">Add Resume</a>
            </li>
            <li>
              <a href="/browse-employers">Browse Employers</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>For Employers</h3>
          <ul>
            <li>
              <a href="/browse-candidates">Browse Candidates</a>
            </li>
            <li>
              <a href="/post-a-job">Post a Job</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Helpful Links</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Terms of Use</h3>
          <ul>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Job Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
