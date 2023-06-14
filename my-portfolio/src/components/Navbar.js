// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            SAI ALEKYA GONTINA
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-white mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="text-white mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="text-white mr-5 hover:text-white">
            Achievements
          </a>
        </nav>
        <a
          href="#contact"
          className="animate-bounce bg-gradient-to-t from-purple-800 via-violet-900 to-purple-800 hover:bg-green-600 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        <a href="https://www.linkedin.com/in/sai-alekya/" className="animate-bounce"
          ><img className="w-10 h-10 ml-5" alt="linkedin" src="./linkedin.svg"/></a>
          <a href="https://github.com/alekya19/" className="animate-bounce text-white inline-flex items-center"
          ><img className="w-10 h-10 ml-5" alt="linkedin" src="./github_git_hub_logo_icon_132878.png"/>GitHub</a>

      </div>
    </header>
  );
}