// src/App.js

import React from "react";
import About from "./components/about";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/testimonials";

export default function App() {
  return (
    <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}