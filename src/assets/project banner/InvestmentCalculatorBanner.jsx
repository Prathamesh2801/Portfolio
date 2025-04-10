

import { useState, useEffect } from "react"
import { FaDollarSign, FaChartLine, FaCalculator } from "react-icons/fa"

const InvestmentCalculatorBanner = ({projectUrl}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true)

    // Animation reset for demo purposes
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 100)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#2bbb70_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Animated financial elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute text-green-400 opacity-20 transition-transform duration-[${3 + (i % 5)}s] ease-in-out`}
            style={{
              fontSize: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: isAnimating ? `translateY(-${100 + Math.random() * 300}px)` : "translateY(0)",
              transitionDuration: `${5 + Math.random() * 10}s`,
              transitionDelay: `${Math.random() * 2}s`,
            }}
          >
            {i % 3 === 0 ? "$" : i % 3 === 1 ? "%" : "+"}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full">
        {/* Left side - Logo and illustration */}
        <div className="w-1/3 flex items-center justify-center p-6">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
              <FaDollarSign className="text-6xl text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <FaChartLine className="text-2xl text-gray-900" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-green-300 rounded-full flex items-center justify-center animate-bounce">
              <FaCalculator className="text-xl text-gray-900" />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-2/3 flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            <span className="text-green-400">Investment</span> Calculator
          </h1>

          <p className="text-gray-300 mb-6 max-w-lg">
            A powerful tool to calculate and visualize your investment growth over time. Plan your financial future with
            precision and confidence.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
              React 18
            </span>
            <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
              TypeScript
            </span>
            <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
              Vite
            </span>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-sm font-medium mb-1">Initial Investment</div>
              <div className="text-white">Calculate returns based on your starting capital</div>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-sm font-medium mb-1">Compound Interest</div>
              <div className="text-white">See the power of compound growth over time</div>
            </div>
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
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  )
}

export default InvestmentCalculatorBanner
