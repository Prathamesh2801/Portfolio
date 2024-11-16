import React from "react";
import { ExternalLink } from 'lucide-react';

export default function ProjectStructure({
  ImageHref,
  title,
  desc,
  liveHref,
}) {
  const handleCheckLive = (liveHref) => {
    window.open(liveHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card bg-[#1a2744] shadow-xl h-full flex flex-col border border-[#2a3b5e] transition-all duration-300 hover:shadow-[#3d5180] hover:shadow-md">
      <figure className="px-5 pt-5 flex-shrink-0">
        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            src={ImageHref}
            alt={title}
            className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </figure>
      <div className="card-body flex-grow flex flex-col justify-between text-[#e6e9f0]">
        <div>
          <h2 className="card-title justify-center mb-2 text-[#a3b1d6] font-semibold">{title}</h2>
          <p className="line-clamp-3 text-sm">{desc}</p>
        </div>
        <div className="card-actions justify-center mt-4 space-x-2">
          <button
            className="btn bg-[#3d5180] hover:bg-[#4d6499] text-[#e6e9f0] border-none"
            onClick={() => handleCheckLive(liveHref)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Check Live
          </button>
          <button className="btn bg-transparent hover:bg-[#2a3b5e] text-[#a3b1d6] border border-[#3d5180]">Explore</button>
        </div>
      </div>
    </div>
  );
}