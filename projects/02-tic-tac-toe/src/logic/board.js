import { WINNER_COMBOS } from "../constans.js";


export const checkWinner = (boardToCheck) => {
    
    //Revisamos todas las conbinaciones ganadoras
    // Para ver si X u O gano

    for (const combo of WINNER_COMBOS){

        const [a, b, c] = combo;

        if( boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
          ){

            return boardToCheck[a];
          }

    }


  }
