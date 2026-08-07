"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 4,
}));

const shootingStars = [
  { top: "14%", left: "8%", delay: 1, duration: 3.5 },
  { top: "28%", left: "72%", delay: 5, duration: 4 },
  { top: "52%", left: "25%", delay: 8, duration: 3 },
  { top: "70%", left: "82%", delay: 11, duration: 4.5 },
];

export default function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#02010a]">

      {/* =====================================================
          BASE SPACE
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#26105c_0%,#08051c_35%,#02010a_75%)]" />


      {/* =====================================================
          PURPLE NEBULA
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-[-15%] h-[600px] w-[600px] rounded-full bg-purple-700/30 blur-[150px]"
      />


      {/* =====================================================
          CYAN NEBULA
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-[20%] h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[150px]"
      />


      {/* =====================================================
          AURORA 1
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-10%", "15%", "-10%"],
          rotate: [-4, 4, -4],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[8%] h-[180px] w-[130%] rounded-[50%] bg-gradient-to-r from-purple-600/0 via-fuchsia-400/30 to-cyan-400/0 blur-[55px]"
      />


      {/* =====================================================
          AURORA 2
      ====================================================== */}

      <motion.div
        animate={{
          x: ["10%", "-15%", "10%"],
          rotate: [5, -5, 5],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-20%] top-[18%] h-[150px] w-[140%] rounded-[50%] bg-gradient-to-r from-cyan-400/0 via-purple-400/25 to-fuchsia-500/0 blur-[60px]"
      />


      {/* =====================================================
          AURORA 3
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          skewX: [-5, 5, -5],
          opacity: [0.05, 0.22, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-25%] top-[30%] h-[120px] w-[150%] rounded-[50%] bg-gradient-to-r from-indigo-500/0 via-cyan-300/20 to-purple-500/0 blur-[70px]"
      />


      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="absolute inset-0">

        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{
              opacity: 0.2,
            }}
            animate={{
              opacity: [0.15, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          />
        ))}

      </div>


      {/* =====================================================
          SPECIAL BRIGHT STARS
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.7)]"
      />

      <motion.div
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.5, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute right-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_18px_5px_rgba(103,232,249,0.7)]"
      />


      {/* =====================================================
          SHOOTING STARS
      ====================================================== */}

      {shootingStars.map((star, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 280],
            y: [0, 180],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeOut",
          }}
          style={{
            top: star.top,
            left: star.left,
          }}
          className="absolute h-[2px] w-32 rotate-[32deg] bg-gradient-to-r from-transparent via-white to-cyan-300 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
        />
      ))}


      {/* =====================================================
          LARGE AURORA GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/10 via-cyan-400/20 to-fuchsia-600/10 blur-[120px]"
      />


      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)]" />


      {/* =====================================================
          TOP FADE
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

    </div>
  );
              }
