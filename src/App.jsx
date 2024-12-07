import React from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
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
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
