import React, { use } from 'react'
import { useState } from 'react'
export const LudoBoardobject = () => {
  let [move,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
  let [arr, SetArr]=useState(["no moves"]); // array and State

  let updateblue=()=>{
    // move.blue+=1
    // console.log(`move=${move.blue}`);
    // setMoves({...move, blue:move.blue+1});  // spread operator to update the state
    setMoves((prevMove) => {
      return { ...prevMove, blue: prevMove.blue + 1 };

    });
    // arr.push("blue moves");
    SetArr([...arr,"Blue moves"]);
    console.log(arr);
  };
  let updategreen=()=>{
    // move.blue+=1
    console.log(`move=${move.green}`);
    // setMoves({...move, blue:move.blue+1});  // spread operator to update the state
    setMoves((prevMove) => {
      return { ...prevMove, green: prevMove.green + 1 };

    });
  };
  let updateyellow=()=>{
    // move.blue+=1
    console.log(`move=${move.yellow}`);
    // setMoves({...move, blue:move.blue+1});  // spread operator to update the state
    setMoves((prevMove) => {
      return { ...prevMove, yellow: prevMove.yellow + 1 };

    });
  };
  let updatered=()=>{
    // move.blue+=1
    console.log(`move=${move.red}`);
    // setMoves({...move, blue:move.blue+1});  // spread operator to update the state
    setMoves((prevMove) => {
      return { ...prevMove, red: prevMove.red + 1 };

    });
  };
  return (
    <div>
      hq
      <h1>Ludo Board Game Using Object </h1>  
        <p>Ludo Game Begins</p>

        <div className="Board">
          <p>Blue move= {move.blue} </p>
          <button onClick={updateblue} style={{backgroundColor: 'blue'}}>+1</button>
          <p >Yellow move= {move.yellow} </p>
          <button onClick={updateyellow} style={{backgroundColor: 'yellow', color:'black'}}>+1</button>
          <p >Green move= {move.green}</p>
          <button onClick={updategreen} style={{backgroundColor: 'green'}}>+1</button>
          <p>Red move= {move.red} </p>
          <button onClick={updatered} style={{backgroundColor: 'red'}}>+1</button>
          <hr />
          <button >Reset</button>
        </div>
    </div>
  )
}
export default LudoBoardobject