import React from "react";
import "./WinPage.css";

export function WinPage() {
  document.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
      window.location.reload();
    }
  });
  return (
    <div className="WinPage">
      <h1 className="win-header">You Win!</h1>
      <button
        className="play-again-button"
        onClick={() => window.location.reload()}
      >
        Play again
      </button>
    </div>
  );
}
