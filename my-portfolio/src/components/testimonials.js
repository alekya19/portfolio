// src/components/Testimonials

import React from "react";
// import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
      <img className="mx-auto inline-block w-40" alt="gif" src="./wired-lineal-1780-medal-first-place.gif"/>
        {/* <UsersIcon color="gray" className="bg-gradient-to-t from-purple-800 via-violet-900 to-purple-800 w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Achievements
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <img className="mx-auto block w-20 " alt="gif" src="./wired-lineal-2239-star-of-bethlehem.gif"/>
                {/* <TerminalIcon color="gray" className="block w-8 text-gray-500 mb-4" /> */}
                <p className="leading-relaxed mb-6 text-white">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                 
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}