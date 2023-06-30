/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/moksh-chadha-127385145/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/mokshchadha" target={"_blank"}>
        <BsGithub />
      </a>
      <a href="https://stackoverflow.com/users/21419280/moksh-chadha">
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
