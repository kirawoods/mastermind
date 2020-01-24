import React from "react";
import "./GuessHistory.css";

export function GuessHistory() {
  return (
    <div className="GuessHistory">
      <h2>Guess History</h2>
      <div className="guess-history-container">
        <div className="each-guess">
          <div className="guess">Guess</div>
          <div className="feedback">Feedback</div>
        </div>
      </div>
    </div>
  );
}
