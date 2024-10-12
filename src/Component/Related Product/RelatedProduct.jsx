import React from 'react'
import product_data from "../Assets/data"
import Item from '../Item/Item'
import "./RelatedProduct.css"

function RelatedProduct() {
  return (
    <div className='releatedproduct'>
      <h1>Telated Product</h1>
      <hr />
      <div className="releatedproduct-Items">
        {product_data.map((item,i)=>{
            return <Item  key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
