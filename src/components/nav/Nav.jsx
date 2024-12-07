import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineContacts,
} from "react-icons/ai";
//import { RiServiceLine } from "react-icons/ri";

const DEFAULT = "#";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const isActive = (l) => (activeNav === l ? "active" : "");
  return (
    <nav>
      <a
        href={DEFAULT}
        className={isActive("#")}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive("#about")}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        className={isActive("#portfolio")}
        onClick={() => setActiveNav("#portfolio")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#footer"
        className={isActive("#footer")}
        onClick={() => setActiveNav("#footer")}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
