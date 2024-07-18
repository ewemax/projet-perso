import { useEffect, useState } from 'react';
import './App.css';



function Square({ value, onSquareClick, bcolor }) {
    return (
        <button style={{ background: bcolor }} onClick={onSquareClick}>
            {value}
        </button>
    );
}

  function Board() {
      const [squares, setSquares] = useState(Array(25).fill(0));
      const [state, setState] = useState(0)
      const [color, setColor] = useState("red");
      const [bgColor, setbgColor] = useState(Array(25).fill("white"));
    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = state;
        const nextColor = bgColor.slice();
        nextColor[i] = color;
        setbgColor(nextColor);
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
      function setValues(i) {
          switch (i) {
              case 0:
                  setColor("white");
                  setState(0);
                  break;
              case 1:
                  setColor("blue");
                  setState(1);
                  break;
              case 2:
                  setColor("red");
                  setState(2);
                  break;
              case 3:
                  setColor("brown");
                  setState(3);
                  break;
            
          }
      }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} bcolor={bgColor[0]} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} bcolor={bgColor[1]} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} bcolor={bgColor[2]} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} bcolor={bgColor[3]} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} bcolor={bgColor[4]} />
            </div>
            <div className="board-row">
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} bcolor={bgColor[5]} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} bcolor={bgColor[6]} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} bcolor={bgColor[7]} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} bcolor={bgColor[8]} />
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} bcolor={bgColor[9]} />
            </div>
            <div className="board-row">
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} bcolor={bgColor[10]} />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} bcolor={bgColor[11]} />
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} bcolor={bgColor[12]} />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} bcolor={bgColor[13]} />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} bcolor={bgColor[14]} />
            </div>
            <div className="board-row">
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} bcolor={bgColor[15]} />
                <Square value={squares[16]} onSquareClick={() => handleClick(16)} bcolor={bgColor[16]} />
                <Square value={squares[17]} onSquareClick={() => handleClick(17)} bcolor={bgColor[17]} />
                <Square value={squares[18]} onSquareClick={() => handleClick(18)} bcolor={bgColor[18]} />
                <Square value={squares[19]} onSquareClick={() => handleClick(19)} bcolor={bgColor[19]} />
            </div>
            <div className="board-row">
                <Square value={squares[20]} onSquareClick={() => handleClick(20)} bcolor={bgColor[20]} />
                <Square value={squares[21]} onSquareClick={() => handleClick(21)} bcolor={bgColor[21]} />
                <Square value={squares[22]} onSquareClick={() => handleClick(22)} bcolor={bgColor[22]} />
                <Square value={squares[23]} onSquareClick={() => handleClick(23)} bcolor={bgColor[23]} />
                <Square value={squares[24]} onSquareClick={() => handleClick(24)} bcolor={bgColor[24]} />
            </div>
            <div>
                <button onClick={() => setValues(0)}> empty</button>
                <button onClick={() => setValues(1)}> start</button>
                <button onClick={() => setValues(2)}> end</button>
                <button onClick={() => setValues(3)}> wall</button>
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


