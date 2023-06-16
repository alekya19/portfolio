// src/components/About.js
// import { animations } from 'react-animation'
import React from "react";
// import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Alekya.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="text-white mb-8 leading-relaxed">
          Seeking Full Stack Development Opportunities | Masters Graduate and Experienced Application Developer | Building Innovative Solutions
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
               className="bg-white text-purple-600 font-semibold border-4 border-purple-600 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 no-underline inline-flex text-white  border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-6 bg-white text-purple-600 font-semibold border-4 border-purple-600 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 no-underline inline-flex text-white  border-0 py-2 px-4 focus:outline-none rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./fullstack-removebg-preview.png"
          />
        </div>
      </div>
    </section>
  );
}