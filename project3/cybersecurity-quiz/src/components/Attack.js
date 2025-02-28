import React, { useState } from "react";
import "./Attack.css";

const commonPasswords = [
  "123456",
  "password",
  "123456789",
  "qwerty",
  "abc123",
  "password1",
  "12345678",
  "12345",
  "123123",
  "admin",
  "securepass", // The correct password for testing
];

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [attackLogs, setAttackLogs] = useState([]);
  const [isAttacking, setIsAttacking] = useState(false);

  const attemptLogin = () => {
    if (username === "admin" && password === "securepass") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Incorrect Username or Password");
    }
  };

  const simulateAttack = async () => {
    setIsAttacking(true);
    setMessage("🔄 Starting Brute Force Attack...");
    setAttackLogs([]);

    let found = false;
    for (let i = 0; i < commonPasswords.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate attack delay
      setAttackLogs((prevLogs) => [
        ...prevLogs,
        `Trying: ${commonPasswords[i]}`,
      ]);

      if (commonPasswords[i] === "securepass") {
        found = true;
        setMessage("✅ Password Cracked!");
        setIsAttacking(false);
        return;
      }
    }

    setMessage("❌ Brute Force Attack Failed!");
    setIsAttacking(false);
  };

  return (
    <div className="container">
      <h2>Brute Force Attack Simulation</h2>
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
      <button onClick={attemptLogin} disabled={isAttacking}>
        Login
      </button>
      <button onClick={simulateAttack} disabled={isAttacking}>
        Simulate Attack
      </button>
      <p className="message">{message}</p>
      <div className="attack-logs">
        {attackLogs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
