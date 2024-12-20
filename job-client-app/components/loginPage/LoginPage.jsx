import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Predefined credentials for login
  const predefinedCredentials = {
    email: "user123@example.com",
    password: "password123",
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match predefined credentials
    if (email === predefinedCredentials.email && password === predefinedCredentials.password) {
      console.log("Login Successful");

      // Redirect to the dashboard after successful login
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <p className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
