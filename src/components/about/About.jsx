import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpeg";

import { FaAward } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="hidden">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="conatiner about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>4.0+ Years Working</small>
            </article>
            <article className="about__card">
              <MdCastForEducation className="about__icons" />
              <h5>Education</h5>
              <small>B Tech in CSE from NIT Hamirpur </small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icons" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am a smart working epistemophile with strong logical and
            programming skills. No matter the size of the role I take my
            responsibilities very conscientiously. 3 star on codechef
            (@mrsalvation). 5 star on Hacker rank(@codermoksh) Currently working
            as a full stack developer at SourceOne.
          </p>
          <a href={"#contact"} className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
