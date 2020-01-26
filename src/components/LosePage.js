import React from "react";
import "./LosePage.css";

export function LosePage() {
  return (
    <div className="LosePage">
      <h1 className="lose-header">You Lost :(</h1>
      <button
        className="play-again-button"
        onClick={() => window.location.reload()}
      >
        Play again
      </button>
    </div>
  );
}
