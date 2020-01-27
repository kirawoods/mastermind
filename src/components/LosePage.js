import React, { Component } from "react";
import "./LosePage.css";
import { render } from "@testing-library/react";

export class LosePage extends Component {
  constructor(props) {
    super(props);
    document.addEventListener("keypress", e => {
      if (e.keyCode === 13) {
        window.location.reload();
      }
    });
  }

  render() {
    return (
      <div className="LosePage">
        <h1 className="lose-header">You Lost :(</h1>
        <p>The code was {this.props.code}</p>
        <button
          className="play-again-button"
          onClick={() => window.location.reload()}
        >
          Play again
        </button>
      </div>
    );
  }
}
