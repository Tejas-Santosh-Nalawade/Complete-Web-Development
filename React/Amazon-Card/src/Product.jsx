import React from 'react'
import './Product.css'
import Description from './Description'
import Price from './Price'
export const Product = ({title, idx}) => {
  let oldPrices = ["12,459","8,999","1,999","12,999"];
  let newPrices = ["9,999","7,999","1,499","10,999"];
  let description = [["Wireless Mouse","5 programmable buttons"],["Stylus","designed for iPad Pro"],["Bluetooth Speaker","DJ bass mode"],["Laptop","Sleek design military grade"]];
  function dosomething(){
    console.log('clicked');
  }
  return (
    <div className='Product'> 
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} /> 
        <button style={{backgroundColor:"red", margin:"20px", color:"black" }} onClick={dosomething}>Click me</button>
    </div>
  )
}

export default Product
