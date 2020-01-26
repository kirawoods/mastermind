import React, { Component } from "react";
import "./App.css";
import { GamePlayPage } from "./components/GamePlayPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GamePlayPage />
      </div>
    );
  }
}

export default App;
