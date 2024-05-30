// import React, { useState } from "react";
// import SquareDemo from "./SquareDemo";

// const BoardDemo=()=> {
//   const [state,setstate]=useState(Array(9).fill(null))
//   const [isxTrun,setisxTrun]=useState(true);
//   const Clickhandler=(index)=>{
//   const copyState=[...state];
//   copyState[index]=isxTrun?"x":'0';
//   setstate(copyState);
//   setisxTrun(!isxTrun);

//   }
//   return (
//     <div className="BoardDemo-container">
//       <div className="BoardDemo-row">
//         <SquareDemo onClicK={()=>Clickhandler(0)} value={state[0]} />
//         <SquareDemo onClicK={()=>Clickhandler(1)} value={state[1]}/>
//         <SquareDemo onClicK={()=>Clickhandler(2)} value={state[2]}/>
//       </div>
//       <div className="BoardDemo-row">
//         <SquareDemo onClicK={()=>Clickhandler(3)} value={state[3]}/>
//         <SquareDemo onClicK={()=>Clickhandler(4)} value={state[4]}/>
//         <SquareDemo onClicK={()=>Clickhandler(5)} value={state[5]}/>
//       </div>
//       <div className="BoardDemo-row">
//         <SquareDemo onClicK={()=>Clickhandler(6)} value={state[6]}/>
//         <SquareDemo onClicK={()=>Clickhandler(7)} value={state[7]}/>
//         <SquareDemo onClicK={()=>Clickhandler(8)} value={state[8]}/>
//       </div>
//     </div>
//   );
// }

// export default BoardDemo;
