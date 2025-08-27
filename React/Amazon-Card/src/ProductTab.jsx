import React from 'react'
import Product from './Product'
import './ProductTab.css'
export const ProductTab = () => {
  return (
    <div className='ProductTab' >
      <Product title="Logitech  MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-Transformer" idx={2}/>
      <Product title="Asus Vivobook Pro 15 Oled" idx={3}/>
    </div>

  )
}
export  default ProductTab