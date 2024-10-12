import React, { useContext } from 'react';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

function CartItem() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    
    <div >
      <h1>Cart Details</h1>
      <div className="CartItem">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const quantity = cartItems[e.id] || 0; // Check if cartItem[e.id] exists, default to 0
        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} className="cartitems-format-icons" alt={e.name} />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">{quantity}</button>
                <p>{e.new_price * quantity}</p>
                <img 
                  src={remove_icon} 
                  className="clear_cart" 
                  onClick={() => removeFromCart(e.id)} 
                  alt="Remove item"  
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartItem-down">
        <div className="cartItem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItem-total-Item">
               <p>Subtatal</p>
               <p>${0}</p>
            </div>
            <hr />
            <div className="cartItem-total-Item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItem_total_price">
            <p>Total</p>
            <p>${0}</p>
            </div>
            
          </div>
          <button>PRECEED TO CHECKOUT</button>
        </div>
       
     
      <div className="cart-Item-Promocode">
        <p>If you have a Promocode,Enter it Here</p>
      <div className="cartItems_promocode_box">
        <input type="text"  className='promocode' />
        <button>Submit</button>
      </div>
      </div>
      </div>
      </div>
    </div>

  );
}

export default CartItem;
