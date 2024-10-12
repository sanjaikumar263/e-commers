import React, { createContext } from 'react'
import all_product from "../Component/Assets/all_product"
import { useState } from 'react';

export const ShopContext = createContext(null);
const getDefultCard = ()=>{
    let card = {};
    for(let index = 0;index < all_product.length+1;index++){
        card[index] = 0; 
    }
    return card;
}

const ShopContextProvider = (props)=>{
    const [cartItems ,setCartItem]=useState(getDefultCard())
    
    // console.log(cartItems);
    const addToCart =(ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart =(ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }
    const getTotalCartItem =()=>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                total+=cartItems[item];
            }
        }
        return total;
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartItem};
    
    return(
       <ShopContext.Provider value={contextValue} >
        {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider;