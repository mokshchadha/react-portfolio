import React from "react";
import "./header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export const Header = () => {
  return (
    <div className="container header__container" style={{ zIndex: 500 }}>
      <h5>Hello I am</h5>
      <h1 className="text-4xl">Moksh Rai Chadha</h1>
      <h5 className="text-light text-sm">Software Developer</h5>
      <CTA />
      <HeaderSocials />
      <a  className="text-blue-500 hover:text-blue-700 scroll__down" href="#footer"  >
        Scroll Down
      </a>
    </div>
  );
};

export default Header;
