import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
  <div className= "Item">
    <Link to={`/Product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)}  alt="" /></Link> 
    <p>{props.name}</p>
    <div className="Item_price">
        <div className="Item_new_price">
            <p>{props.new_price}</p>
        </div>
        <div className="Item_old_price">
            <p>{props.old_price}</p>
        </div>
    </div>
  </div>
  );
};

export default Item;
