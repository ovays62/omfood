"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden galaxy-bg flex items-center">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-right"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
          >
            <Sparkles size={16} />
            تجربه‌ای متفاوت از سفارش غذا
          </motion.div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            غذای خودت را
            <br />
            <span className="gradient-text">
              خودت بساز
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60 lg:mx-0">
            در OmFood غذای مورد علاقه‌ات را انتخاب کن،
            مواد اولیه را تغییر بده و سفارش خودت را بساز.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <Link href="/builder">
              <motion.div
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex cursor-pointer items-center justify-center gap-3"
              >
                شروع ساخت غذا
                <ArrowRight size={20} />
              </motion.div>
            </Link>

            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex cursor-pointer items-center justify-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-7 py-3.5 text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                <ShoppingBag size={20} />
                مشاهده منو
              </motion.div>
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">

            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="mt-1 text-xs text-white/40">
                مواد اولیه
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold">3D</div>
              <div className="mt-1 text-xs text-white/40">
                تجربه تعاملی
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold">∞</div>
              <div className="mt-1 text-xs text-white/40">
                ترکیب غذا
              </div>
            </div>

          </div>

        </motion.div>

        {/* RIGHT — FOOD VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
          className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center"
        >

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-purple-600/30 blur-[100px]" />

          {/* Food Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateY: [-4, 4, -4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative flex h-72 w-72 items-center justify-center rounded-[40px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl"
          >

            <div className="text-center">

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
                className="text-8xl"
              >
                🍕
              </motion.div>

              <div className="mt-5 text-sm font-semibold text-white/70">
                Build your perfect meal
              </div>

            </div>

          </motion.div>

          {/* Floating Ingredient Cards */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="glass absolute left-4 top-10 rounded-2xl px-4 py-3 text-sm"
          >
            🧀 Cheese
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity
            }}
            className="glass absolute bottom-12 right-2 rounded-2xl px-4 py-3 text-sm"
          >
            🍄 Mushroom
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
          }
