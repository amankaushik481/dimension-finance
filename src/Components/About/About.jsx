import React from "react";
import { Navbar } from "..";
import "./about.css";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";
import Icon5 from "../../assets/Icon-5.svg";
import Icon6 from "../../assets/Icon-6.svg";
import Icon7 from "../../assets/Icon-7.svg";
import Icon8 from "../../assets/Icon-8.svg";

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="about">
        <div className="about__heading">
          <h1>About</h1>
          <h2>What is Dimension?</h2>
        </div>
        <div className="about__divs_container">
          <div className="about__div_containers">
            <div className="about__img_container">
              <img src={Icon4} />
            </div>
            <div className="about__text_container">
              <p>
                Dimension is a proof-of-stake masternode mining protocol which
                enables staking mechanism that is a one click investment
                platform, where users will be able to stake their tokens to get
                a high yield interest of around 80% to 100% per annum.
              </p>
            </div>
          </div>
          <div className="about__div_containers">
            <div className="about__img_container">
              <img src={Icon2} />
            </div>
            <div className="about__text_container">
              <p>
                Dimension Protocol help other proof-of-stake cryptocurrencys by
                increasing their efficiency in validation process which help
                them increase their transaction speed and limits.
              </p>
            </div>
          </div>
          <div className="about__div_containers">
            <div className="about__img_container">
              <img src={Icon3} />
            </div>
            <div className="about__text_container">
              <p>
                Dimension Protocol is a complex masternode mining program which
                is a blockchain based economy. This protocol generates revenue
                by operating several masternodes, price gains and services
                provided leveraging each cryptocurrency's blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="invest__container">
          <button className="about__invest">Invest Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
