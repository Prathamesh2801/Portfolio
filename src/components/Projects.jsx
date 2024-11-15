import React, { useState } from "react";
import ProjectStructure from "./ProjectStructure";
import { project } from "../assets/data/projects";

export default function Projects() {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className=" bg-[#0f1630] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full mb-[60px] text-center">
              <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Projects
              </h2>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-2">
            <div className="w-full">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-white font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("website")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-white  font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "website"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Websites
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("game")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-white font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "game"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Web Game
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-white font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-white font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            {project.map((project) => (
              <ProjectStructure
                key={project.id}
                showCard={showCard}
                ImageHref={project.ImageHref}
                title={project.title}
                desc={project.desc}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
