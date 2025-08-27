import React from 'react'
import { useState } from 'react'
export const LudoBoard = () => {
    const [blueMove, setBlueMove] = useState(0)
    const [yellowMove, setYellowMove] = useState(0)
    const [greenMove, setGreenMove] = useState(0)
    const [redMove, setRedMove] = useState(0)

    const handleBlueClick = () => {
        setBlueMove(blueMove + 1)
    }

    const handleYellowClick = () => {
        setYellowMove(yellowMove + 1)
    }

    const handleGreenClick = () => {
        setGreenMove(greenMove + 1)
    }

    const handleRedClick = () => {
        setRedMove(redMove + 1)
    }
    const handleResetClick = () => {
        setBlueMove(0)
        setYellowMove(0)
        setGreenMove(0)
        setRedMove(0)
    }
  return (
        <div>
            <h1>Ludo Board Game Without Using Object</h1>
            <p>Ludo Game Begins</p>
            <div className="Board">
                <p>Blue move= {blueMove}</p>
                <button onClick={handleBlueClick}>+1</button>
                <p >Yellow move= {yellowMove}</p>
                <button onClick={handleYellowClick}>+1</button>
                <p >Green move= {greenMove}</p>
                <button onClick={handleGreenClick}>+1</button>
                <p>Red move= {redMove}</p>
                <button onClick={handleRedClick}>+1</button>
                <hr />
                <button onClick={handleResetClick}>Reset</button>
            </div>
        </div>

  )
}

export default LudoBoard


