import React, { useState } from "react";
import "./Phishing.css";

const PhishingDetector = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const phishingKeywords = [
    "login",
    "verify",
    "update",
    "secure",
    "bank",
    "account",
    "password",
    "paypal",
    "security",
    "support",
    "confirm",
    "unlock",
    "free",
    "prize",
    "money",
    "bit.ly",
    "tinyurl",
    "gift",
    "earn",
    "win",
    "limited",
    "urgent",
    "click",
    "reset",
  ];

  const checkPhishing = (inputUrl) => {
    if (!inputUrl) {
      setResult("");
      return;
    }

    // Convert URL to lowercase for uniform checking
    const lowerUrl = inputUrl.toLowerCase();

    // Check for suspicious keywords
    const isPhishing = phishingKeywords.some((keyword) =>
      lowerUrl.includes(keyword)
    );

    // Detect non-standard characters in domain (common in phishing links)
    const domainRegex = /https?:\/\/([^\/]+)/;
    const match = lowerUrl.match(domainRegex);
    const domain = match ? match[1] : "";

    const isSuspiciousDomain = /[^\w.-]/.test(domain); // Checks for special characters in domain

    if (isPhishing || isSuspiciousDomain) {
      setResult("🚨 Warning: This might be a phishing link!");
    } else {
      setResult("✅ This link looks safe.");
    }
  };

  return (
    <div className="container">
      <h2>Phishing Link Detector</h2>
      <input
        type="text"
        placeholder="Paste your link here..."
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          checkPhishing(e.target.value);
        }}
      />
      <p className={result.includes("Warning") ? "warning-text" : "safe-text"}>
        {result}
      </p>
    </div>
  );
};

export default PhishingDetector;
