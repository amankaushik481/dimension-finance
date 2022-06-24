import { React, useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
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
          <a href="https://aman-kaushik.gitbook.io/dimension-whitepaper/">
            Whitepaper
          </a>
        </li>
        <li>
          <button className="cta">Get in touch</button>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="logo__container">
        <a href="/" className="logo__link">
          <img className="logo" src={Logo} />
        </a>
      </div>
      <div className="navbar__menu_container">
        <Menu />
      </div>
      <div className="mobile__menu">
        <RiMenu3Line
          className="closeline"
          size={27}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
