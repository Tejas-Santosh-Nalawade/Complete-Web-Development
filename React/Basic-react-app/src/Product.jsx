import React from 'react'
import Title from './Title'
import Description from './Description'
import './Product.css'

export const Product = ({title,price=10,features,features2}) => {
  // const list=features.map((feature)=><li>{feature}</li>);
  // console.log(features)
  console.log(features2)
  // let isdiscount=price>10000? "5%":"";
  // let styles={backgroundColor:"yellow"};  // This is for styling
  let isdiscount=price>30000;
  return (
    <>
    <div className='Product' style={isdiscount? {backgroundColor:"yellow"}:null}>
        <h1>{title}</h1>
        <p>{price }</p>
        <p>{features.map((feature)=><li>{feature}</li>)}</p>
        <p>{features2.a}</p>
        {/* <p>{price>10000? "5%":""}</p> */}   {/* This will create the extra p in the DOM not good practice */}
        {price>10000? <p>Discount of 5%</p>:<a style={price<120? {backgroundColor:"red"}:null} href='https:/acunetix12.tech' >Get Discount</a>}
        {/* {price>10000 && <p style={isdiscount? {backgroundColor:"red"}:null}>Discount of 5%</p>} */}
        
        {/* <Title />
        <Description /> */}
    </div>

    </>
  )
}

export default Product