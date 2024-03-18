import "./App.css";
import { useState } from "react";
import confetti from "canvas-confetti";

import { TURNS } from "./constans";
import { checkWinner } from "./logic/board.js";

import { Square } from "./assets/components/Square.jsx";
import { WinnerModal, checkEndGame } from "./assets/components/Winner.jsx";
import { Board } from "./assets/components/Board.jsx";

import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";

function App() {
  /*
    Importante el useState o todos los hook nunca pueden estar dentro de un if 
    lo que se puede hacer en este caso por ejemplo es pasar un callback y hacer un return de
    la data que necesitemos ya que js o react almacena los useState como un array y los
    guarda dependiendo a la posicion en el que se iinicialicen 
  */

  const [board, setBoard] = useState(()=>{

  const boardFromStorage = window.localStorage.getItem('board');

    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    
  });

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn');
    
    return turnFromStorage ?? TURNS.X;
    
  });


  const [winner, setWinner] = useState(null); // Null es que no hay ganador, t false es que hay un empate


  
  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board]; //spread operator
    newBoard[index] = turn;

    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //guardar partida
    saveGameToStorage({newBoard, newTurn});


    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      //se puede hacer el set del use state de esta manera
      setWinner(() => {
        return newWinner;
      });

    } else if (checkEndGame(newBoard)) {
      // si todos los elementos son diferentes de null
      setWinner(false); //Empate
    }
  };


  const resetGame = () =>{

    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage();
     
  }


  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      <button onClick={resetGame}>Reset Game</button>

      <section className="game">
        <Board board={board} updateBoard={updateBoard} />
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>

        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
