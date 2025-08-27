import React from 'react'
import './App.css'
import Title from './Title'
import Description from './Description' 
import ProductTab from './ProductTab'
import Msgbox from './Msgbox'
import Button from './Button'
import Form from './Form'



// export const App = () => {
//   return (
//     <>
//         <h1 class='hello'>Hello World</h1>
//         <div id='app'> App</div>
//     </>

//   )
// }

export const App = () => {
  return (
    <>
        <Msgbox userName='John' textColor='red'/>
        <Msgbox userName='David' textColor='blue'/>
        <Msgbox userName='Roah' textColor='violet'/>
        <Msgbox userName='Randy' textColor='green'/>
        <ProductTab />
        <Button />
        <Form />


    </>

  )
}




// function App() {
//   return (
//     <>
//         <Title/>
//         <Description  />
//         <Title/>
//         <Description  />
//         <Title/>
//         <Description  />
//         <Title/>
//         <Description  />
//         <h1 className='hello'>Hello World</h1>
//         <div id='app'> App</div>
//     </>

//   )
// }

export default App