import React, { useState } from 'react'

export default function Counter(){
  // let arr=useState(0);
  // console.log(arr);
  function init()
  {
    console.log("init function is called");
    return Math.random()*100;
  }
  let [count, setCount] = useState(init);  // init() if used then multipe time render all thinks take more resources
  //  console.log("Componet is Rendered");
  //  console.log(`count = ${count}`);
  console.log("Component is Rendered");
    function incrementCount() {
      // setCount(25); // Set count to 25
        setCount((currentcount)=>{
          return (currentcount+1); 
        });  // Callback function to update the state
        setCount((currentcount)=>{
          return (currentcount+1);
        });
        setCount((currentcount)=>{
          return (currentcount+1);
        });
        setCount((currentcount)=>{
          return (currentcount+1);
        });

        // console.log(count);
        // console.log(`Inside increase count = ${count}`);
    }
  return (
    <div>
        <h3>Count={count}</h3>
        <button onClick={incrementCount}>Increase Count </button>
    </div>
  );
}