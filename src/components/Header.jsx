import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Set active section to portfolio if on project details page
    if (location.pathname.includes("/project/")) {
      setActiveSection("portfolio");
      return;
    }

    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    const sections = ["home", "about", "portfolio", "experience", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      const drawerCheckbox = document.getElementById("my-drawer-3");
      if (drawerCheckbox) drawerCheckbox.checked = false;
    }
  };

  const scrollToSection = (sectionId) => {
    closeDrawer();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getLinkClasses = (sectionId) => {
    return `transition-colors duration-300 hover:text-blue-500 ${
      activeSection === sectionId ? "text-teal-400" : ""
    }`;
  };

  return (
    <div className="drawer fixed top-0 w-full z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar p-3 lg:px-16 bg-[#0f1630] w-full text-white">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 mx-4 px-2 text-3xl font-bold flex justify-end lg:justify-start">
            Portfolio
          </div>
          <div className="hidden lg:flex items-center space-x-16 text-lg">
            <button
              onClick={() => scrollToSection("home")}
              className={getLinkClasses("home")}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={getLinkClasses("about")}
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={getLinkClasses("portfolio")}
            >
              PROJECT
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={getLinkClasses("experience")}
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`btn btn-primary text-white ${
                activeSection === "contact" ? "bg-teal-400 border-teal-400" : ""
              }`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-4 text-lg">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={getLinkClasses("home")}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={getLinkClasses("about")}
            >
              ABOUT ME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={getLinkClasses("portfolio")}
            >
              PROJECT
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className={getLinkClasses("experience")}
            >
              EXPERIENCE
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={getLinkClasses("contact")}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
