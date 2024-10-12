import React, { useContext } from "react";
import "../Pages/CSS/ShopCatagory.css";
import dropdown from "../Component/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Component/Item/Item";
const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-store">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-prodact">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="category_explore">Explore More</div>
    </div>
  );
};

export default ShopCatagory;
