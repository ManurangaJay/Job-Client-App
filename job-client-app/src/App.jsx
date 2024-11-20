import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import "./App.css"; // Import global styles

function App() {
  return (
    <div className="app-container">
      {/* Mount Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
        <h1>Welcome to Jobify</h1>
        <p>Find and apply for your dream job!</p>
      </main>

      {/* Mount Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
