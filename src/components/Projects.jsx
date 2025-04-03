import React, { useState, useMemo } from "react";

import ProjectShowcase from "./ProjectShowcase";
import { project } from "../assets/data/projects";

export default function Projects() {
  const [showCard, setShowCard] = useState("websites");
  const [showAll, setShowAll] = useState(false);

  const handleProject = (category) => {
    setShowCard(category);
    setShowAll(false);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredProjects = useMemo(() => {
    return project.filter((p) => showCard === p.category);
  }, [showCard]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="bg-[#0f1630] pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full mb-[60px] text-center">
            <h2 className="text-[#dddfe3] mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              PROJECTS
            </h2>
          </div>
        </div>

        {/* Tabs for Project Categories */}
        <div className="flex justify-center mb-8">
          {['websites', 'client projects', 'self projects'].map((category) => (
            <button
              key={category}
              onClick={() => handleProject(category)}
              className={`btn ${showCard === category ? "bg-[#3d5180] hover:bg-[#4d6499] text-[#e6e9f0]" : "bg-transparent hover:bg-[#2a3b5e] text-[#a3b1d6]"} capitalize border border-[#3d5180] mx-2 my-2`}
            >
              {category}
            </button>
          ))}
        </div>


          {visibleProjects.map((project) => (
            <ProjectShowcase
              ImageHref={project.ImageHref}
              title={project.title}
              desc={project.desc}
              liveHref={project.liveHref}
              category={project.category}
              languages={project.languages}
              id={project.id}
              key={project.id}
             />
          ))}
    

        
      </div>
    </section>
  );
}