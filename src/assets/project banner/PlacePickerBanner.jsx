

import { useState, useRef } from "react"

const PlacePickerBanner = ({projectUrl}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const bannerRef = useRef(null)

  // Destinations data
  const destinations = [
    { name: "Venetian Canals", color: "from-blue-500 to-indigo-600" },
    { name: "African Savanna", color: "from-orange-500 to-red-600" },
    { name: "Himalayan Peaks", color: "from-blue-400 to-purple-600" },
    { name: "Kerala Backwaters", color: "from-green-500 to-emerald-600" },
  ]

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!bannerRef.current) return

    const rect = bannerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setRotation({
      x: (y - 0.5) * 10, // -5 to 5 degrees
      y: (x - 0.5) * -10, // -5 to 5 degrees
    })
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-xl bg-[#1e1e2f] shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTIyLjUgMjJhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6bTE1IDBhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6bS0xNSAxNWE2IDYgMCAxIDAgMCAxMiA2IDYgMCAwIDAgMC0xMnptMTUgMGE2IDYgMCAxIDAgMCAxMiA2IDYgMCAwIDAgMC0xMnoiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Content container with 3D effect */}
      <div
        className="relative h-full flex flex-col items-center justify-center p-6 transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Globe logo */}
        <div className="mb-4 relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 p-1">
            <div className="w-full h-full rounded-full bg-[#1e1e2f] flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                {/* Simplified globe pattern */}
                <div className="absolute w-full h-full opacity-30">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-t border-white/30 w-full"
                      style={{ top: `${20 + i * 15}%` }}
                    ></div>
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-l border-white/30 h-full"
                      style={{ left: `${20 + i * 15}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting dot */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-3 h-3 bg-white rounded-full absolute animate-orbit"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white tracking-wider mb-2">PLACE PICKER</h1>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-lg mb-8">
          Create your personal collection of places you would like to visit or you have visited.
        </p>

        {/* Destination cards */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-3xl">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`relative h-24 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-80`}></div>
              <div className="absolute inset-0 flex items-end p-2">
                <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                  {destination.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs">React 18</span>
          <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs">Vite</span>
          <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs">JavaScript</span>
        </div>
       {/* CTA Button */}
       <div className="mt-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Check Live
          </a>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx="true">{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(35px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(35px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default PlacePickerBanner
