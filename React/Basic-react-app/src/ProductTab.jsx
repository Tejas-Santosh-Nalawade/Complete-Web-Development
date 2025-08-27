import React from 'react'
import Product from './Product'
let options = ["hi-tech","durable","fast"];
let options2= {a:"hi", b:"durable", c:"fast"};
const ProductTab = () => {
  return (
<>
    <Product title="phone" price={100000} features={["hi-tech","durable","fast"]} features2={{a:"hi-tech", b: "change", c: "run"}}/>
    <Product title="laptop" price={800000} features={[options]} features2={options2}/>
    <Product title="pen" price={10} features={["durable","fast"]} features2={options2}/>
</>
    )
}

export default ProductTab