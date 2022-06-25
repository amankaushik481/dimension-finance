import React from "react";
import { Navbar, Hero } from "../../Components";
import "./homepage2.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Homepage2 = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScroll(scroll);
  };
  return (
    <div>
      <div
        className="navbar__container"
        style={scroll > 200 ? { position: "fixed" } : {}}
      >
        {scroll > 200 ? <Navbar /> : ""}
      </div>
      <div
        className="homepage2"
        onWheel={handleScroll}
        onScroll={handleScroll}
        onTouchMove={handleScroll}
      >
        <div
          className="imgg"
          style={scroll > 200 ? { height: "10vh" } : { height: "150vh" }}
        >
          <a href="/">
            <div className={scroll < 200 ? "img__container" : ""}>
              <img
                src={Logo}
                className="logos"
                style={
                  scroll > 200
                    ? {
                        marginTop: "23px",
                        Left: "0",
                        height: "48px",
                        transition: "all 2s ease",
                        position: "fixed",
                        zIndex: "0",
                      }
                    : { height: "600px", position: "fixed" }
                }
              />
            </div>
          </a>
        </div>
      </div>
      {/* <div style={scroll < 200 ? { display: "none" } : { display: "block", marginTop:"0px" }}> */}
      <Hero />
      {/* </div> */}
    </div>
  );
};

export default Homepage2;
