import React from 'react';
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import OurShip from './components/OurShip';
import GlobalReach from './components/GlobalReach';
import MissionAndVision from './components/MissionAndVision';
import FenderService from './components/FenderService';
import IndustriesWeServe from './components/IndustriesWeServe';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FenderService />
      <Services />
      <Stats />
      <OurShip />
      <GlobalReach />
      {/* <IndustriesWeServe /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <MissionAndVision /> */}
      <Contact />
    </>
  );
}