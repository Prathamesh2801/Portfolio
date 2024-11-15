import React from 'react';
import Intro from '../assets/img/about.jpg'
export default function About () {
  return (
    <div className="min-h-screen bg-[#0f1630] flex items-center justify-center p-8">
      <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-8 md:gap-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-lg blur"></div>
          <div className="relative ">
            <img
              src={Intro}
              alt="Profile"
              className="w-80 h-fit object-cover rounded-2xl"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-start space-y-6 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">ABOUT ME</h1>
          
          <p className="text-gray-300 text-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity">
              HIRE ME
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-blue-500 text-white font-semibold hover:bg-blue-500/10 transition-colors">
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

