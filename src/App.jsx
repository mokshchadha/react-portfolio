import React, { useEffect } from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
//import Services from "./components/services/Services";
//import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

export const App = () => {
  useEffect(() => {
    setUpListeners();
    return;
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

function setUpListeners() {
  console.log("listener set up ");
  const obesrver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else entry.target.classList.remove("show");
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((e) => obesrver.observe(e));
}
