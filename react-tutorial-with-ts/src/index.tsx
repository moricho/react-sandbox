import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ==========================================

type SquareType = string | null;

interface SquareProps {
  value: SquareType;
  onClick: () => void;
}

interface BoardState {
  squares: SquareType[];
  xIsNext: boolean;
}

// ==========================================

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      { props.value }
    </button>
  );
}

// ==========================================

class Board extends React.Component<any, BoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      squares: Array<SquareType>(9).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  handleClick(i: number): void {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({squares: squares, xIsNext: !this.state.xIsNext})
  }

  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
         </div>
         <div className="board-row">
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
         </div>
         <div className="board-row">
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
         </div>
      </div>
    );
  }
}

// ==========================================

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ==========================================

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);
