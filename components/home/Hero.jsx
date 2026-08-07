"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-5
        pt-24
        text-white
      "
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* =========================
            LEFT — CONTENT
        ========================== */}

        <div className="text-center lg:text-right">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mx-auto
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2
              text-sm
              text-white/70
              shadow-[0_0_30px_rgba(139,92,246,.08)]
              backdrop-blur-xl
              lg:mx-0
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_cyan]" />
            تجربه‌ای متفاوت از فست‌فود
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            غذای
            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-indigo-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_30px_rgba(129,140,248,.25)]
              "
            >
              آینده
            </span>

            <br />

            <span className="text-white">
              را بساز
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-7
              max-w-xl
              text-base
              leading-8
              text-white/55
              sm:text-lg
              lg:mx-0
            "
          >
            مواد اولیه‌ات را انتخاب کن، غذایت را خودت طراحی کن
            و یک تجربه فست‌فود کاملاً شخصی‌سازی‌شده بساز.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="
              mt-9
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
              lg:justify-start
            "
          >

            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 45px rgba(99,102,241,.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-fuchsia-500
                px-8
                py-4
                font-bold
                shadow-[0_0_25px_rgba(99,102,241,.2)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative flex items-center justify-center gap-3">
                🍕
                ساخت غذای من
                <span className="text-lg">←</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,.1)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-8
                py-4
                font-semibold
                text-white/80
                backdrop-blur-xl
                transition
              "
            >
              مشاهده منو
            </motion.button>

          </motion.div>

          {/* Trust stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-7
              text-xs
              text-white/40
              lg:justify-start
            "
          >
            <div>
              <strong className="block text-lg text-white/80">
                100%
              </strong>
              شخصی‌سازی
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <strong className="block text-lg text-white/80">
                3D
              </strong>
              تجربه تعاملی
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <strong className="block text-lg text-white/80">
                AI
              </strong>
              هوشمند
            </div>
          </motion.div>

        </div>

        {/* =========================
            RIGHT — 3D FOOD VISUAL
        ========================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            mx-auto
            flex
            h-[380px]
            w-full
            max-w-[520px]
            items-center
            justify-center
            lg:h-[560px]
          "
        >

          {/* Main glow */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-64
              w-64
              rounded-full
              bg-fuchsia-500/20
              blur-[80px]
              lg:h-80
              lg:w-80
            "
          />

          {/* Orbit */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              border
              border-white/[0.07]
              lg:h-[430px]
              lg:w-[430px]
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-0
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_15px_cyan]
              "
            />
          </motion.div>

          {/* Food plate */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              flex
              h-64
              w-64
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-gradient-to-br
              from-white/[0.12]
              to-white/[0.025]
              shadow-[0_30px_100px_rgba(0,0,0,.5),0_0_70px_rgba(99,102,241,.18)]
              backdrop-blur-xl
              lg:h-80
              lg:w-80
            "
          >

            {/* Plate ring */}

            <div
              className="
                absolute
                inset-5
                rounded-full
                border
                border-white/10
                shadow-inner
              "
            />

            {/* Burger */}

            <div className="relative flex flex-col items-center">

              {/* Top bun */}

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  h-20
                  w-40
                  rounded-[55%_55%_35%_35%]
                  bg-gradient-to-b
                  from-orange-300
                  via-orange-500
                  to-orange-700
                  shadow-[0_12px_25px_rgba(0,0,0,.35)]
                "
              >
                {/* sesame */}

                <div className="flex h-full items-center justify-center gap-3">
                  <span className="h-1.5 w-3 rotate-[-20deg] rounded-full bg-yellow-100/80" />
                  <span className="h-1.5 w-3 rotate-[15deg] rounded-full bg-yellow-100/80" />
                  <span className="h-1.5 w-3 rotate-[-8deg] rounded-full bg-yellow-100/80" />
                  <span className="h-1.5 w-3 rotate-[20deg] rounded-full bg-yellow-100/80" />
                </div>
              </motion.div>

              {/* Lettuce */}

              <div
                className="
                  -mt-1
                  h-5
                  w-44
                  rounded-xl
                  bg-gradient-to-r
                  from-green-300
                  via-green-500
                  to-green-700
                  shadow-[0_4px_10px_rgba(34,197,94,.25)]
                "
              />

              {/* Cheese */}

              <div
                className="
                  h-5
                  w-40
                  bg-gradient-to-r
                  from-yellow-300
                  via-yellow-400
                  to-orange-400
                "
              />

              {/* Patty */}

              <div
                className="
                  h-12
                  w-44
                  rounded-xl
                  bg-gradient-to-b
                  from-stone-700
                  via-stone-900
                  to-black
                  shadow-[0_8px_15px_rgba(0,0,0,.6)]
                "
              />

              {/* Sauce */}

              <div
                className="
                  h-3
                  w-40
                  rounded-full
                  bg-gradient-to-r
                  from-red-400
                  via-red-500
                  to-red-700
                  blur-[.2px]
                "
              />

              {/* Bottom bun */}

              <div
                className="
                  h-12
                  w-40
                  rounded-[20%_20%_45%_45%]
                  bg-gradient-to-b
                  from-orange-500
                  to-orange-800
                "
              />

            </div>

          </motion.div>

          {/* Floating ingredient cards */}

          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-16
              z-20
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              px-4
              py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <span className="text-2xl">🥬</span>
            <span className="ml-2 text-xs text-white/60">
              تازه
            </span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [3, -3, 3],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-20
              right-0
              z-20
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              px-4
              py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <span className="text-2xl">🔥</span>
            <span className="ml-2 text-xs text-white/60">
              مخصوص تو
            </span>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll indicator */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-center
          text-xs
          text-white/30
        "
      >
        <div className="mb-2">اسکرول کن</div>
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

    </section>
  );
                          }
