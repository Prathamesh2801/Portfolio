// File: Home.jsx
import React from "react";
import Typewriter from "./Typewriter";
import { Github, Linkedin } from "lucide-react";

const words = [
  "Full Stack Developer",
  "Frontend Developer",
  "Software Developer",

];

export default function Home() {
  return (
    <div className="hero bg-[#0f1630] min-h-[90vh]  flex items-center">
      <div className="hero-content flex-col text-white items-start pl-8 md:pl-16 lg:pl-56">
        {/* Main Heading */}
        <span className="text-4xl font-semibold text-white"> I'm a</span>
       
        <h1 className="font-serif text-[3.5rem] lg:text-[5.5rem] font-bold leading-tight" style={{ '--cursor-height': '4rem' }}>
          <Typewriter words={words}    />
        </h1>
        {/* Button */}
        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity">
          Previous Projects
        </button>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/prathamesh-kamble-51b8502a5/"
            target="_blank "
            className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Prathamesh2801"
             target="_blank "
            className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
