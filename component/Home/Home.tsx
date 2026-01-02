import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="text-5xl text-center overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Review />
    </div>
  );
};

export default Home;
