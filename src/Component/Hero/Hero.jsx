import React from "react";
import "../Hero/Hero.css";
import hand from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import arrow from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt="handicon" />
          </div>
          <p>Collectons</p>
          <p>for everyone</p>
          <div className="arrow">
            Latest Colleaction
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
