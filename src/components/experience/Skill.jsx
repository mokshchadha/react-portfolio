import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skill = ({ name, proficiency }) => {
  return (
    <article className="experience__details">
      <BsFillPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{name}</h4> <small className="text-light">{proficiency}</small>
      </div>
    </article>
  );
};

export default Skill;
