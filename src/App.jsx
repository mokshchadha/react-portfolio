import React from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import SkillSlider from "./components/skills/SkillSlider.jsx"

export const App = () => {
  return (
    <div>
      <Header />
      <SkillSlider/>
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
