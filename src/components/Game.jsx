

import React, { useState } from "react";

import './Game.css';
import Square from './Square';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



        
function Restart({ onClick }) {

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #1b5e20 30%, #9ccc65 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const classes = useStyles();
  
return (
    
<React.Fragment>
  
 <Button  className={classes.root}  onClick={onClick}>
   Play again
   </Button>
 </React.Fragment>

    
  );
}


function Game() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  
  const winner = calculateWinner(squares);

  function getStatus() {
    
    if (winner) {
      

      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Next player: " + (isXNext ? "X" : "O");
    }
  }






  
return (
  <React.Fragment> 
    <Container maxWidth="sm" className="container">
      <Container className="game">
        <Container className="game-board">
          <Container className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </Container>
          <Container className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </Container>
          <Container className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </Container>
        </Container>
        <Container className="game-info">{getStatus()}</Container>
        <Container className="restart-button">{renderRestartButton()}</Container>
      </Container>
    </Container>
  </React.Fragment>
  );
  

















  
    function renderRestartButton() {
      return (
        <Restart
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
          }}
        />
      );
    }
  
  
  

  
  
  
  
  
  
  
  
  
    function renderSquare(i) {
      return (
        <Square
          value={squares[i]}
          onClick={() => {
            if (squares[i] != null || winner != null) {
              return;
            }
            const nextSquares = squares.slice();
            nextSquares[i] = (isXNext ? "X" : "O");
            setSquares(nextSquares);
  
            setIsXNext(!isXNext); 
          }}
        />
      );
    }
  
 
  
  
  
  
  function calculateWinner(squares) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
   
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }
  
}
  export default Game;