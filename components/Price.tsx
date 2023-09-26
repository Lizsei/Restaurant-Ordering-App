import React from 'react'

const Price = () => {
  return (
    <div>Price</div>
  )
}

export default Price


import React, { useState } from "react";

const [quantity, set Quantity] useState(1);


{/* QUANTITY AND ADD BUTTON CONTAINER */}
<div className="flex justify-between items-center">
{/* QUANTITY */}
<div className="flex justify-between w-full p-3 ring-1 ring-orange-600">
    <span>Quantity</span>
    <div classNamer="flex gap-4 items-center">
        <button onClick={()=>setQuantity(prev=>(prev>1 ? prev-1 : 1))}>{'<'}</button>
        <span>{quantity}</span>
        <button onClick={()=>setQuantity(prev=> (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
    </div>
</div>
{/* CART BUTTON */}
<button className="uppercase w-56 bg-orange-600 text-white p-3 ring-1 ring-orange-600">Add to Cart</button>
</div>