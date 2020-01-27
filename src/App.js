import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Game />
      </div>
    );
  }
}

export default App;
