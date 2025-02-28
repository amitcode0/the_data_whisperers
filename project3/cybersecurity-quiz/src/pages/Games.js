import React, { useState } from "react";
import Quiz from "../components/Quiz";
import CyberQuiz from "../components/CyberQuiz";
import PhishingDetector from "../components/Phishing"; // Importing the Phishing detector

const Games = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("cyber");

  return (
    <div className="games-container">
      <h1>Cybersecurity & General Quizzes</h1>

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
      </div>

      <div className="quiz-content">
        {selectedQuiz === "cyber" ? (
          <CyberQuiz />
        ) : selectedQuiz === "general" ? (
          <Quiz />
        ) : (
          <PhishingDetector />
        )}
      </div>
    </div>
  );
};

export default Games;
