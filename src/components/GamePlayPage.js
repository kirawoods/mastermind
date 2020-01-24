import React from "react";
import "./GamePlayPage.css";
import { Header } from "./Header";
import { GuessHistory } from "./GuessHistory";

export function GamePlayPage() {
  return (
    <div className="GamePlayPage">
      <Header />
      <GuessHistory />
    </div>
  );
}
