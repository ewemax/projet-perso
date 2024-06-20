import { useEffect, useState } from 'react';
import './App.css';



function Square({ value, onSquareClick, className }) {
    return (
        <button className={className}  onClick={onSquareClick}>
            {value}
        </button>
    );
}

  function Board() {
      const [squares, setSquares] = useState(Array(25).fill(0));
      const [state, setState] = useState(0)
      const [className , setClassName ] = useState("");
      const [color, setColor] = useState("button");
    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = state;
        setClassName(color)
        setSquares(nextSquares);
      }

      function PostGrid() {
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin':"*" },
              body: JSON.stringify(squares)
          };
          fetch('https://localhost:7050/GridControlleur', requestOptions)
          
      }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} className ="button" />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} className ="button" />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} className ="button" />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} className ="button" />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} className ="button" />
            </div>
            <div className="board-row">
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} className ="button" />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} className ="button" />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} className ="button" />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} className ="button" />
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} className ="button" />
            </div>
            <div className="board-row">
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} className ="button" />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} className ="button" />
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} className ="button" />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} className ="button" />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} className ="button" />
            </div>
            <div className="board-row">
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} className ="button" />
                <Square value={squares[16]} onSquareClick={() => handleClick(16)} className ="button" />
                <Square value={squares[17]} onSquareClick={() => handleClick(17)} className ="button" />
                <Square value={squares[18]} onSquareClick={() => handleClick(18)} className ="button" />
                <Square value={squares[19]} onSquareClick={() => handleClick(19)} className ="button" />
            </div>
            <div className="board-row">
                <Square value={squares[20]} onSquareClick={() => handleClick(20)} className ="button" />
                <Square value={squares[21]} onSquareClick={() => handleClick(21)} className ="button" />
                <Square value={squares[22]} onSquareClick={() => handleClick(22)} className ="button" />
                <Square value={squares[23]} onSquareClick={() => handleClick(23)} className ="button" />
                <Square value={squares[24]} onSquareClick={() => handleClick(24)} className ="button" />
            </div>
            <div>
                <button onClick={() => setState(0)}> empty</button>
                <button onClick={() => setState(1)}> start</button>
                <button onClick={() => setState(2)}> end</button>
                <button onClick={() => setState(3)}> wall</button>
                <button onClick={() => PostGrid()}> Solve</button>
            </div>
        </>
    );
}

export default function Game() {
    
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}


