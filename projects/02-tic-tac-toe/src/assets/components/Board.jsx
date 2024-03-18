import { Square } from "./Square";

export function Board({board,updateBoard}){
    console.log('boarddd he: ');
    console.log(board);
    return (
    
            board.map((square, index)=>{
  
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  >
                  {square}
                </Square>
              )
            })
        
    );
}