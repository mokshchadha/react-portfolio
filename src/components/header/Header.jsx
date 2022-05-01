import React from "react";
import "./header.css";
import ME from "../../assets/me3.jpeg";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Moksh Rai Chadha</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <img src={ME} alt="smart coder boii" className="me" />
      </div>
    </header>
  );
};

export default Header;
