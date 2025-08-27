import React from 'react'
import { useState } from 'react'

export const 
LikeButton = () => {
    // let clicked=()=>{
    //     console.log("clicked")
    // };
    let [isliked, setLiked] = useState(false);
    let [isclicked, setClicked] = useState(0);
    let toggleLike = () => {
        setLiked(!isliked);
        setClicked(isclicked+1);

    }
    let likestyle ={
        color: isliked ? "red" : "white",
        fontSize: isliked ? "50px" : "50px"
    }

  return (
    <div>
        <p style={likestyle}>Clicked={isclicked} </p>
        <p onClick={toggleLike} style={likestyle}>
            {
                isliked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
                </p>
    </div>
  )
}

export default LikeButton