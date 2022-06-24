import React from "react";
import { Navbar, Hero } from "../../Components";
import "./homepage2.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";

const Homepage2 = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScroll(scroll);
    console.log(scroll);
  };
  return (
    <div>
      <div
        className="navbar__container"
        style={scroll > 500 ? { position: "fixed" } : {}}
      >
        {" "}
        {scroll > 500 ? <Navbar /> : ""}
      </div>
      <div className="homepage2" onWheel={handleScroll} onScroll={handleScroll}>
        <div className="imgg">
          <div className="img__container">
            {scroll < 500 ? (
              <img
                src={Logo}
                className="logos"
                style={{
                  height: `${500 - scroll}px`,
                  marginLeft: `${-4 * scroll}px`,
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Homepage2;
