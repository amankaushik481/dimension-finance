import React from "react";
import "./hero.css";
import Globe from "../../assets/globe.svg";
import Button from "../../assets/button.svg";
import Input from "../../assets/input.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text__container">
        <h1>
          We give more than <span className="span">140%</span> returns on your
          fortune
        </h1>
        <p className="hero__para">
          Get the most amount of return on your fortune and build wealth with
          us.
        </p>
        <div className="button__container">
          {/* <button className="know">Know How</button> */}
          <div className="input__container" style={{ backgroundImage: Input }}>
            <input type="email" className="input" placeholder="Email address" />
          </div>
          <img src={Button} className="email__button" />
        </div>
      </div>
      <div className="globe__container">
        {/* <img className="blob" src={Blob} /> */}
        <img className="globe" src={Globe} />
      </div>
    </div>
  );
};

export default Hero;
