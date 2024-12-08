import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={`https://drive.google.com/file/d/12TrO7JGlvxMV1L6RZzJObTCPFFpiCjiO/view?usp=sharing`}
        className="btn"
        target={"_blank"}
        rel="noreferrer"
      >
        Download CV
      </a>
      <a href="https://www.linkedin.com/in/mokshchadha/" target="_blank" 
               rel="noopener noreferrer"
      className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
