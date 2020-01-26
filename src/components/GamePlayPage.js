import React from "react";
import "./GamePlayPage.css";
import { Header } from "./Header";
import Game from "./Game";

export function GamePlayPage() {
  return (
    <div className="GamePlayPage">
      <div className="header">
        <Header />
      </div>
      <div className="gameplay">
        <Game />
      </div>
    </div>
  );
}
