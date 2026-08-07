"use client";

import { motion } from "framer-motion";

export default function GalaxyBackground() {
  const stars = Array.from({ length: 80 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden galaxy-bg">

      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            opacity:0.2,
            x: Math.random()*window.innerWidth,
            y: Math.random()*window.innerHeight
          }}
          animate={{
            opacity:[0.2,1,0.2]
          }}
          transition={{
            duration:2+Math.random()*3,
            repeat:Infinity
          }}
        />
      ))}


      <div className="
        absolute
        top-[-200px]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-600/30
        blur-[150px]
      "/>


      <div className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[150px]
      "/>

    </div>
  );
}
