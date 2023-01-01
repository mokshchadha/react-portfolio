import React from "react";
import "./portfolio.css";
import PROJECTS from "./projects";
import Project from "./Project";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="hidden">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {PROJECTS.map((p) => (
          <Project {...p} key={p.key} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
