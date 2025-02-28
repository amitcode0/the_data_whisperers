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
  {
    question: "What is the strongest type of password?",
    options: [
      "123456",
      "Random Long Passphrase",
      "Your Name & Birth Year",
      "qwerty123",
    ],
    answer: "Random Long Passphrase",
  },
  {
    question: "Which tool is used for penetration testing?",
    options: ["Nmap", "Photoshop", "WinRAR", "Excel"],
    answer: "Nmap",
  },
  {
    question: "Which attack exploits SQL databases?",
    options: ["Brute Force", "DDoS", "SQL Injection", "Phishing"],
    answer: "SQL Injection",
  },
  {
    question: "What does XSS stand for?",
    options: [
      "Cross-Site Scripting",
      "XML Secure System",
      "Extra Security Scan",
      "eXtended System Security",
    ],
    answer: "Cross-Site Scripting",
  },
  {
    question: "Which one is a cybersecurity framework?",
    options: ["OSINT", "NIST", "JPEG", "MP4"],
    answer: "NIST",
  },
  {
    question: "Which hashing algorithm is the most secure?",
    options: ["MD5", "SHA-1", "SHA-256", "Base64"],
    answer: "SHA-256",
  },
  {
    question: "What is the purpose of a VPN?",
    options: [
      "Increase Internet Speed",
      "Encrypt Internet Traffic",
      "Store Passwords",
      "Block Ads",
    ],
    answer: "Encrypt Internet Traffic",
  },
  {
    question: "Which attack tricks users into revealing sensitive information?",
    options: ["Phishing", "DDoS", "MITM", "Ransomware"],
    answer: "Phishing",
  },
  {
    question: "Which programming language is commonly used for malware?",
    options: ["Python", "C++", "Assembly", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which type of malware locks files and demands payment?",
    options: ["Trojan", "Spyware", "Ransomware", "Adware"],
    answer: "Ransomware",
  },
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "An old software bug",
      "An unpatched security flaw",
      "A backup method",
      "A fake security alert",
    ],
    answer: "An unpatched security flaw",
  },
  {
    question: "What does MFA stand for?",
    options: [
      "Most Frequent Access",
      "Multi-Factor Authentication",
      "Maximum Firewall Access",
      "Microsoft File Analyzer",
    ],
    answer: "Multi-Factor Authentication",
  },
  {
    question: "Which is an example of social engineering?",
    options: ["Phishing", "Keylogger", "Trojan Horse", "DDoS"],
    answer: "Phishing",
  },
  {
    question: "What is the safest way to store passwords?",
    options: [
      "Writing on paper",
      "Using password managers",
      "Storing in a text file",
      "Memorizing them",
    ],
    answer: "Using password managers",
  },
  {
    question: "What is a honeypot in cybersecurity?",
    options: [
      "A trap for hackers",
      "A new encryption method",
      "A firewall",
      "An AI system",
    ],
    answer: "A trap for hackers",
  },
  {
    question: "What is the main purpose of a firewall?",
    options: [
      "Increase Internet Speed",
      "Block unauthorized access",
      "Encrypt Emails",
      "Detect Viruses",
    ],
    answer: "Block unauthorized access",
  },
  {
    question: "Which organization creates cybersecurity guidelines?",
    options: ["NIST", "NASA", "WHO", "Apple"],
    answer: "NIST",
  },
  {
    question: "What is ethical hacking?",
    options: [
      "Hacking for good purposes",
      "Spying on users",
      "A hacking tool",
      "A type of virus",
    ],
    answer: "Hacking for good purposes",
  },
];

function CyberQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
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
