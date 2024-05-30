import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isxTrun, setisxTrun] = useState(true);
  const CheckWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };
  const Iswinner = CheckWinner();
  const Clickhandler = (index) => {
    if(state[index]!==null){
      return;
    }
    const copystate = [...state];
    copystate[index] = isxTrun ? "x" : "0";
    setstate(copystate);
    setisxTrun(!isxTrun);
  }; 
  const Handlerreset=()=>{
    setstate(Array(9).fill(null))
  }
  // use to Restart your Game
  const Restart=()=>{
    setstate(!Array(9).fill(null))
    setstate(Array(9).fill(null))
  }
  return (
    <div className="board-container">
      {Iswinner ? (
        <>{Iswinner} won the game <button onClick={Handlerreset} style={{border:'2px solid red',color:'orange',background:'grey',height:'29px',borderRadius:'8px',}}>Play again</button></> 
      ) : (
        <>
        <h4>player {isxTrun?'x':'0 '}Player Move <button onClick={Restart} style={{border:'2px solid red',color:'orange',background:'grey',height:'29px',borderRadius:'8px',}}> Restart</button></h4>
        {/* <h4>player {isxTrun?'x':'0 '}Player Move</h4> */}
          <div className="board-row">
            <Square onClick={() => Clickhandler(0)} value={state[0]} />
            <Square onClick={() => Clickhandler(1)} value={state[1]} />
            <Square onClick={() => Clickhandler(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => Clickhandler(3)} value={state[3]} />
            <Square onClick={() => Clickhandler(4)} value={state[4]} />
            <Square onClick={() => Clickhandler(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => Clickhandler(6)} value={state[6]} />
            <Square onClick={() => Clickhandler(7)} value={state[7]} />
            <Square onClick={() => Clickhandler(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};
export default Board;
