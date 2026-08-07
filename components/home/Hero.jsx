"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-28 pb-16 text-white">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-right">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm text-white/80 shadow-2xl backdrop-blur-xl"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              تجربه‌ای متفاوت از فست‌فود
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              غذای
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                آینده
              </span>

              <br />

              <span className="text-white">
                را بساز
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg lg:mx-0"
            >
              یک تجربه فست‌فود کاملاً متفاوت.
              غذای خودت را انتخاب کن، مواد اولیه را شخصی‌سازی کن
              و سفارش خودت را بساز.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >

              <Link
                href="/builder"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 px-8 py-4 font-bold shadow-[0_0_40px_rgba(168,85,247,0.25)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  🍕
                  ساخت غذای من
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/products"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 font-semibold text-white/90 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-[1.03]"
              >
                مشاهده منو
              </Link>

            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex justify-center gap-8 border-t border-white/10 pt-7 lg:justify-start"
            >

              <div>
                <div className="text-xl font-black text-white">
                  100%
                </div>
                <div className="mt-1 text-xs text-white/40">
                  شخصی‌سازی
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <div className="text-xl font-black text-white">
                  3D
                </div>
                <div className="mt-1 text-xs text-white/40">
                  تجربه تعاملی
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <div className="text-xl font-black text-white">
                  ⚡
                </div>
                <div className="mt-1 text-xs text-white/40">
                  سریع و هوشمند
                </div>
              </div>

            </motion.div>

          </div>


          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[520px]"
          >

            {/* Outer Glow */}
            <div className="absolute inset-10 rounded-full bg-fuchsia-500/20 blur-[100px]" />

            {/* Main Glass Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl"
            >

              {/* Top Bar */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40">
                    OMFOOD EXPERIENCE
                  </p>

                  <h3 className="mt-1 text-lg font-bold">
                    غذای اختصاصی شما
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  ● آنلاین
                </div>
              </div>


              {/* Food Preview */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-purple-950/80 via-slate-950 to-cyan-950/70">

                {/* Rings */}
                <div className="absolute h-[72%] w-[72%] rounded-full border border-purple-400/10" />
                <div className="absolute h-[58%] w-[58%] rounded-full border border-cyan-400/10" />

                {/* Glow */}
                <div className="absolute h-52 w-52 rounded-full bg-orange-500/20 blur-[80px]" />

                {/* Food */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 text-[150px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] sm:text-[190px]"
                >
                  🍕
                </motion.div>

                {/* Floating Ingredients */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute left-[16%] top-[20%] text-3xl"
                >
                  🧀
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute right-[15%] top-[28%] text-3xl"
                >
                  🍅
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-[20%] left-[22%] text-3xl"
                >
                  🌿
                </motion.div>

              </div>


              {/* Bottom Info */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-white/40">
                    مواد انتخابی
                  </p>
                  <p className="mt-1 font-bold">
                    ۸ مواد اولیه
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-white/40">
                    قیمت نهایی
                  </p>
                  <p className="mt-1 font-bold text-cyan-300">
                    قابل محاسبه
                  </p>
                </div>

              </div>

            </motion.div>


            {/* Floating Notification */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                  ✨
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    انتخاب هوشمند
                  </p>
                  <p className="text-sm font-bold">
                    غذای خودت را بساز
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Floating Price */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute -right-3 top-20 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-xs text-white/40">
                قیمت
              </p>

              <p className="mt-1 font-black text-cyan-300">
                Live
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em]">
          SCROLL
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

    </section>
  );
                }
