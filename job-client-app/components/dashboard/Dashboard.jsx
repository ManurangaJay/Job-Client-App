import React from "react";
import Navbar from "../navbar/Navbar"; // Import Navbar
import Footer from "../footer/Footer"; // Import Footer
import "./Dashboard.css"; // Import CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar /> {/* Include Navbar */}
      <div className="dashboard-content">
        <div className="dashboard-columns">
          {/* First Column: User Photo and Metadata */}
          <div className="column user-column">
            <div className="user-section">
              <img
                src="https://via.placeholder.com/150"
                alt="User Profile"
                className="user-photo"
              />
              <div className="user-details">
                <h3>User Name</h3>
                <p>Location: New York</p>
                <p>Email: user@example.com</p>
                <p>Joined: January 2023</p>
              </div>
            </div>
          </div>

          {/* Second Column: Your Jobs and Skills */}
          <div className="column">
            <section className="jobs-section">
              <h3>Your Jobs</h3>
              <div className="section-number">12</div>
            </section>

            <section className="skills-section">
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS</li>
              </ul>
            </section>
          </div>

          {/* Third Column: Saved Jobs and Experiences */}
          <div className="column">
            <section className="saved-jobs-section">
              <h3>Saved Jobs</h3>
              <div className="section-number">5</div>
            </section>

            <section className="experience-section">
              <h3>Experiences</h3>
              <ul>
                <li>Software Developer at XYZ Corp.</li>
                <li>Frontend Developer at ABC Inc.</li>
              </ul>
            </section>
          </div>

          {/* Fourth Column: Saved Companies and Interested Fields */}
          <div className="column">
            <section className="saved-companies-section">
              <h3>Saved Companies</h3>
              <div className="section-number">8</div>
            </section>

            <section className="fields-section">
              <h3>Interested Fields</h3>
              <ul>
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Machine Learning</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default Dashboard;
