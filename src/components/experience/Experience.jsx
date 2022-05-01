import React from "react";
import "./experience.css";

import Skill from "./Skill";
import { PROFICIENCY } from "./constants";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Skill name={"HTML"} proficiency={PROFICIENCY.PRO} />
            <Skill name={"CSS"} proficiency={PROFICIENCY.MID} />
            <Skill name={"JavaScript"} proficiency={PROFICIENCY.PRO} />
            <Skill name={"Tailwind"} proficiency={PROFICIENCY.MID} />
            <Skill name={"React JS"} proficiency={PROFICIENCY.PRO} />
            <Skill name={"Flutter"} proficiency={PROFICIENCY.NEW} />
            <Skill name={"React Native"} proficiency={PROFICIENCY.NEW} />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skill name={"Node JS"} proficiency={PROFICIENCY.PRO} />
            <Skill name={"Flask"} proficiency={PROFICIENCY.MID} />
            <Skill name={"Mongo DB"} proficiency={PROFICIENCY.PRO} />
            <Skill name={"Postgres"} proficiency={PROFICIENCY.MID} />
            <Skill name={"AWS"} proficiency={PROFICIENCY.NEW} />
            <Skill name={"REST APIs"} proficiency={PROFICIENCY.PRO} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
