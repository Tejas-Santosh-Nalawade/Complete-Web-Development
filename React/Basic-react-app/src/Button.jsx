import React from 'react'
function doSomething() {
    console.log('Button Clicked')
    }

    function para() {
        console.log('Paragraph Clicked')
    }

    function handlehover() {
        console.log('Hello World')
    }

    function doubleclick() {
        console.log('Double Clicked')
    }
const Button = () => {
  return (
    <>
        <button style={{backgroundColor:"red" , color:"black"}} onClick={doSomething}>Click Me</button>
        <p onClick={para}>This is a Paragraph</p>
        <h1 className='hello' on onMouseOver={handlehover}>Hello World</h1>
        <button style={{backgroundColor:"red" , color:"black"}} onDoubleClick={doubleclick}>Click Me</button>
    </>

  )
}

export default Button