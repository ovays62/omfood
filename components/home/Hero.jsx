"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const foods = [
  {
    emoji: "🍕",
    title: "پیتزای اختصاصی",
    description: "مواد اولیه را خودت انتخاب کن",
    color: "from-purple-500/30 to-pink-500/20",
  },
  {
    emoji: "🍔",
    title: "برگر رویایی",
    description: "برگر خودت را از صفر بساز",
    color: "from-blue-500/30 to-cyan-500/20",
  },
  {
    emoji: "🥪",
    title: "ساندویچ ویژه",
    description: "ترکیب مخصوص خودت را بساز",
    color: "from-fuchsia-500/30 to-purple-500/20",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-28 pb-20">

      {/* Ambient lights */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero content */}
        <div className="flex min-h-[70vh] items-center justify-center text-center">

          <div className="max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              نسل جدید سفارش غذای شخصی
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-8xl"
            >
              <span className="gradient-text">
                غذای آینده
              </span>

              <br />

              <span className="text-white">
                را خودت بساز
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg md:text-xl"
            >
              یک تجربه متفاوت از فست‌فود؛
              غذای خودت را انتخاب کن، مواد اولیه را
              شخصی‌سازی کن و سفارش بده.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >

              <Link
                href="/builder"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-900/30 transition duration-300 hover:scale-105"
              >
                <span className="relative z-10">
                  🍕 ساخت غذای من
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                href="/products"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                مشاهده منو
              </Link>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-8 text-center sm:gap-14"
            >

              <div>
                <div className="text-2xl font-black text-white">
                  100%
                </div>
                <div className="mt-1 text-xs text-white/40">
                  شخصی‌سازی
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <div className="text-2xl font-black text-white">
                  3D
                </div>
                <div className="mt-1 text-xs text-white/40">
                  تجربه تعاملی
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <div className="text-2xl font-black text-white">
                  AI
                </div>
                <div className="mt-1 text-xs text-white/40">
                  هوشمند
                </div>
              </div>

            </motion.div>

          </div>
        </div>

        {/* Food cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {foods.map((food, index) => (
            <motion.div
              key={food.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${food.color} p-7 backdrop-blur-2xl`}
            >

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition duration-500 group-hover:scale-150" />

              <div className="relative">

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-4xl backdrop-blur-xl">
                  {food.emoji}
                </div>

                <h2 className="text-xl font-black text-white">
                  {food.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {food.description}
                </p>

                <Link
                  href="/builder"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/80 transition group-hover:text-white"
                >
                  شروع ساخت
                  <span className="transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pb-10 pt-20 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-white/20">
            OMFOOD · BUILD YOUR PERFECT FOOD
          </p>
        </motion.div>

      </div>
    </section>
  );
              }
