"use client"

import { JetBrains_Mono, Orbitron } from "next/font/google"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

export default function Loading() {
  const [loadingStage, setLoadingStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [systemMessages, setSystemMessages] = useState<string[]>([])
  const [memoryBlocks, setMemoryBlocks] = useState<boolean[]>(new Array(32).fill(false))

  const loadingStages = [
    "Initializing debugger environment...",
    "Loading assembly modules...",
    "Allocating memory segments...",
    "Parsing symbol table...",
    "Setting up breakpoints...",
    "Configuring registers...",
    "Starting debug session...",
  ]

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 3 + 1
      })
    }, 150)

    // Loading stages
    const stageInterval = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev < loadingStages.length - 1) {
          return prev + 1
        }
        clearInterval(stageInterval)
        return prev
      })
    }, 1200)

    // System messages
    const messageInterval = setInterval(() => {
      const messages = [
        "0x1000: MOV EAX, 0x00000001",
        "0x1004: PUSH EBP",
        "0x1005: MOV EBP, ESP",
        "0x1007: SUB ESP, 0x10",
        "0x100A: CALL 0x2000",
        "0x100F: ADD ESP, 0x10",
        "0x1012: POP EBP",
        "0x1013: RET",
      ]

      setSystemMessages((prev) => {
        const newMessage = messages[Math.floor(Math.random() * messages.length)]
        const updated = [...prev, newMessage]
        return updated.length > 6 ? updated.slice(-6) : updated
      })
    }, 800)

    // Memory blocks animation
    const memoryInterval = setInterval(() => {
      setMemoryBlocks((prev) => {
        const newBlocks = [...prev]
        const randomIndex = Math.floor(Math.random() * newBlocks.length)
        newBlocks[randomIndex] = !newBlocks[randomIndex]
        return newBlocks
      })
    }, 300)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stageInterval)
      clearInterval(messageInterval)
      clearInterval(memoryInterval)
    }
  }, [])

  return (
    <div
      className={`${jetbrainsMono.variable} ${orbitron.variable} min-h-screen bg-zinc-950 text-green-400 font-mono overflow-hidden relative flex items-center justify-center`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background"></div>
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanlines"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="mb-4 sm:mb-6"
          >
            <Image
              src="/logo.webp"
              alt="Assemble Debugger"
              width={60}
              height={60}
              className="mx-auto opacity-90 sm:w-20 sm:h-20"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${orbitron.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-2`}
          >
            ASSEMBLE DEBUGGER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 text-sm sm:text-base"
          >
            v2.1.4 - Initializing Debug Environment
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Loading Panel */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 shadow-2xl"
          >
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm text-zinc-400">LOADING PROGRESS</span>
                <span className="text-xs sm:text-sm text-green-400 font-mono">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2 sm:h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* Current Loading Stage */}
            <div className="mb-6">
              <div className="text-xs sm:text-sm text-zinc-500 mb-2 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-3 h-3 border-2 border-green-400 border-t-transparent rounded-full"
                />
                STATUS
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={loadingStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm sm:text-base text-green-400"
                >
                  {loadingStages[loadingStage]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* System Messages */}
            <div>
              <div className="text-xs sm:text-sm text-zinc-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                SYSTEM LOG
              </div>
              <div className="bg-zinc-950 rounded p-3 h-32 sm:h-40 overflow-hidden">
                <AnimatePresence>
                  {systemMessages.map((message, index) => (
                    <motion.div
                      key={`${message}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs sm:text-sm text-zinc-400 mb-1 font-mono"
                    >
                      <span className="text-blue-400">$</span> {message}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Memory Visualization */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 shadow-2xl"
          >
            <div className="text-xs sm:text-sm text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              MEMORY ALLOCATION
            </div>

            {/* Memory Grid */}
            <div className="grid grid-cols-8 gap-1 sm:gap-2 mb-6">
              {memoryBlocks.map((active, index) => (
                <motion.div
                  key={index}
                  className={`aspect-square rounded border transition-all duration-300 ${
                    active
                      ? "bg-green-400 border-green-300 shadow-sm shadow-green-400/50"
                      : "bg-zinc-800 border-zinc-700"
                  }`}
                  animate={{
                    scale: active ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Memory Stats */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Allocated:</span>
                <span className="text-green-400 font-mono">{memoryBlocks.filter(Boolean).length * 64}KB</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Free:</span>
                <span className="text-blue-400 font-mono">
                  {(memoryBlocks.length - memoryBlocks.filter(Boolean).length) * 64}KB
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Total:</span>
                <span className="text-zinc-300 font-mono">{memoryBlocks.length * 64}KB</span>
              </div>
            </div>

            {/* CPU Usage Simulation */}
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <div className="text-xs sm:text-sm text-zinc-500 mb-2">CPU USAGE</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-600 to-red-500 rounded-full"
                    animate={{
                      width: ["20%", "80%", "45%", "90%", "30%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <motion.span
                  className="text-xs font-mono text-yellow-400"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {Math.floor(Math.random() * 40 + 30)}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2">
            <span className="text-green-400">debugger@assemble:</span>
            <span className="text-blue-400">~$</span>
            <span className="text-zinc-400">loading...</span>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-4 bg-green-400 ml-1"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .grid-background {
          background-image: 
            linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          width: 100%;
          height: 100%;
          animation: grid-move 25s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(34, 197, 94, 0.03) 2px,
            rgba(34, 197, 94, 0.03) 4px
          );
          width: 100%;
          height: 100%;
          animation: scanlines 2s linear infinite;
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  )
}
