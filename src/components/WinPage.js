import React from "react";
import "./WinPage.css";

export function WinPage() {
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
