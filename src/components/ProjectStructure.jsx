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
    <div className="card bg-base-100 shadow-xl h-full flex flex-col">
      <figure className="px-5 pt-5 flex-shrink-0">
        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            src={ImageHref}
            alt={title}
            className="w-full h-full object-contain object-center rounded-3xl"
          />
        </div>
      </figure>
      <div className="card-body flex-grow flex flex-col justify-between">
        <div>
          <h2 className="card-title justify-center mb-2">{title}</h2>
          <p className="line-clamp-3 text-sm">{desc}</p>
        </div>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleCheckLive(liveHref)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Check Live
          </button>
          <button className="btn btn-ghost">Explore</button>
        </div>
      </div>
    </div>
  );
}