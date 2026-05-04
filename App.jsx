import { useState } from "react";
import "./App.css";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

export default function App() {
  const [name, setName] = useState("");
  const initials = name.trim() ? getInitials(name) : "?";

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">What's your name?</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name…"
          maxLength={40}
          className="input"
          autoFocus
        />

        <div className="display">
          <div className={`avatar ${name.trim() ? "active" : ""}`}>
            {initials}
          </div>
          <div className="name-text">
            {name.trim() ? (
              <>
                <span className="greeting">Hello,</span>
                <span className="name">{name}</span>
              </>
            ) : (
              <span className="placeholder">your name appears here</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}