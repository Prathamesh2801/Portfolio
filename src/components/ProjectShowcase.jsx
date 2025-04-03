import { ArrowUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectShowcase({
  ImageHref = "https://via.placeholder.com/400x600",
  title = "Project Title",
  category = "Project Category",
  liveHref = "https://example.com",
  desc = "Project Description",
  languages = [],
  id
}) {

  function handleClick() {
    window.open(liveHref, "_blank");
  }

  return (
    <section className="bg-[#0f1630] pt-20 lg:px-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-20">
          {/* Project Image with Blue Border */}
          <div onClick={handleClick} className="flex-1 max-w-md relative mb-5 hover:cursor-pointer">
            <div className="absolute -bottom-6 border-8 -left-6 w-full h-full border-[#5AA1E3]  rounded-lg" />
            <img
              src={ImageHref}
              alt="Project Example"
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />  
          </div>

          {/* Project Details */}
          <div className="flex-1 md-px-10 lg-px-20 text-white">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wide">
              {title}
            </h2>
            <p className="mb-4 text-lg  lg:text-lg">{desc}</p>
            {
              languages && languages.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies Used :</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, index) => (
                      <span key={index} className="px-3 py-2 bg-[#187674] text-white rounded-lg">{lang}</span>
                    ))}
                  </div>
                </div>
              )
            }
          
            <NavLink className="inline-block mt-4 px-4 py-2 bg-[#5AA1E3] text-white rounded-lg hover:bg-[#4d6499]" to={`/project/${id}`} >
              Read More
            </NavLink>
          
           
            <a href={liveHref} className="inline-block mt-4 px-4 ml-5 py-2 bg-[#5AA1E3] text-white rounded-lg hover:bg-[#4d6499]" target="_blank" >
              Live Demo  
            </a>
            </div>
          
        </div>
      </div>
    </section>
  );
}
