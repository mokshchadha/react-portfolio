import React from "react";

const Project = ({
  title,
  githubLink,
  liveDemoLink,
  imgSrc,
  isDemoDisabled,
}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={githubLink} className="btn" target={"_blank"} rel="noreferrer">
          Github
        </a>
        {isDemoDisabled ? (
          ""
        ) : (
          <a
            href={liveDemoLink}
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
