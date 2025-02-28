import React, { useState } from "react";
import Quiz from "../components/Quiz";
import CyberQuiz from "../components/CyberQuiz";
import PhishingDetector from "../components/Phishing";
import Attack from "../components/Attack";
import TwoFA from "../components/TwoFA"; // Importing 2FA Component

const Games = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("cyber");

  return (
    <div className="games-container">
      <h1>Cybersecurity Challenges & Quizzes</h1>

      <div className="button-container">
        <button
          onClick={() => setSelectedQuiz("cyber")}
          className="quiz-button"
        >
          Cybersecurity Quiz
        </button>
        <button
          onClick={() => setSelectedQuiz("general")}
          className="quiz-button"
        >
          Password Strength Checker
        </button>
        <button
          onClick={() => setSelectedQuiz("phishing")}
          className="quiz-button"
        >
          Check Phishing Link
        </button>
        <button
          onClick={() => setSelectedQuiz("attack")}
          className="quiz-button"
        >
          Simulate Attack
        </button>
        <button onClick={() => setSelectedQuiz("2fa")} className="quiz-button">
          2FA Challenge
        </button>
      </div>

      <div className="quiz-content">
        {selectedQuiz === "cyber" ? (
          <CyberQuiz />
        ) : selectedQuiz === "general" ? (
          <Quiz />
        ) : selectedQuiz === "phishing" ? (
          <PhishingDetector />
        ) : selectedQuiz === "attack" ? (
          <Attack />
        ) : (
          <TwoFA />
        )}
      </div>
    </div>
  );
};

export default Games;
