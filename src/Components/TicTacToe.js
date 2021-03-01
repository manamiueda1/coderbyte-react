// We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

// You should also implement a function to determine if any player won by getting 3 X's or O's in a row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board. You should also not be able to override the other players move during the game.

// You are free to add classes and styles, but make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

import React, { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};
class Square extends React.Component {
  render() {
    let { onClick, value } = this.props;
    return (
      <div className="square" style={squareStyle} onClick={onClick}>
        {value}
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    let { squares, winner, xPlayer } = this.props.data;
    let { clickBox, reset } = this.props;
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>
          Next player: {xPlayer ? "X" : "O"}
        </div>
        <div className="winner" style={instructionsStyle}>
          Winner: {winner}
        </div>
        <button style={buttonStyle} onClick={reset}>
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square value={squares[0]} onClick={() => clickBox(0)} />
            <Square value={squares[1]} onClick={() => clickBox(1)} />
            <Square value={squares[2]} onClick={() => clickBox(2)} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={squares[3]} onClick={() => clickBox(3)} />
            <Square value={squares[4]} onClick={() => clickBox(4)} />
            <Square value={squares[5]} onClick={() => clickBox(5)} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={squares[6]} onClick={() => clickBox(6)} />
            <Square value={squares[7]} onClick={() => clickBox(7)} />
            <Square value={squares[8]} onClick={() => clickBox(8)} />
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      xPlayer: true,
      winner: null,
      squares: Array(9).fill(null),
    };
  }

  handleClick = (i) => {
    let { xPlayer, squares } = this.state;
    squares[i] = xPlayer ? "X" : "O";
    let gameWinner = winner(squares);
    if (this.state.winner) {
      return;
    }

    this.setState({
      xPlayer: !xPlayer,
      squares: squares,
      winner: gameWinner,
    });
  };

  onReset = () => {
    this.setState({
      xPlayer: true,
      winner: null,
      squares: Array(9).fill(null),
    });
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            clickBox={(i) => this.handleClick(i)}
            data={this.state}
            reset={this.onReset}
          />
        </div>
      </div>
    );
  }
}

function winner(squares) {
  if (
    (squares[0] === "X" && squares[1] === "X" && squares[2] === "X") ||
    (squares[3] === "X" && squares[4] === "X" && squares[5] === "X") ||
    (squares[6] === "X" && squares[7] === "X" && squares[8] === "X") ||
    (squares[0] === "X" && squares[3] === "X" && squares[6] === "X") ||
    (squares[1] === "X" && squares[4] === "X" && squares[7] === "X") ||
    (squares[2] === "X" && squares[5] === "X" && squares[8] === "X") ||
    (squares[0] === "X" && squares[4] === "X" && squares[8] === "X") ||
    (squares[2] === "X" && squares[4] === "X" && squares[6] === "X")
  ) {
    return "X";
  } else if (
    (squares[0] === "O" && squares[1] === "O" && squares[2] === "O") ||
    (squares[3] === "O" && squares[4] === "O" && squares[5] === "O") ||
    (squares[6] === "O" && squares[7] === "O" && squares[8] === "O") ||
    (squares[0] === "O" && squares[3] === "O" && squares[6] === "O") ||
    (squares[1] === "O" && squares[4] === "O" && squares[7] === "O") ||
    (squares[2] === "O" && squares[5] === "O" && squares[8] === "O") ||
    (squares[0] === "O" && squares[4] === "O" && squares[8] === "O") ||
    (squares[2] === "O" && squares[4] === "O" && squares[6] === "O")
  ) {
    return "O";
  }
  return null;
}

ReactDOM.render(<Game />, document.getElementById("root"));

export default Game;
