import React, { useContext, useRef, useState } from "react";
import LOGO from "../Assets/logo.png";
import card from "../Assets/cart_icon.png";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_drop_down from "../Assets/down.png"

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartItem} = useContext(ShopContext)
  const menuref = useRef()
  const drop_down = (e)=>{
    menuref.current.classList.toggle("list-visible")
    e.target.classList.toggle("open")
  }
  return (
    <>
      <div className="nav_bar">
        <div className="nav_logo">
          <img src={LOGO} alt="" />
          <Link to="/"><p>Atles</p></Link>
        </div>
        <img src={nav_drop_down} onClick={drop_down} className="drop_down" alt=""  style={{width:"50px"}}/>
        <ul ref={menuref} className="list">
          <li
            onClick={() => {
              setMenu("Home");
            }}
          >
            {" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>{" "}
            {menu === "Home" ? <hr /> : ""}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            {" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/Men">
              Men
            </Link>{" "}
            {menu === "Men" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            {" "}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Women"
            >
              Women
            </Link>{" "}
            {menu === "Women" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            {" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
              Kids
            </Link>{" "}
            {menu === "kids" ? <hr /> : ""}
          </li>
        </ul>
        <div className="login">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/card">
            <img src={card} alt="" />
          </Link>
          <div className="card_counter">{getTotalCartItem()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
