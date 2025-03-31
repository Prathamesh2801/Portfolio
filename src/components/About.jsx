import React, { useState } from 'react';
import Intro from '../assets/img/about.jpg'
import ResumeModal from './ResumeModal';

export default function About() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  
  return (
    <>
      <div className="min-h-screen bg-[#0f1630] flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            {/* Image Section with Frame */}
            <div className="relative w-full max-w-[320px]">
              {/* Blue background frame */}
              <div className="absolute -bottom-7 border-8 -right-7 w-full h-full border-[#5AA1E3]  rounded-lg" />
              
              {/* Main image container with beige background */}
              <div className="relative w-full aspect-[4/5] bg-[#e6ddd4] rounded-lg overflow-hidden">
                <img
                  src={Intro}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">ABOUT ME</h1>
              
              <div className="text-[#a3b1d6] text-lg space-y-6">
                <p>
                  Hello! I'm <span className="text-[#5AA1E3] font-semibold">Prathamesh Kamble</span>, a passionate Full Stack Developer 
                  based in India. I specialize in creating responsive and user-friendly web applications 
                  that combine clean code with innovative solutions.
                </p>
                
                <p>
                  With expertise in modern web technologies like React, Node.js, and MongoDB, I enjoy 
                  turning complex problems into simple, beautiful, and intuitive designs. My approach 
                  combines technical skills with creative thinking to deliver exceptional user experiences.
                </p>

                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Facts:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-[#5AA1E3]">▹</span> Building web applications with MERN Stack
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#5AA1E3]">▹</span> Strong focus on responsive and accessible design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#5AA1E3]">▹</span> Passionate about learning new technologies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#5AA1E3]">▹</span> Always excited to tackle challenging projects
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="#contact" 
                  className="px-12 py-3 rounded-lg bg-gradient-to-r from-[#5AA1E3] to-[#7B68EE] text-white font-semibold hover:opacity-90 transition-all duration-300 text-center min-w-[180px]"
                >
                  HIRE ME
                </a>
                <button 
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-12 py-3 rounded-lg border border-[#1E2D4D] bg-transparent text-white font-semibold hover:bg-[#1E2D4D] transition-all duration-300 min-w-[180px]"
                >
                  RESUME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
}