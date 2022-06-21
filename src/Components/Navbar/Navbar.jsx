import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo__container">
        <a href="/" className="logo__link">
          <img className="logo" src={Logo} />
        </a>
      </div>
      <div className="navlist__container">
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/vision">Vision</a>
          </li>
          <li>
            <a href="/roadmap">The Roadmap</a>
          </li>
          <li>
            <a href="/whitepaper">Whitepaper</a>
          </li>
          <li>
            <button>Get in touch</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
