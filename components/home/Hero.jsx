"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 pt-24">

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/70 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          نسل جدید سفارش غذای هوشمند
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tight"
        >
          غذای آینده
          <br />

          <span className="gradient-text">
            را خودت بساز
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="max-w-2xl mx-auto mt-8 text-lg md:text-2xl leading-9 text-white/60"
        >
          یک تجربه فست‌فود سه‌بعدی، هوشمند و کاملاً شخصی‌سازی‌شده.
          مواد اولیه را انتخاب کن و غذای مخصوص خودت را بساز.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >

          <Link
            href="/builder"
            className="
              group
              relative
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              text-white
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              shadow-[0_0_40px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_60px_rgba(124,58,237,0.55)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <span className="relative z-10">
              🍕 ساخت غذای من
            </span>

            <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </Link>

          <Link
            href="/products"
            className="
              glass
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              text-white/90
              border
              border-white/10
              hover:border-white/25
              hover:bg-white/10
              hover:scale-105
              transition-all
              duration-300
            "
          >
            مشاهده منو →
          </Link>

        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-3 max-w-2xl mx-auto mt-20 border-t border-white/10 pt-8"
        >

          <div>
            <div className="text-2xl md:text-3xl font-black">۳D</div>
            <div className="text-xs md:text-sm text-white/40 mt-2">
              تجربه سه‌بعدی
            </div>
          </div>

          <div className="border-x border-white/10">
            <div className="text-2xl md:text-3xl font-black">∞</div>
            <div className="text-xs md:text-sm text-white/40 mt-2">
              شخصی‌سازی
            </div>
          </div>

          <div>
            <div className="text-2xl md:text-3xl font-black">AI</div>
            <div className="text-xs md:text-sm text-white/40 mt-2">
              پیشنهاد هوشمند
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
          }
