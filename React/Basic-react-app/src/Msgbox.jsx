import React from 'react'

const Msgbox = ({userName,textColor}) => {
  return (
    <div>
      <h1 style={{color:textColor}}>Hello {userName}</h1>

    </div>
  )
}

export default Msgbox