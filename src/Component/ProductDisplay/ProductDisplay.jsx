import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (propes) => {
  const { product } = propes;
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="ProcductDisplay">
      <div className="product_left">
        <div className="product_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_img">
          <img className="product_main_img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product_right">
        <h1>{product.name}</h1>
        <div className="product_star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="product_prices">
           <p className="product_old_price">
            ${product.old_price}
           </p>
           <p className="product_new_price">
            ${product.new_price}
           </p>
        </div>
        <div className="description_of_product">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eos iste ab aperiam nesciunt accusantium nobis blanditiis beatae vero magnam?</p>
        </div>
        <div className="product_size">
          <h1>Select Size</h1>
          <div className="sizelist">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="Card_btn" onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
        <p className="product-right-category"><span>Category : </span>{product.category}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
