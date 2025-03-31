import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { project } from "../assets/data/projects.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectBanner from "../assets/project banner/ProjectBanner.jsx";


export default function ProjectDetails() {
  const { id } = useParams();
  const projectInfo = project.find((project) => project.id === parseInt(id));

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1630f1] text-white  p-6  md:py-16 md:px-28 mt-10 ">
      {/* Navigation and Year */}
      <div className="flex justify-between items-center mb-5 z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={40} />
         <p className="text-lg">Back to Projects</p>
        </button>
        <span className="text-gray-400">2025</span>
      </div>

      {/* Project Hero Section */}
      <ProjectBanner />

      <div className="flex-1 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {projectInfo.title}
        </h1>
        <p className="text-gray-400 text-lg mb-6">{projectInfo.desc}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap  gap-2 mb-6">
          {["React-Native", "Expo", "AppWrite", "NativeWind", "Animatable"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full bg-[#222] text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div  className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-400 mb-1">Role:</h3>
            <p> Developer</p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-1">Client:</h3>
            <p>Personal Project</p>
          </div>
          </div>
          <div className="flex items-center flex-col">
          <ArrowUpRight size={30} className="ml-4" />
            <a href={projectInfo.liveHref} target="_blank" rel="noopener noreferrer" className="text- mb-1 text-2xl  font-jersey">Check Project Live </a>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold my-10 mb-6 ">Overview</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Built using React Native, this app delivers a fast, responsive, and
          platform-agnostic experience, making it accessible across Android and
          iOS devices. By leveraging the power of modern technologies, the app
          ensures smooth performance and minimal buffering, even on
          low-bandwidth networks.
        </p>
      </section>

      {/* Design Screens Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Design Screens</h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry gutter={"1.5rem"}>
            {projectInfo.projectPics.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt="Project"
                style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectInfo.features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#111] rounded-2xl p-6 transition-all duration-500 hover:bg-indigo-600"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400 transition-all duration-500 leading-relaxed group-hover:text-white">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
