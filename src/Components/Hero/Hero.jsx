import React from "react";
import "./hero.css";
import Globe from "../../assets/globe.svg";
import Blob from "../../assets/Vector.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text__container">
        <img className="blob" src={Blob} />
        <h1 className="heading">
          We give more than <span className="span">140%</span> returns on your
          fortune
        </h1>
        <a className="know__link" href="/whitepaper">
          <button className="know">Know How</button>
        </a>
        <button className="invest">Invest Now</button>
      </div>
      <div className="globe__container">
        <img className="globe" src={Globe} />
      </div>
    </div>
  );
};

export default Hero;
