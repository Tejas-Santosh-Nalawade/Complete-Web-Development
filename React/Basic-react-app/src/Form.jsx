import React from 'react'

function handlesubmitform(event)
{
    console.log('Form Submitted')
    event.preventDefault() 
}

export const Form = () => {
  return (
        <form onSubmit={handlesubmitform}>
            <input type="text" placeholder="Write Something"/>
            <button>Submit</button>
        </form>
  )
}
export default Form
