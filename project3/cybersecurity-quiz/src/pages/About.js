import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      {/* Animated Heading */}
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🔐 Cybersecurity Quiz Game - Community Safety
      </motion.h1>

      {/* Team Name */}
      <motion.h2
        className="team-name"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Team Name: <span>The Data Whisperers</span>
      </motion.h2>

      {/* Overview Section */}
      <motion.section
        className="overview"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Overview</h2>
        <p>
          The Cybersecurity Quiz Game is an interactive and educational game
          designed to teach players about cybersecurity threats, including
          phishing, password safety, and data privacy. The game aims to raise
          awareness and improve online safety skills in a fun and engaging way.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>🚀 Features</h2>
        <ul>
          <li>✅ Multiple Choice Questions</li>
          <li>✅ Scenario-Based Challenges</li>
          <li>✅ Time-Based Quizzes</li>
          <li>✅ Leaderboard Tracking</li>
          <li>✅ Immediate Feedback</li>
          <li>✅ Different Difficulty Levels</li>
        </ul>
      </motion.section>

      {/* Topics Covered */}
      <motion.section
        className="topics"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>🔍 Topics Covered</h2>
        <ul>
          <li>🎣 Phishing Attacks</li>
          <li>🔐 Password Security</li>
          <li>🛡 Data Privacy</li>
          <li>🌍 Safe Browsing</li>
          <li>📡 Social Engineering Attacks</li>
          <li>🔑 Multi-Factor Authentication (MFA)</li>
        </ul>
      </motion.section>

      {/* Target Audience */}
      <motion.section
        className="audience"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>🎯 Target Audience</h2>
        <p>Students | Employees | General Public | Cybersecurity Enthusiasts</p>
      </motion.section>

      {/* How to Play Section */}
      <motion.section
        className="how-to-play"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>🎮 How to Play</h2>
        <ol>
          <li>
            🔍 Select a Category: Choose from phishing, password safety, or data
            privacy.
          </li>
          <li>📝 Answer Questions: Each correct answer earns points.</li>
          <li>
            🏆 Complete the Challenge: Pass all levels to become a
            "Cybersecurity Champion."
          </li>
          <li>
            📊 View Leaderboard: Compete with friends and improve your skills.
          </li>
        </ol>
      </motion.section>
    </div>
  );
};

export default About;
