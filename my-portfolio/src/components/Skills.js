// src/components/Skills.js

import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon color="gray" className="bg-gradient-to-t from-purple-800 via-violet-900 to-purple-800 w-10 inline-block mb-4" /> */}
          <img className="mx-auto inline-block w-40" alt="gif" src="./wired-lineal-112-book-morph (1).gif"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I possess a diverse set of skills and extensive experience in various technologies, enabling me to tackle complex challenges and deliver high-quality solutions. My skill set includes proficiency in front-end and back-end development, as well as expertise in the following technologies
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" color="white"/>
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}