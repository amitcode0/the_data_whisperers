import React, { useState } from "react";
import "./WebSecurityChecker.css";

const WebSecurityChecker = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkSecurity = async () => {
    setLoading(true);
    setResult(null);

    try {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        setResult({ error: "Invalid URL! Please include http:// or https://" });
        setLoading(false);
        return;
      }

      const response = await axios.get(url, { timeout: 5000 });

      const securityInfo = {
        https: url.startsWith("https://"),
        xssProtection: response.headers["x-xss-protection"]
          ? "Enabled"
          : "Not Set",
        contentSecurityPolicy: response.headers["content-security-policy"]
          ? "Enabled"
          : "Not Set",
        xFrameOptions: response.headers["x-frame-options"] || "Not Set",
        xContentTypeOptions:
          response.headers["x-content-type-options"] || "Not Set",
      };

      setResult(securityInfo);
    } catch (error) {
      setResult({
        error:
          "Failed to fetch security details! The website may be blocking requests.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="security-checker-container">
      <h2>🔒 Web Security Checker</h2>
      <input
        type="text"
        placeholder="Enter website URL (e.g., https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={checkSecurity} disabled={loading}>
        {loading ? "Checking..." : "Check Security"}
      </button>

      {result && (
        <div className="results">
          {result.error ? (
            <p className="error">{result.error}</p>
          ) : (
            <ul>
              <li>🔐 HTTPS: {result.https ? "✅ Secure" : "❌ Not Secure"}</li>
              <li>🛡️ XSS Protection: {result.xssProtection}</li>
              <li>
                📝 Content Security Policy: {result.contentSecurityPolicy}
              </li>
              <li>🖥️ X-Frame-Options: {result.xFrameOptions}</li>
              <li>📜 X-Content-Type-Options: {result.xContentTypeOptions}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default WebSecurityChecker;
