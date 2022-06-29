import React from "react";
import "./hero.css";
import Globe from "../../assets/globe.svg";
import Logo from "../../assets/logo.png";
import Blob from "../../assets/Vector.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text__container">
        <h1>About</h1>
        <p>
          Dimension is a proof-of-stake masternode mining protocol which enables
          staking mechanism that is a one click investment platform, where users
          will be able to stake their tokens to get a high yield interest of
          around 80% to 100% per annum.
          <br />
          <br />
          Dimension Protocol help other proof-of-stake cryptocurrencys by
          increasing their efficiency in validation process which help them
          increase their transaction speed and limits.
          <br />
          <br />
          Dimension Protocol is a complex masternode mining program which is a
          blockchain based economy. This protocol generates revenue by operating
          several masternodes, price gains and services provided leveraging each
          cryptocurrency's blockchain.
        </p>
      </div>
      <div className="globe__container">
        {/* <img className="globe" src={Logo} /> */}
        <img className="globe" src={Globe} />
      </div>
    </div>
  );
};

export default Hero;
