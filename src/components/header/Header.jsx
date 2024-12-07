import React from "react";
import "./header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export const Header = () => {
  return (
    <div className="container header__container" style={{ zIndex: 500 }}>
      <h5>Hello I am</h5>
      <h1>Moksh Rai Chadha</h1>
      <h5 className="text-light">Full Stack Developer</h5>
      <CTA />
      <HeaderSocials />
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  );
};

export default Header;
