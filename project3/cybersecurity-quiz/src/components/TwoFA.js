import React, { useState } from "react";
import "./TwoFA.css";

const TwoFA = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const generateOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    setGeneratedOtp(randomOtp);
    alert(`Your OTP is: ${randomOtp}`); // Simulate OTP sending (In real case, send via email/SMS)
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setMessage("✅ Authentication Successful!");
      setStep(3);
    } else {
      setMessage("❌ Invalid OTP. Try Again.");
    }
  };

  return (
    <div className="twofa-container">
      <h2>🔐 Two-Factor Authentication</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={generateOtp}>Login</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>OTP Sent! Enter the 6-digit code:</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TwoFA;
