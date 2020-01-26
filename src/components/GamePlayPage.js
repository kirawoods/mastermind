import React from "react";
import "./GamePlayPage.css";
import { Header } from "./Header";
import GuessHistory from "./GuessHistory";
import GuessInput from "./GuessInput";

export function GamePlayPage() {
  return (
    <div className="GamePlayPage">
      <div className="header">
        <Header />
      </div>
      <div className="gameplay">
        <GuessInput />
        {/* <GuessHistory /> */}
      </div>
    </div>
  );
}
