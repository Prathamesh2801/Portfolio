"use client"

import { useState, useEffect, useRef } from "react"

const FilmStripBanner = ({projectUrl} ) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const bannerRef = useRef(null)

  // Portfolio images from the provided screenshots
  const portfolioImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpImg5-wZwSYUZ1f73sS0a3nzJgoJdSSv3lZ5.png", // Vivek with camera
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpImg4-n98qAR7dExxp39iAoQTnMZKf2PK3eP.png", // "Every frame tells a story"
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpImg2-QoTCjta3zHJ8FYFRKZ2j0yOTwcAg86.png", // Art House Collection
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpImg3-eLTAVSXuqf4HEPUN4S2JPMQSRVdjwo.png", // Frame Perfect grid
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpImg6-iaj9GGyO5krVzmhGlVa8EhWkHJNDp3.png", // Colorful shots with Ganesh
  ]

  // Auto-rotate images when not hovering
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering, portfolioImages.length])

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[400px] overflow-hidden bg-black rounded-xl mb-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 w-full h-[30px] bg-black z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-black z-20"></div>

      {/* Main content area */}
      <div className="absolute inset-[30px] overflow-hidden">
        {/* Background slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {portfolioImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-center bg-cover"
              style={{
                backgroundImage: `url(${img})`,
                opacity: activeIndex === index ? 0.4 : 0,
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex h-full">
          {/* Left side - Project info */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            {/* Logo/Name */}
            <div className="mb-4">
              <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wider">VIVEK DUBEY</h1>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">CINEMATOGRAPHER</p>
            </div>

            {/* Tagline */}
            <div className="mb-6">
              <p className="text-white/80 text-lg italic border-l-2 border-white/30 pl-3">
                "Every frame tells a story, every shot captures an emotion"
              </p>
            </div>

          

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-black/50 border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs">React</span>
              <span className="bg-black/50 border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                Tailwind CSS
              </span>
              <span className="bg-black/50 border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                DaisyUI
              </span>
              <span className="bg-black/50 border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                Framer Motion
              </span>
              <span className="bg-black/50 border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                Cloudinary
              </span>
            </div>

          </div>

            {/* CTA Button */}
            <div>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
              >
               Check Live
              </a>
            </div>

          {/* Right side - Visual elements */}
          <div className="hidden md:flex md:w-1/2 relative">
            {/* Camera frame overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="white" strokeWidth="1" />
                <rect x="5" y="5" width="90" height="90" fill="none" stroke="white" strokeWidth="0.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Film strip */}
            <div className="absolute top-0 right-0 h-full w-[30px] flex flex-col">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-[8.33%] w-full border-y border-white/30 flex items-center justify-center">
                  <div className="w-[15px] h-[15px] rounded-full border border-white/30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Film grain effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Image thumbnails/indicators */}
      <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? "bg-white" : "bg-white/30"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FilmStripBanner

