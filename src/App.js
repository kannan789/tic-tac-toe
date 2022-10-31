import logo from './logo.svg';
import './App.css';
import GameBlock from './GameBlock.js';
import {useEffect, useState} from 'react';

function App() {
  const arr=["","","","","","","","",""];
  const [putX,setputX]=useState(arr);
  const [isX,updateisX]=useState(false);

  const selBlk=(index)=>{
    let strings=Array.from(putX);
    strings[index]=isX?"X":"O";
    setputX(strings);
    updateisX(!isX);
  }


  useEffect(()=>{
   const winner=checkWinner(putX);
   if(winner)
   {
    alert(winner + " Won the  Game");
    setputX(arr);
   }
  },[putX])


  const checkWinner =  (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
     
      <div id="board-pos">
      <h2>Tic-Tac-Toe Game</h2>
        <div className="g-board">
          <GameBlock name={putX[0]} onClick={()=>selBlk(0)}/>
          <GameBlock name={putX[1]} onClick={()=>selBlk(1)}/>
          <GameBlock name={putX[2]} onClick={()=>selBlk(2)}/>
        </div>
        <div className="g-board">
        <GameBlock name={putX[3]} onClick={()=>selBlk(3)}/>
        <GameBlock name={putX[4]} onClick={()=>selBlk(4)}/>
        <GameBlock name={putX[5]} onClick={()=>selBlk(5)}/>
        </div>

        <div className="g-board">
        <GameBlock name={putX[6]} onClick={()=>selBlk(6)} />
        <GameBlock name={putX[7]} onClick={()=>selBlk(7)} />
        <GameBlock name={putX[8]} onClick={()=>selBlk(8)} />
        </div>
      </div>
      <div>
        <button id="btn" onClick={()=>setputX(arr)}>Clear Game</button>
      </div>
      
    </div>
  );
}

export default App;
