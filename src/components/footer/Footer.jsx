import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const HOME = "#";
export const Footer = () => {
  return (
    <footer>
      <a href={HOME} className="footer__logo">
        Moksh
      </a>
      <ul className="permalinks">
        <li>
          <a href={HOME}>Home</a>
        </li>
        <li>
          <a href={"#about"}>About</a>
        </li>
        <li>
          <a href={"#experience"}>Experience</a>
        </li>
        <li>
          <a href={"#portfolio"}>Portfolio</a>
        </li>
        <li>
          <a href={"#contact"}>Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mokshchadha">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/chadha_moksh">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/mokshrc">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Moksh Chadha. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
