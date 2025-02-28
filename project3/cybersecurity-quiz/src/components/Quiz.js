import React, { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "What is phishing?",
    options: ["A type of fishing", "A cyber attack", "A programming language"],
    answer: 1,
  },
  {
    question: "What is the best way to create a strong password?",
    options: ["Use 'password123'", "Use a mix of characters", "Use your name"],
    answer: 1,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (index) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Finished! Your Score: ${score}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedOption === index ? "selected" : ""
            }`}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next-btn"
        onClick={nextQuestion}
        disabled={selectedOption === null}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
