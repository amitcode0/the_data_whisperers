import React, { useState } from "react";
import "./Quiz.css";
const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Function to check password strength
  const checkStrength = (password) => {
    if (password.length < 6) {
      setStrength("Weak");
    } else if (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[\W]/.test(password)
    ) {
      setStrength("Strong");
    } else {
      setStrength("Medium");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword);
  };

  // Generate a random strong password
  const generatePassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setGeneratedPassword(newPassword);
    setPassword(newPassword);
    checkStrength(newPassword);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Password Strength Checker</h2>

      <input
        type="text"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <p>
        Strength:{" "}
        <span
          style={{
            color:
              strength === "Weak"
                ? "red"
                : strength === "Medium"
                ? "orange"
                : "green",
          }}
        >
          {strength}
        </span>
      </p>

      <button
        onClick={generatePassword}
        style={{
          padding: "10px 15px",
          border: "none",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Generate Strong Password
      </button>

      {generatedPassword && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#f4f4f4",
            borderRadius: "4px",
          }}
        >
          <strong>Generated Password: </strong> {generatedPassword}
        </div>
      )}
    </div>
  );
};

export default PasswordChecker;
