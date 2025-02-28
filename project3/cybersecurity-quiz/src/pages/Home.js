import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Basic Cybersecurity Module */}
      <section className="cybersecurity-module">
        <h2>💻 Basic Cybersecurity Concepts</h2>
        <div className="concepts-grid">
          <div className="concept-card">
            <h3>🔐 Password Security</h3>
            <p>Use strong passwords & enable password managers.</p>
          </div>
          <div className="concept-card">
            <h3>🎣 Phishing Attacks</h3>
            <p>Beware of fake emails & links trying to steal data.</p>
          </div>
          <div className="concept-card">
            <h3>🛡 Multi-Factor Authentication</h3>
            <p>Add an extra layer of security to your accounts.</p>
          </div>
          <div className="concept-card">
            <h3>🌍 Safe Browsing</h3>
            <p>Avoid suspicious websites & pop-ups.</p>
          </div>
          <div className="concept-card">
            <h3>📡 Social Engineering</h3>
            <p>Be cautious of psychological manipulation tricks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
