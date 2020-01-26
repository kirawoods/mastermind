import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: []
    };
  }

  handleClick = e => {
    e.preventDefault();
    const guess = document.getElementById("input").value;
    const guessArray = Array.from(guess).map(el => parseInt(el));
    console.log(guessArray);
    this.setState({ guesses: [...this.state.guesses, guessArray] });
    console.log(this.state);
    let form = document.getElementById("input-form");
    form.reset();
  };
  render() {
    return (
      <div>
        <div className="GuessInput">
          <form id="input-form" autoComplete="off">
            <input
              id="input"
              type="text"
              className="digit-input"
              required
            ></input>

            <br></br>
            <button onClick={this.handleClick} className="guess-button">
              Make Guess
            </button>
          </form>
        </div>
        <GuessHistory guesses={this.state.guesses} />
      </div>
    );
  }
}

export default Game;
