import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { Header } from "./components/Header";
import SetGameMode from "./components/SetGameMode";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SetGameMode />
        {/* <Header />
        <Game /> */}
      </div>
    );
  }
}

export default App;
