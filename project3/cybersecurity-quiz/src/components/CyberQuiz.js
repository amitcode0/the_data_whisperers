import React, { useState } from "react";
import "./CyberQuiz.css";

const questions = [
  {
    question: "What does 'DDoS' stand for?",
    options: [
      "Direct Data on Security",
      "Distributed Denial of Service",
      "Dynamic Data of System",
      "Digital Defense on Server",
    ],
    answer: "Distributed Denial of Service",
  },
  {
    question: "Which protocol is used for secure web browsing?",
    options: ["HTTP", "HTTPS", "FTP", "TCP"],
    answer: "HTTPS",
  },
];

function CyberQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz;
