// src/components/Projects.js

// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="bg-gradient-to-t from-purple-800 via-violet-900 to-purple-800 mx-auto inline-block w-10 mb-4" /> */}
          <img className="mx-auto inline-block w-40" alt="gif" src="./wired-lineal-742-multimedia-code-1 (1).gif"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Below are some of the applications I've built throughout my journey as a developer. These projects showcase my skills in designing and developing functional and user-friendly web and mobile applications. Each project demonstrates my expertise in various technologies, frameworks, and programming languages, highlighting my ability to create impactful solutions.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}