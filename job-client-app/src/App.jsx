import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage"; // Correct path for HomePage
import JobsPage from "../components/jobsPage/JobsPage"; // Correct path for JobsPage
import CompaniesPage from "../components/companiesPage/CompaniesPage"; // Correct path for CompaniesPage
import LoginPage from "../components/loginPage/LoginPage"; // Correct path for LoginPage
import RegisterPage from "../components/registerPage/RegisterPage"; // Correct path for RegisterPage
import Dashboard from "../components/dashboard/Dashboard"; // Correct path for Dashboard
import JobDetailsPage from "../components/jobDetailsPage/JobDetailsPage"; // Import JobDetailsPage
import CompanyDetailsPage from "../components/companyDetailsPage/CompanyDetailsPage";
import ApplyPage from "../components/applyPage/ApplyPage"; // Apply Page
import ReviewPage from "../components/reviewPage/ReviewPage"; // Import ReviewPage
import "./App.css";
import AddCompanyReviewPage from "../components/addCompanyReviewPage/AddCompanyReviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} /> 
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/apply" element={<ApplyPage />} /> 
        <Route path="/review/:jobId" element={<ReviewPage />} /> 
        <Route path="/reviewc/:companyId" element={<AddCompanyReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
