

import { useEffect, useRef, useState } from "react"
import { useCallback } from "react"

// If you have lucide-react installed, you can use these imports
// Otherwise, I'll provide simple icon components below
const Film = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
    <line x1="7" x2="7" y1="2" y2="22"></line>
    <line x1="17" x2="17" y1="2" y2="22"></line>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <line x1="2" x2="7" y1="7" y2="7"></line>
    <line x1="2" x2="7" y1="17" y2="17"></line>
    <line x1="17" x2="22" y1="17" y2="17"></line>
    <line x1="17" x2="22" y1="7" y2="7"></line>
  </svg>
)

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const Tag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
    <path d="M7 7h.01"></path>
  </svg>
)

const ProjectBanner = ({projectUrl}) => {
  const canvasRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Create dot matrix effect for text
  const drawDotMatrix = useCallback((ctx, canvas) => {
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const text = "CINEMAPHILE"
    const dotSize = 3
    const dotGap = 1
    const gridSize = dotSize + dotGap

    ctx.fillStyle = "#09CE6B"

    // Position text in the center left of the canvas
    const startX = 20
    const startY = canvas.height / (2 * (window.devicePixelRatio || 1)) - 10

    // Draw each letter using dots
    let xPos = startX

    for (let i = 0; i < text.length; i++) {
      const letter = text[i]
      const letterPattern = getLetterPattern(letter)

      for (let y = 0; y < letterPattern.length; y++) {
        const row = letterPattern[y]
        for (let x = 0; x < row.length; x++) {
          if (row[x] === 1) {
            ctx.beginPath()
            ctx.arc(xPos + x * gridSize, startY + y * gridSize, dotSize / 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Move to the next letter position
      xPos += (letterPattern[0].length + 1) * gridSize
    }
  }, [])

  // Define dot patterns for each letter
  function getLetterPattern(letter) {
    const patterns = {
      C: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      N: [
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
      ],
      E: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
      ],
      M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      A: [
        [0, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
      P: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
      ],
      H: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
      L: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
    }

    return (
      patterns[letter] || [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]
    )
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      drawDotMatrix(ctx, canvas)
    }

    setDimensions()
    window.addEventListener("resize", setDimensions)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("resize", setDimensions)
    }
  }, [drawDotMatrix])

  return (
    <div className=" rounded-2xl relative w-full h-[450px]   overflow-hidden bg-black  mb-10 ">
      {/* Background with film strip effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-8 bg-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-black"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute w-8 h-full bg-black" style={{ left: `${i * 5}%` }}></div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

      {/* Animated film cells */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-md bg-gray-800/50 border border-gray-700/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center h-full px-8 md:px-16 z-20">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="relative h-16 w-full max-w-md">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
            />
            {!isLoaded && <div className="h-10 w-48 bg-gray-800 animate-pulse rounded"></div>}
          </div>

          {/* Tagline */}
          
          <h2 className="text-white/90 text-xl md:text-2xl font-serif font-light max-w-md">
            Discover, rate, and bookmark your favorite films
          </h2>
         
        

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 text-[#09CE6B] bg-[#09CE6B]/10 px-3 py-1.5 rounded-full">
              <Film />
              <span className="text-sm font-medium">Browse Films</span>
            </div>
            <div className="flex items-center gap-2 text-[#09CE6B] bg-[#09CE6B]/10 px-3 py-1.5 rounded-full">
              <Star />
              <span className="text-sm font-medium">Write Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-[#09CE6B] bg-[#09CE6B]/10 px-3 py-1.5 rounded-full">
              <Clock />
              <span className="text-sm font-medium">Track Watchlist</span>
            </div>
            <div className="flex items-center gap-2 text-[#09CE6B] bg-[#09CE6B]/10 px-3 py-1.5 rounded-full">
              <Tag />
              <span className="text-sm font-medium">Personalized Recommendations</span>
            </div>
            {/* CTA Button */}
          </div>
         <div>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white  text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Check Live
              </a>
            </div>
        </div>
         
      </div>

      {/* CSS for animations */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectBanner

