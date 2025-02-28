import React, { useState } from "react";
import "./Quiz.css"; // Import the CSS file

function App() {
  const [currentSection, setCurrentSection] = useState("login");
  const [authState, setAuthState] = useState("login");
  const [phishingResult, setPhishingResult] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [attackResult, setAttackResult] = useState("");
  const [breachMessage, setBreachMessage] = useState("");
  const [firewallMessage, setFirewallMessage] = useState("");

  // Navigation between sections
  const showSection = (section) => setCurrentSection(section);

  // Authentication Functions
  const handleSignup = () => {
    alert("Signup successful! You can now log in.");
    setAuthState("login");
  };

  const handleLogin = () => {
    setAuthState("authenticated");
  };

  // Spot the Phishing Email
  const checkPhishing = (isPhishing) => {
    setPhishingResult(
      isPhishing
        ? "✅ Correct! This is a phishing email!"
        : "❌ Wrong! This is a safe email."
    );
  };

  // Password Strength Tester
  const checkPassword = (e) => {
    const password = e.target.value;
    let strength = "Weak";

    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = "Strong";
    } else if (password.length > 5) {
      strength = "Medium";
    }

    setPasswordStrength(`Strength: ${strength}`);
  };

  // Cyber Attack Simulation
  const simulateAttack = (action) => {
    setAttackResult(
      action === "ignore"
        ? "✅ Good job! You avoided a scam!"
        : "❌ Oops! That was a scam!"
    );
  };

  // Data Breach Escape Game
  const startBreachGame = () => {
    setBreachMessage("⚠️ Click the leaked data!");
    setTimeout(() => {
      setBreachMessage("❌ Too slow! The hacker stole the data!");
    }, 3000);
  };

  // Firewall Defender Game
  const startFirewallGame = () => {
    setFirewallMessage("🛡️ Block the virus!");
    setTimeout(() => {
      setFirewallMessage("✅ Virus blocked! Your system is safe.");
    }, 3000);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <button onClick={() => showSection("phishing")}>Phishing Game</button>
        <button onClick={() => showSection("password")}>Password Tester</button>
        <button onClick={() => showSection("attack")}>Cyber Attack Game</button>
        <button onClick={() => showSection("breach")}>Data Breach Game</button>
        <button onClick={() => showSection("firewall")}>
          Firewall Defender
        </button>
      </nav>

      {/* Authentication System */}
      {authState === "login" && (
        <div id="auth-container">
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => setAuthState("signup")}>Sign up</span>
          </p>
        </div>
      )}

      {authState === "signup" && (
        <div id="signup-container">
          <h2>Sign Up</h2>
          <button onClick={handleSignup}>Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setAuthState("login")}>Login</span>
          </p>
        </div>
      )}

      {/* Main Content */}
      {authState === "authenticated" && (
        <div id="main-content">
          {/* Spot the Phishing Email */}
          {currentSection === "phishing" && (
            <div className="game-section">
              <h2>Spot the Phishing Email</h2>
              <button onClick={() => checkPhishing(true)}>
                This is Phishing
              </button>
              <button onClick={() => checkPhishing(false)}>This is Safe</button>
              <p id="phishing-result">{phishingResult}</p>
            </div>
          )}

          {/* Password Strength Tester */}
          {currentSection === "password" && (
            <div className="game-section">
              <h2>Password Strength Tester</h2>
              <input
                type="password"
                onChange={checkPassword}
                placeholder="Enter Password"
              />
              <p id="password-strength">{passwordStrength}</p>
            </div>
          )}

          {/* Cyber Attack Simulation */}
          {currentSection === "attack" && (
            <div className="game-section">
              <h2>Cyber Attack Simulation</h2>
              <button onClick={() => simulateAttack("ignore")}>Ignore</button>
              <button onClick={() => simulateAttack("fall")}>
                Click the Link
              </button>
              <p id="attack-result">{attackResult}</p>
            </div>
          )}

          {/* Data Breach Escape */}
          {currentSection === "breach" && (
            <div className="game-section">
              <h2>Data Breach Escape</h2>
              <button onClick={startBreachGame}>Start</button>
              <p id="breach-container">{breachMessage}</p>
            </div>
          )}

          {/* Firewall Defender */}
          {currentSection === "firewall" && (
            <div className="game-section">
              <h2>Firewall Defender</h2>
              <button onClick={startFirewallGame}>Start</button>
              <p id="firewall-container">{firewallMessage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
