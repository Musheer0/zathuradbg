"use client"

import { JetBrains_Mono, Orbitron } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

export default function NotFound() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentMemory, setCurrentMemory] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
 const [isMounted,setIsMounted] = useState(false);
  useEffect(() => {
    const lines = [
        "$ ./assemble-debugger --load program.asm",
        "Loading assembly program...",
        "✓ Program loaded successfully",
        "$ run",
        "Starting execution...",
      "✗ Segmentation fault at 0x00001337",
      "✗ Process terminated with exit code 404",
      "$ status",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < lines.length) {
        setTerminalLines((prev) => [...prev, lines[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 800)

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    const memoryInterval = setInterval(() => {
      setCurrentMemory((prev) => (prev + 1) % 16)
    }, 2000)

    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 5000)

    return () => {
      clearInterval(memoryInterval)
      clearInterval(glitchInterval)
    }
  }, []);

  //Hydration issu fix
  useEffect(()=>{
    setIsMounted(true)
  },[])
if(isMounted)
  return (
    <div
      className={`${jetbrainsMono.variable} ${orbitron.variable} min-h-screen bg-zinc-950 text-green-400 font-mono overflow-hidden relative`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background"></div>
      </div>

      {/* Glitch overlay */}
      <AnimatePresence>
        {glitchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20 pointer-events-none glitch-overlay"
          />
        )}
      </AnimatePresence>

      {/* Terminal Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-800 bg-zinc-900 px-3 sm:px-4 py-2 flex items-center justify-between relative"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Image src="/logo.webp" alt="Assemble Debugger" width={20} height={20} className="sm:w-6 sm:h-6" />
            </motion.div>
            <span className="text-zinc-400 text-xs sm:text-sm hidden sm:block">assemble-debugger v2.1.4</span>
            <span className="text-zinc-400 text-xs sm:hidden">debugger</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex text-xs text-zinc-500 font-mono items-center gap-1">
            <span className="animate-pulse">●</span> LIVE
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1 text-zinc-400 hover:text-green-400 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <div className="flex h-[calc(100vh-60px)] relative">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed left-0 top-[60px] bottom-0 w-80 bg-zinc-900 border-r border-zinc-800 z-50 lg:hidden overflow-y-auto"
              >
                <MemoryPanel currentMemory={currentMemory} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Memory/Register Panel */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block w-80 h-full min-h-screen border-r border-zinc-800 bg-zinc-900 overflow-y-auto"
        >
          <MemoryPanel currentMemory={currentMemory} />
        </motion.div>

        {/* Main Terminal Area */}
        <div className="flex-1 p-3 sm:p-6 overflow-y-auto bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Output */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1 sm:space-y-2 text-xs sm:text-sm mb-6 sm:mb-8"
            >
              {terminalLines
                .filter((line) => line && typeof line === "string")
                .map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`break-all ${
                      line && line.includes("$")
                        ? "text-zinc-500"
                        : line && line.includes("✓")
                          ? "text-green-400"
                          : line && line.includes("✗")
                            ? "text-red-400"
                            : line && (line.includes("Loading") || line.includes("Starting"))
                              ? "text-blue-400"
                              : "text-yellow-400"
                    }`}
                  >
                    {line}
                    {index === terminalLines.length - 1 && <span className="animate-pulse ml-1">_</span>}
                  </motion.div>
                ))}
            </motion.div>

            {/* Main 404 Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-center py-6 sm:py-12"
            >
              <div className="mb-6 sm:mb-8">
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="mb-4 sm:mb-6"
                >
                  <Image
                    src="/logo.webp"
                    alt="Assemble Debugger"
                    width={60}
                    height={60}
                    className="mx-auto opacity-80 sm:w-20 sm:h-20"
                  />
                </motion.div>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className={`${orbitron.className} text-3xl sm:text-4xl md:text-6xl font-black text-red-400 mb-3 sm:mb-4 tracking-wider glitch-text ${glitchActive ? "glitch-active" : ""}`}
                >
                  NOT FOUND
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-base sm:text-xl text-zinc-400 mb-2"
                >
                  Error Code: <span className="text-red-400 animate-pulse">0x404</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                  className="text-sm sm:text-base text-zinc-500 px-4"
                >
                  The requested memory address could not be resolved
                </motion.div>
              </div>

              {/* Assembly-style error output */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3 }}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 sm:p-6 text-left max-w-2xl mx-auto mb-6 sm:mb-8 shadow-2xl"
              >
                <div className="text-xs text-zinc-500 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                  STACK TRACE:
                </div>
                <div className="space-y-1 text-xs sm:text-sm overflow-x-auto">
                  {[
                    { addr: "0x00001337", cmd: "CALL page_not_found", error: true },
                    { addr: "0x00001338", cmd: "MOV EAX, 404", error: false },
                    { addr: "0x0000133D", cmd: "PUSH EAX", error: false },
                    { addr: "0x0000133E", cmd: "CALL display_error", error: false },
                    { addr: "0x00001343", cmd: "JMP return_home", error: true },
                  ].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3.2 + index * 0.1 }}
                      className={`${line.error ? "text-red-400" : "text-zinc-300"} hover:bg-zinc-800 px-2 py-1 rounded transition-colors whitespace-nowrap`}
                    >
                      {line.addr}: {line.cmd}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/"
                    className="block w-full sm:inline-block bg-green-600 hover:bg-green-700 text-black px-6 py-3 rounded font-semibold transition-all duration-300 shadow-lg text-center"
                  >
                    JMP HOME
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(75, 85, 99, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.history.back()}
                  className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-green-400 px-6 py-3 rounded font-semibold transition-all duration-300 border border-zinc-700 shadow-lg"
                >
                  POP STACK
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Terminal Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="mt-8 sm:mt-12 flex items-center gap-2 text-xs sm:text-sm"
            >
              <span className="text-green-400">debugger@assemble:</span>
              <span className="text-blue-400">~$</span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-4 sm:h-5 bg-green-400 ml-1"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-background {
          background-image: 
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }

        .register-line {
          transition: all 0.3s ease;
        }

        .register-line:hover {
          background-color: rgba(39, 39, 42, 0.5);
          padding: 2px 4px;
          border-radius: 4px;
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text.glitch-active::before,
        .glitch-text.glitch-active::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text.glitch-active::before {
          animation: glitch-1 0.3s ease-in-out;
          color: #ef4444;
          z-index: -1;
        }

        .glitch-text.glitch-active::after {
          animation: glitch-2 0.3s ease-in-out;
          color: #3b82f6;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 2px); }
          80% { transform: translate(-2px, -2px); }
        }

        .glitch-overlay {
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 0, 0, 0.1) 2px,
            rgba(255, 0, 0, 0.1) 4px
          );
          animation: glitch-overlay 0.2s ease-in-out;
        }

        @keyframes glitch-overlay {
          0% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
          75% { transform: translateX(-1px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

// Separate component for the memory panel to reduce code duplication
function MemoryPanel({ currentMemory }: { currentMemory: number }) {
  return (
    <div className="p-4">
      <div className="text-xs text-zinc-500 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        MEMORY DUMP
      </div>
      <div className="space-y-1 text-xs">
        {Array.from({ length: 16 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-2 sm:gap-4 transition-all duration-300 ${
              currentMemory === i ? "bg-zinc-800 text-green-300" : ""
            }`}
          >
            <span className="text-blue-400 text-xs">
              0x{(0x1000 + i * 16).toString(16).padStart(8, "0").toUpperCase()}
            </span>
            <span className="text-zinc-500 font-mono text-xs break-all">
              {Array.from({ length: 8 }, () =>
                Math.random() > 0.5
                  ? Math.floor(Math.random() * 256)
                      .toString(16)
                      .padStart(2, "0")
                  : "00",
              ).join(" ")}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-zinc-500 mb-4 mt-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
        REGISTERS
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-1 text-xs"
      >
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">EAX:</span>
          <span className="text-red-400 animate-pulse">0x00000404</span>
        </div>
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">EBX:</span>
          <span>0x00000000</span>
        </div>
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">ECX:</span>
          <span>0xDEADBEEF</span>
        </div>
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">EDX:</span>
          <span className="text-red-400 animate-pulse">0x00000404</span>
        </div>
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">ESP:</span>
          <span>0x7FFF0000</span>
        </div>
        <div className="flex justify-between register-line">
          <span className="text-yellow-400">EBP:</span>
          <span>0x7FFF0100</span>
        </div>
      </motion.div>
    </div>
  )
}
