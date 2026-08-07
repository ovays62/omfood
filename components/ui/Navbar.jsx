"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    label: "خانه",
    href: "/",
  },
  {
    label: "منو",
    href: "/products",
  },
  {
    label: "ساخت غذای من",
    href: "/builder",
    special: true,
  },
  {
    label: "سفارش‌های من",
    href: "/orders",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <>
      {/* =====================================================
          DESKTOP / MOBILE NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">

        <nav
          className="
            mx-auto
            flex
            h-[68px]
            max-w-7xl
            items-center
            justify-between
            rounded-[24px]
            border
            border-white/[0.10]
            bg-black/35
            px-4
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
            sm:h-[76px]
            sm:px-6
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="group relative flex items-center gap-3"
          >

            {/* Logo Icon */}

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-purple-500
                via-fuchsia-500
                to-cyan-400
                shadow-[0_0_30px_rgba(168,85,247,0.35)]
              "
            >

              <span className="relative z-10 text-xl">
                🍕
              </span>

              <motion.span
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
                  absolute
                  inset-y-0
                  w-8
                  rotate-12
                  bg-white/30
                  blur-md
                "
              />

            </motion.div>


            {/* Logo Text */}

            <div className="hidden sm:block">

              <div
                className="
                  bg-gradient-to-r
                  from-white
                  via-purple-200
                  to-cyan-200
                  bg-clip-text
                  text-xl
                  font-black
                  tracking-tight
                  text-transparent
                "
              >
                OmFood
              </div>

              <div className="text-[9px] font-medium tracking-[0.25em] text-white/35">
                FOOD OF THE FUTURE
              </div>

            </div>

          </Link>


          {/* =================================================
              DESKTOP MENU
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-3"
              >

                <span
                  className={`
                    relative z-10
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      item.special
                        ? "text-purple-200"
                        : "text-white/65 group-hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </span>


                {/* Hover Background */}

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    inset-0
                    -z-0
                    rounded-xl
                    bg-white/[0.06]
                  "
                />


                {/* Bottom Glow */}

                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-purple-400
                    to-cyan-400
                    shadow-[0_0_10px_rgba(168,85,247,0.8)]
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                />

              </Link>
            ))}

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center gap-2 sm:gap-3">


            {/* AI BUTTON */}

            <Link
              href="/ai"
              className="
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-purple-400/20
                bg-purple-500/10
                px-4
                py-2.5
                text-xs
                font-bold
                text-purple-200
                transition
                duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/20
                hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
                md:flex
              "
            >

              <span className="text-sm">
                ✨
              </span>

              OmAI

            </Link>


            {/* CART */}

            <Link
              href="/cart"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.05]
                transition
                duration-300
                hover:border-white/20
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
              "
              aria-label="سبد خرید"
            >

              <motion.span
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                }}
                className="text-lg"
              >
                🛒
              </motion.span>


              {/* Cart Counter */}

              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      bg-gradient-to-r
                      from-purple-500
                      to-cyan-400
                      px-1
                      text-[9px]
                      font-black
                      text-white
                    "
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>

            </Link>


            {/* LOGIN */}

            <Link
              href="/login"
              className="
                hidden
                rounded-xl
                border
                border-white/10
                bg-white/[0.05]
                px-5
                py-3
                text-xs
                font-bold
                text-white/80
                transition
                duration-300
                hover:bg-white/10
                hover:text-white
                sm:block
              "
            >
              ورود
            </Link>


            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.05]
                lg:hidden
              "
              aria-label="باز کردن منو"
              aria-expanded={mobileOpen}
            >

              <div className="relative h-5 w-5">

                <motion.span
                  animate={
                    mobileOpen
                      ? {
                          rotate: 45,
                          y: 8,
                        }
                      : {
                          rotate: 0,
                          y: 0,
                        }
                  }
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />

                <motion.span
                  animate={
                    mobileOpen
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 1,
                        }
                  }
                  className="
                    absolute
                    left-0
                    top-2
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />

                <motion.span
                  animate={
                    mobileOpen
                      ? {
                          rotate: -45,
                          y: -8,
                        }
                      : {
                          rotate: 0,
                          y: 8,
                        }
                  }
                  className="
                    absolute
                    left-0
                    top-2
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white
                  "
                />

              </div>

            </button>

          </div>

        </nav>


        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>

          {mobileOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                mx-auto
                mt-3
                max-w-7xl
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-black/60
                p-3
                shadow-2xl
                backdrop-blur-2xl
                lg:hidden
              "
            >

              <div className="space-y-1">

                {menuItems.map((item, index) => (

                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >

                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-5
                        py-4
                        text-sm
                        font-medium
                        text-white/75
                        transition
                        hover:bg-white/[0.07]
                        hover:text-white
                      "
                    >

                      <span>
                        {item.label}
                      </span>

                      <span className="text-white/25">
                        ←
                      </span>

                    </Link>

                  </motion.div>

                ))}


                {/* Mobile AI */}

                <Link
                  href="/ai"
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-purple-400/20
                    bg-purple-500/10
                    px-5
                    py-4
                    text-sm
                    font-bold
                    text-purple-200
                  "
                >

                  <span>
                    ✨ دستیار هوشمند OmAI
                  </span>

                  <span>
                    →
                  </span>

                </Link>


                {/* Mobile Login */}

                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    px-5
                    py-4
                    text-sm
                    font-black
                    text-white
                  "
                >
                  ورود به حساب
                </Link>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </header>
    </>
  );
          }
