import React, { useState } from 'react';
import Intro from '../assets/img/about.jpg'
import ResumeModal from './ResumeModal';

export default function About() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  return (
    <>
    <div className="min-h-screen bg-[#0f1630] flex items-center justify-center p-8">
      <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-8 md:gap-20">
        <div className="relative w-full max-w-[280px] md:max-w-[320px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-lg blur"></div>
          <div className="relative">
            <img
              src={Intro}
              alt="Prathamesh Kamble"
              className="w-full aspect-[3/4] rounded-3xl object-cover object-center"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-start space-y-6 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl  mb-2 font-bold">ABOUT ME</h1>
          
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              Hello! I'm <span className="text-blue-400 font-semibold">Prathamesh Kamble</span>, a passionate Full Stack Developer 
              based in India. I specialize in creating responsive and user-friendly web applications 
              that combine clean code with innovative solutions.
            </p>
            
            <p>
              With expertise in modern web technologies like React, Node.js, and MongoDB, I enjoy 
              turning complex problems into simple, beautiful, and intuitive designs. My approach 
              combines technical skills with creative thinking to deliver exceptional user experiences.
            </p>

            <div className="pt-2">
              <h3 className="text-white font-semibold mb-2">Quick Facts:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span> Building web applications with MERN Stack
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span> Strong focus on responsive and accessible design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span> Passionate about learning new technologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span> Always excited to tackle challenging projects
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              HIRE ME
            </a>
            <button 
              onClick={() => setIsResumeModalOpen(true)}
              className="px-8 py-3 rounded-lg border-2 border-blue-500 text-white font-semibold hover:bg-blue-500/10 transition-colors"
            >
              RESUME
            </button>
          </div>
        </div>
      </div>
      {/* Resume Modal */}

    </div>
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
      </>
  );
};