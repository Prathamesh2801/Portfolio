export default function ProjectStructure({
    showCard,
    category,
    ImageHref,
    title,
    desc,
  }) {
    return (
      <div
        className={`hero w-full min-h-[50vh] my-10 h-[85vh] lg:h-[50vh] bg-[#0f1630] ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="hero-content h-full flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
            <img
              src={ImageHref}
              alt="Project"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
  
          {/* Text Content */}
          <div className="relative w-full lg:w-1/2 h-auto lg:h-full p-4 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
            <p className="py-4">{desc}</p>
            <div className="mt-4">
              <button className="btn btn-primary" >Check Live</button>
              <button className="btn btn-primary ml-4">Explore</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  