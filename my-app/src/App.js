import React, { useState } from "react";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl.trim()) return;

    // Fake shortening logic
    const randomCode = Math.random().toString(36).substring(2, 8);
    const fakeShortUrl = `https://short.ly/${randomCode}`;
    setShortUrl(fakeShortUrl);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🔗 URL Shortener</h1>
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten URL</button>
        {shortUrl && (
          <div className="result">
            <p>Shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
