import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { Header } from "./components/Header";
import SetGameMode from "./components/SetGameMode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeLength: 4
    };
  }
  render() {
    if (this.state.codeLength === undefined) {
      return (
        <div className="App">
          <SetGameMode />
        </div>
      );
    } else
      return (
        <div className="App">
          <Header />
          <Game codeLength={this.state.codeLength} />
        </div>
      );
  }
}

export default App;
