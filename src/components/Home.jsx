// File: Home.jsx
import React from "react";
import Typewriter from "./Typewriter";

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Software Developer",
    "UI/UX Designer"
   ];

export default function Home() {
    return (
        <div className="hero bg-[#0f1630] min-h-[90vh]  flex items-center">
            <div className="hero-content flex-col text-white items-start pl-8 md:pl-16 lg:pl-56">
                {/* Main Heading */}
                <span className="text-4xl font-semibold text-base-300">  I'm a</span>
                <h1 className="font-serif text-[3.5rem] lg:text-[5.5rem] font-bold leading-tight">
                  <Typewriter words={words}/>
                </h1>
                {/* Button */}
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity">
            Previous Projects
            </button>
            </div>
        </div>
    );
}
