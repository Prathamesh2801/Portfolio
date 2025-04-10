

import { useState, useEffect } from "react"

const TimerGameBanner = ({projectUrl}) => {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [difficulty, setDifficulty] = useState("easy")
  const [glitchEffect, setGlitchEffect] = useState(false)

  // Difficulty settings
  const difficulties = {
    easy: { time: 1, color: "from-cyan-400 to-cyan-300" },
    medium: { time: 5, color: "from-cyan-500 to-cyan-400" },
    hard: { time: 10, color: "from-cyan-600 to-cyan-500" },
    pro: { time: 15, color: "from-cyan-700 to-cyan-600" },
  }

  // Handle timer logic
  useEffect(() => {
    let interval

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => {
          const newTime = prev + 0.01
          // Create glitch effect when approaching target time
          const targetTime = difficulties[difficulty].time
          if (Math.abs(newTime - targetTime) < 0.5) {
            setGlitchEffect(true)
            setTimeout(() => setGlitchEffect(false), 100)
          }

          // Stop at 1.5x target time
          if (newTime >= targetTime * 1.5) {
            setIsRunning(false)
            return targetTime * 1.5
          }
          return newTime
        })
      }, 10)
    }

    return () => clearInterval(interval)
  }, [isRunning, difficulty])

  // Format time display
  const formatTime = (time) => {
    return time.toFixed(2)
  }

  // Toggle timer
  const toggleTimer = () => {
    if (!isRunning) {
      setTimer(0)
      setIsRunning(true)
    } else {
      setIsRunning(false)
    }
  }

  // Change difficulty
  const changeDifficulty = (diff) => {
    if (!isRunning) {
      setDifficulty(diff)
      setTimer(0)
    }
  }

  return (
    <div
      className={`relative w-full h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-teal-900 shadow-xl ${glitchEffect ? "animate-glitch" : ""}`}
    >
      {/* Digital circuit pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDlkNWYwIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDBoMjBNMjAgNDBoMjBNMCAwdjQwTTQwIDB2NDBNMTAgMHY0ME0zMCAwdjQwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        {/* Title with tech effect */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-cyan-300 tracking-wider mb-1 relative inline-block">
            THE <span className="text-cyan-400">ALMOST</span> FINAL COUNTDOWN
            <div className="absolute -inset-1 border border-cyan-500/30 rounded-sm -skew-x-12 -z-10"></div>
          </h1>
          <p className="text-cyan-200/70 text-sm">Stop the timer once you estimate that time is (almost) up</p>
        </div>

        {/* Timer display */}
        <div className="mb-8 relative">
          <div className="text-6xl font-mono font-bold text-cyan-300 bg-gray-900/50 px-6 py-3 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
            {formatTime(timer)}
            <span className="text-xs absolute top-1 right-1 text-cyan-500/70">sec</span>
          </div>
          <div className="absolute -inset-1 border border-cyan-400/20 rounded-lg"></div>
        </div>

        {/* Difficulty selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-2xl">
          {Object.entries(difficulties).map(([key, value]) => (
            <button
              key={key}
              onClick={() => changeDifficulty(key)}
              className={`relative overflow-hidden rounded-lg transition-all ${difficulty === key
                  ? `bg-gradient-to-r ${value.color} text-gray-900 shadow-lg shadow-cyan-500/20`
                  : "bg-gray-800/50 text-cyan-300 border border-cyan-500/30"
                } p-4 text-center`}
            >
              <div className="font-bold uppercase mb-1">
                {key === "easy"
                  ? "EASY"
                  : key === "medium"
                    ? "NOT EASY"
                    : key === "hard"
                      ? "GETTING TOUGH"
                      : "PROS ONLY"}
              </div>
              <div className="text-sm">
                {value.time} {value.time === 1 ? "second" : "seconds"}
              </div>

              {/* Animated background for selected difficulty */}
              {difficulty === key && (
                <div className="absolute inset-0 -z-10 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:8px_8px]"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Start/Stop button */}
        <div className="flex gap-5 items-center">
        <button
          onClick={toggleTimer}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${isRunning ? "bg-red-500 hover:bg-red-600 text-white" : "bg-cyan-500 hover:bg-cyan-600 text-gray-900"
            }`}
        >
          {isRunning ? "STOP TIMER" : "START CHALLENGE"}
        </button>

        {/* Status indicator */}
        <div className="  absolute bottom-14 left-1/2 transform -translate-x-1/2 text-cyan-400/70  text-sm">
          Timer {isRunning ? "active " : "inactive"}
        </div>

        {/* CTA Button */}
        <div>
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
        {/* Tech stack */}
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-gray-900/50 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/30">
            React
          </span>
          <span className="bg-gray-900/50 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/30">
            Tailwind
          </span>
          <span className="bg-gray-900/50 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/30">
            Framer Motion
          </span>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx="true">{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.2s linear;
        }
      `}</style>
    </div>
  )
}

export default TimerGameBanner
