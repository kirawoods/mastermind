import React from "react";
import "./LosePage.css";

export function LosePage() {
  document.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
      window.location.reload();
    }
  });
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
