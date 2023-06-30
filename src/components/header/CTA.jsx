import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={`https://drive.google.com/file/d/13Skts4a5vqi5usB6JdRibLM3M1c_hoSJ/view?usp=sharing`}
        className="btn"
        target={"_blank"}
        rel="noreferrer"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
