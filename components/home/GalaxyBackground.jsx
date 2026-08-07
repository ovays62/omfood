"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 180 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      id: i,
      top: Math.random() * 65,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 2 + 2,
    }));
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-50 overflow-hidden bg-[#02010a]" />
    );
  }

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-50
        overflow-hidden
        bg-[#02010a]
      "
    >
      {/* =========================================================
          DEEP SPACE
      ========================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,33,182,.18),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,.12),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(168,85,247,.12),transparent_30%)]" />

      {/* =========================================================
          AURORA 1
      ========================================================== */}

      <motion.div
        animate={{
          x: ["-12%", "8%", "-5%", "-12%"],
          y: ["-3%", "5%", "-2%", "-3%"],
          rotate: [-4, 2, -3, -4],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[5%]
          h-[38%]
          w-[140%]
          rotate-[-4deg]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,.22),rgba(59,130,246,.13)_30%,rgba(168,85,247,.08)_50%,transparent_72%)]
          blur-[70px]
        "
      />

      {/* =========================================================
          AURORA 2
      ========================================================== */}

      <motion.div
        animate={{
          x: ["10%", "-5%", "12%", "10%"],
          y: ["2%", "-4%", "4%", "2%"],
          rotate: [5, -3, 4, 5],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 31,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-30%]
          top-[15%]
          h-[32%]
          w-[130%]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,.12),rgba(6,182,212,.13)_25%,rgba(99,102,241,.13)_45%,transparent_72%)]
          blur-[80px]
        "
      />

      {/* =========================================================
          AURORA RIBBONS
      ========================================================== */}

      <motion.div
        animate={{
          x: ["-8%", "12%", "-4%", "-8%"],
          rotate: [-8, -3, -10, -8],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[18%]
          h-32
          w-[120%]
          rounded-[50%]
          bg-gradient-to-r
          from-transparent
          via-cyan-400/10
          to-transparent
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: ["5%", "-12%", "8%", "5%"],
          rotate: [8, 2, 10, 8],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[28%]
          h-40
          w-[120%]
          rounded-[50%]
          bg-gradient-to-r
          from-transparent
          via-purple-400/10
          to-transparent
          blur-3xl
        "
      />

      {/* =========================================================
          NEBULA
      ========================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 0.98, 1],
          opacity: [0.35, 0.5, 0.3, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(168,85,247,.12),rgba(79,70,229,.07)_35%,transparent_70%)]
          blur-[90px]
        "
      />

      {/* =========================================================
          STARS
      ========================================================== */}

      <div className="absolute inset-0">

        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{
              opacity: star.opacity,
              scale: 1,
            }}
            animate={{
              opacity: [
                star.opacity,
                Math.min(star.opacity + 0.45, 1),
                star.opacity,
              ],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow:
                star.size > 1.8
                  ? "0 0 8px rgba(255,255,255,.8), 0 0 18px rgba(129,140,248,.35)"
                  : "0 0 5px rgba(255,255,255,.5)",
            }}
          />
        ))}

      </div>

      {/* =========================================================
          LARGE STARS
      ========================================================== */}

      {[
        [12, 22],
        [82, 16],
        [67, 35],
        [27, 62],
        [91, 72],
        [48, 82],
        [8, 88],
      ].map(([left, top], index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [0.8, 1.15, 0.8],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
        >
          <div
            className="
              relative
              h-3
              w-3
              rotate-45
              bg-white
              shadow-[0_0_12px_white,0_0_30px_rgba(129,140,248,.9)]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-10
              w-[2px]
              -translate-x-1/2
              -translate-y-1/2
              bg-gradient-to-b
              from-transparent
              via-white
              to-transparent
              opacity-70
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[2px]
              w-10
              -translate-x-1/2
              -translate-y-1/2
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-70
            "
          />
        </motion.div>
      ))}

      {/* =========================================================
          SHOOTING STARS
      ========================================================== */}

      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, -420],
            y: [0, 300],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeOut",
          }}
          className="absolute h-[2px] w-40"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            transform: "rotate(35deg)",
          }}
        >
          <div
            className="
              h-full
              w-full
              rounded-full
              bg-gradient-to-l
              from-transparent
              via-white
              to-cyan-300
              shadow-[0_0_12px_white,0_0_25px_rgba(34,211,238,.8)]
            "
          />
        </motion.div>
      ))}

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[18%]
          top-[40%]
          h-2
          w-2
          rounded-full
          bg-cyan-300
          shadow-[0_0_15px_cyan]
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[18%]
          top-[48%]
          h-1.5
          w-1.5
          rounded-full
          bg-fuchsia-300
          shadow-[0_0_15px_rgba(232,121,249,.9)]
        "
      />

      {/* =========================================================
          VIGNETTE
      ========================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,1,10,.25)_70%,rgba(2,1,10,.75)_100%)]
        "
      />

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-[#05020d]
          via-[#05020d]/70
          to-transparent
        "
      />
    </div>
  );
      }
