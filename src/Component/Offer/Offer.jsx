import React from 'react'
import '../Offer/Offer.css'
import offer_img from '../Assets/exclusive_image.png'

function Offer() {
  return (
    <div className='Offer'> 
      <div className="offer_left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer_right">
        <img src={offer_img} alt="" />
      </div>
    </div>
  )
}

export default Offer
