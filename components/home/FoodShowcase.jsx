"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    emoji: "🍕",
    name: "Signature Pizza",
    persianName: "پیتزای اختصاصی",
    description: "خمیر تازه، پنیر کش‌دار و ترکیبی که خودت انتخاب می‌کنی.",
    price: "از ۲۴۹٬۰۰۰ تومان",
    gradient: "from-purple-600/30 via-fuchsia-500/10 to-transparent",
    glow: "bg-purple-500/20",
  },
  {
    emoji: "🍔",
    name: "Future Burger",
    persianName: "برگر آینده",
    description: "یک برگر کاملاً شخصی با انتخاب نان، گوشت، پنیر و سس.",
    price: "از ۲۱۹٬۰۰۰ تومان",
    gradient: "from-blue-600/30 via-cyan-500/10 to-transparent",
    glow: "bg-blue-500/20",
  },
  {
    emoji: "🥪",
    name: "Custom Sandwich",
    persianName: "ساندویچ اختصاصی",
    description: "مواد مورد علاقه‌ات را انتخاب کن و ترکیب مخصوص خودت را بساز.",
    price: "از ۱۸۹٬۰۰۰ تومان",
    gradient: "from-fuchsia-600/30 via-purple-500/10 to-transparent",
    glow: "bg-fuchsia-500/20",
  },
];

export default function FoodShowcase() {
  return (
    <section className="relative overflow-hidden px-5 py-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/50 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            انتخاب کن · شخصی‌سازی کن · سفارش بده
          </div>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            چیزی که دوست داری
            <br />
            <span className="gradient-text">
              خودت بساز
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/45 sm:text-base">
            OmFood فقط یک منوی معمولی نیست.
            اینجا می‌توانی غذای خودت را همان‌طور که دوست داری طراحی کنی.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.035]
                backdrop-blur-2xl
              "
            >

              {/* Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-70`}
              />

              {/* Glow */}
              <div
                className={`absolute -right-20 -top-20 h-52 w-52 rounded-full ${product.glow} blur-[80px] transition duration-700 group-hover:scale-150`}
              />

              <div className="relative p-7">

                {/* Food visual */}
                <div className="relative mx-auto flex h-64 items-center justify-center">

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      flex
                      h-44
                      w-44
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.06]
                      text-[100px]
                      shadow-[0_30px_80px_rgba(0,0,0,.35)]
                      backdrop-blur-xl
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {product.emoji}

                    <div className="absolute inset-0 rounded-full bg-white/5 blur-xl" />
                  </motion.div>

                  {/* Floating particles */}
                  <motion.span
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute left-8 top-12 text-sm text-white/30"
                  >
                    ✦
                  </motion.span>

                  <motion.span
                    animate={{
                      y: [0, 12, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute right-8 bottom-10 text-xs text-white/30"
                  >
                    ✧
                  </motion.span>

                </div>

                {/* Product info */}
                <div className="mt-2">

                  <div className="text-xs font-medium tracking-[0.2em] text-white/30">
                    {product.name}
                  </div>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {product.persianName}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-white/45">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm font-bold text-white/70">
                      {product.price}
                    </span>

                    <Link href="/builder">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-2.5
                          text-xs
                          font-bold
                          text-white
                          transition
                          hover:bg-white/10
                        "
                      >
                        بساز
                        <span>←</span>
                      </motion.span>
                    </Link>

                  </div>

                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-7
              py-4
              text-sm
              font-bold
              text-white/80
              backdrop-blur-xl
              transition
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            مشاهده همه محصولات
            <span>←</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
                      }
