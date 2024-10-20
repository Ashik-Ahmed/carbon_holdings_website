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


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}