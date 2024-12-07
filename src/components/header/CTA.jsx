import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={`https://drive.google.com/file/d/1NXnVd9dmGCEHHSGe_9Nt9vgGVUf-fjVC/view?usp=sharing`}
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
