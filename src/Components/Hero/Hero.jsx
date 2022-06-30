import React from "react";
import "./hero.css";
import Globe from "../../assets/globe.svg";
import Logo from "../../assets/logo.png";
import Blob from "../../assets/Vector.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text__container">
        <h1>
          We give more than{" "}
          <span className="span" s>
            140%
          </span>{" "}
          returns on your fortune
        </h1>
        <div className="button__container">
          <button className="know">Know How</button>
          <button className="invest">Invest Now</button>
        </div>
      </div>
      <div className="globe__container">
        <img className="globe" src={Globe} />
      </div>
    </div>
  );
};

export default Hero;
