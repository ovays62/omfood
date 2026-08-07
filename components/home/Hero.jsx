"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5">

      {/* Ambient Lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 py-28 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-right"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-purple-400" />
            نسل جدید سفارش غذا
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            غذای آینده
            <br />

            <span className="gradient-text">
              را بساز
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg lg:mx-0"
          >
            در OmFood غذای خودت را از صفر بساز.
            مواد اولیه را انتخاب کن، ظاهر غذا را تغییر بده
            و یک تجربه متفاوت از سفارش فست‌فود داشته باش.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >

            <Link href="/builder">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -4,
                }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex cursor-pointer items-center justify-center gap-3 shadow-[0_0_40px_rgba(124,58,237,.25)]"
              >
                🍕 ساخت غذای من
                <ArrowRight size={19} />
              </motion.div>
            </Link>

            <Link href="/products">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -4,
                }}
                whileTap={{ scale: 0.97 }}
                className="glass flex cursor-pointer items-center justify-center gap-3 rounded-[18px] px-7 py-3.5 text-white/90"
              >
                <ShoppingBag size={19} />
                مشاهده منو
              </motion.div>
            </Link>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-7 lg:mx-0"
          >

            <div>
              <div className="text-2xl font-black sm:text-3xl">
                50+
              </div>

              <div className="mt-1 text-xs text-white/40 sm:text-sm">
                مواد اولیه
              </div>
            </div>

            <div className="border-x border-white/10">
              <div className="text-2xl font-black sm:text-3xl">
                3D
              </div>

              <div className="mt-1 text-xs text-white/40 sm:text-sm">
                تجربه تعاملی
              </div>
            </div>

            <div>
              <div className="text-2xl font-black sm:text-3xl">
                ∞
              </div>

              <div className="mt-1 text-xs text-white/40 sm:text-sm">
                ترکیب ممکن
              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: 8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
          className="relative mx-auto flex h-[430px] w-full max-w-[520px] items-center justify-center"
        >

          {/* Main Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute h-72 w-72 rounded-full bg-purple-600 blur-[110px]"
          />

          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px] rounded-full border border-purple-400/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-cyan-400/10"
          />

          {/* Food Card */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotateY: [-5, 5, -5],
              rotateX: [2, -2, 2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="glass relative z-10 flex h-72 w-72 cursor-pointer items-center justify-center rounded-[45px] shadow-[0_25px_100px_rgba(0,0,0,.5)] sm:h-80 sm:w-80"
          >

            <div className="text-center">

              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[110px] drop-shadow-[0_20px_30px_rgba(0,0,0,.4)]"
              >
                🍕
              </motion.div>

              <div className="mt-4 text-sm font-semibold text-white/60">
                غذای خودت را بساز
              </div>

              <div className="mt-1 flex items-center justify-center gap-1 text-xs text-purple-300">
                <Zap size={13} />
                Interactive Food Builder
              </div>

            </div>

          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="glass absolute left-0 top-10 z-20 rounded-2xl px-4 py-3 text-xs shadow-xl sm:left-3"
          >
            <div className="text-white/40">
              مواد انتخابی
            </div>

            <div className="mt-1 font-bold">
              🧀 پنیر + 🍄 قارچ
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="glass absolute bottom-10 right-0 z-20 rounded-2xl px-4 py-3 text-xs shadow-xl sm:right-3"
          >
            <div className="text-white/40">
              قیمت نهایی
            </div>

            <div className="mt-1 font-bold text-cyan-300">
              ۲۴۹٬۰۰۰ تومان
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
          }
