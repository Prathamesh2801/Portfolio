import React, { useState, useMemo } from "react";
import ProjectStructure from "./ProjectStructure";
import { project } from "../assets/data/projects";

export default function Projects() {
  const [showCard, setShowCard] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleProject = (category) => {
    setShowCard(category);
    setShowAll(false);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredProjects = useMemo(() => {
    return project.filter((p) => showCard === "all" || p.category === showCard);
  }, [showCard]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="bg-[#0f1630] pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full mb-[60px] text-center">
            <h2 className="text-[#a3b1d6] mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              PROJECTS
            </h2>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-2 text-[#e6e9f0]">
          <div className="w-full">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {["all", "website", "game", "team", "others"].map((category) => (
                <li key={category} className="mb-1">
                  <button
                    onClick={() => handleProject(category)}
                    className={`btn ${
                      showCard === category 
                        ? "bg-[#3d5180] hover:bg-[#4d6499] text-[#e6e9f0]" 
                        : "bg-transparent hover:bg-[#2a3b5e] text-[#a3b1d6]"
                    } capitalize border border-[#3d5180] mx-2 my-2`}
                  >
                    {category === "all" ? "All Projects" : category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectStructure
              key={project.id}
              ImageHref={project.ImageHref}
              title={project.title}
              desc={project.desc}
              category={project.category}
              liveHref={project.liveHref}
            />
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="w-full text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="btn bg-[#3d5180] hover:bg-[#4d6499] text-[#e6e9f0] border-none btn-lg"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}