"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
  base: {
    title: "انتخاب پایه",
    items: [
      { id: "pizza", name: "پیتزا", emoji: "🍕", price: 189000 },
      { id: "burger", name: "برگر", emoji: "🍔", price: 169000 },
      { id: "sandwich", name: "ساندویچ", emoji: "🥪", price: 149000 },
    ],
  },
  cheese: {
    title: "پنیر",
    items: [
      { id: "mozzarella", name: "موزارلا", emoji: "🧀", price: 25000 },
      { id: "cheddar", name: "چدار", emoji: "🟨", price: 30000 },
      { id: "parmesan", name: "پارمزان", emoji: "🥛", price: 35000 },
    ],
  },
  meat: {
    title: "مواد اصلی",
    items: [
      { id: "beef", name: "گوشت", emoji: "🥩", price: 45000 },
      { id: "chicken", name: "مرغ", emoji: "🍗", price: 35000 },
      { id: "pepperoni", name: "پپرونی", emoji: "🌶️", price: 40000 },
    ],
  },
  vegetables: {
    title: "سبزیجات",
    items: [
      { id: "mushroom", name: "قارچ", emoji: "🍄", price: 15000 },
      { id: "olive", name: "زیتون", emoji: "🫒", price: 12000 },
      { id: "pepper", name: "فلفل", emoji: "🫑", price: 10000 },
      { id: "tomato", name: "گوجه", emoji: "🍅", price: 10000 },
    ],
  },
  sauce: {
    title: "سس",
    items: [
      { id: "special", name: "سس مخصوص", emoji: "🥫", price: 12000 },
      { id: "garlic", name: "سس سیر", emoji: "🧄", price: 10000 },
      { id: "spicy", name: "سس تند", emoji: "🌶️", price: 10000 },
    ],
  },
};

function formatPrice(value) {
  return new Intl.NumberFormat("fa-IR").format(value) + " تومان";
}

export default function BuilderPage() {
  const [activeCategory, setActiveCategory] = useState("base");
  const [selectedBase, setSelectedBase] = useState(categories.base.items[0]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const ingredientsPrice = useMemo(() => {
    return selectedIngredients.reduce(
      (total, item) => total + item.price,
      0
    );
  }, [selectedIngredients]);

  const totalPrice = selectedBase.price + ingredientsPrice;

  function toggleIngredient(item) {
    setSelectedIngredients((current) => {
      const exists = current.some((ingredient) => ingredient.id === item.id);

      if (exists) {
        return current.filter(
          (ingredient) => ingredient.id !== item.id
        );
      }

      return [...current, item];
    });
  }

  function isSelected(item) {
    return selectedIngredients.some(
      (ingredient) => ingredient.id === item.id
    );
  }

  return (
    <main className="min-h-screen bg-[#05030d] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-30 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-2xl shadow-[0_0_30px_rgba(168,85,247,.3)]">
              🍕
            </div>

            <div>
              <div className="font-black">OmFood</div>
              <div className="text-[9px] tracking-[0.3em] text-white/30">
                FOOD BUILDER
              </div>
            </div>
          </Link>

          <Link
            href="/cart"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            🛒 سبد خرید
          </Link>

        </div>
      </header>

      {/* Main */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-sm text-purple-300/70">
            OMFOOD / BUILDER
          </div>

          <h1 className="mt-2 text-4xl font-black sm:text-5xl">
            غذای خودت را
            <span className="gradient-text"> بساز</span>
          </h1>

          <p className="mt-3 text-sm text-white/40">
            مواد اولیه را انتخاب کن و ترکیب مخصوص خودت را بساز.
          </p>
        </motion.div>

        {/* Builder */}
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">

          {/* Preview */}
          <section
            className="
              relative
              min-h-[560px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.035]
              backdrop-blur-2xl
            "
          >

            <div className="absolute left-6 top-6">
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/40">
                LIVE PREVIEW
              </div>
            </div>

            {/* Food */}
            <div className="flex min-h-[560px] items-center justify-center">

              <motion.div
                layout
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-purple-500/10 shadow-[0_40px_100px_rgba(0,0,0,.55)]"
              >

                <div className="text-[150px]">
                  {selectedBase.emoji}
                </div>

                <AnimatePresence>
                  {selectedIngredients.map((ingredient, index) => (
                    <motion.div
                      key={ingredient.id}
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
                      className="absolute text-3xl"
                      style={{
                        transform: `rotate(${index * 47}deg) translateY(-125px)`,
                      }}
                    >
                      {ingredient.emoji}
                    </motion.div>
                  ))}
                </AnimatePresence>

              </motion.div>

            </div>

            {/* Selected */}
            <div className="absolute bottom-5 left-5 right-5">

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40">
                    ترکیب فعلی
                  </span>

                  <span className="text-xs text-purple-300">
                    {selectedIngredients.length} ماده
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs">
                    {selectedBase.emoji} {selectedBase.name}
                  </span>

                  {selectedIngredients.map((ingredient) => (
                    <span
                      key={ingredient.id}
                      className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200"
                    >
                      {ingredient.emoji} {ingredient.name}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* Controls */}
          <aside
            className="
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.035]
              p-5
              backdrop-blur-2xl
            "
          >

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">

              {Object.entries(categories).map(
                ([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`
                      shrink-0
                      rounded-xl
                      px-4
                      py-2.5
                      text-xs
                      font-bold
                      transition
                      ${
                        activeCategory === key
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                          : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {category.title}
                  </button>
                )
              )}

            </div>

            {/* Items */}
            <div className="mt-6">

              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold">
                  {categories[activeCategory].title}
                </h2>

                <span className="text-xs text-white/30">
                  انتخاب کن
                </span>
              </div>

              <div className="grid gap-3">

                {categories[activeCategory].items.map(
                  (item) => {
                    const selected =
                      activeCategory === "base"
                        ? selectedBase.id === item.id
                        : isSelected(item);

                    return (
                      <motion.button
                        key={item.id}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          if (activeCategory === "base") {
                            setSelectedBase(item);
                          } else {
                            toggleIngredient(item);
                          }
                        }}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition
                          ${
                            selected
                              ? "border-purple-400/40 bg-purple-500/10"
                              : "border-white/10 bg-white/[0.025] hover:bg-white/[0.06]"
                          }
                        `}
                      >

                        <div className="flex items-center gap-3">

                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
                            {item.emoji}
                          </div>

                          <div>
                            <div className="text-sm font-bold">
                              {item.name}
                            </div>

                            <div className="mt-1 text-xs text-white/30">
                              +{formatPrice(item.price)}
                            </div>
                          </div>

                        </div>

                        <div
                          className={`
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            text-xs
                            ${
                              selected
                                ? "border-purple-400 bg-purple-500 text-white"
                                : "border-white/10 text-transparent"
                            }
                          `}
                        >
                          ✓
                        </div>

                      </motion.button>
                    );
                  }
                )}

              </div>

            </div>

            {/* Price */}
            <div className="mt-6 border-t border-white/10 pt-5">

              <div className="flex items-end justify-between">

                <div>
                  <div className="text-xs text-white/30">
                    قیمت نهایی
                  </div>

                  <motion.div
                    key={totalPrice}
                    initial={{ scale: 1.1, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-1 text-2xl font-black text-white"
                  >
                    {formatPrice(totalPrice)}
                  </motion.div>
                </div>

                <div className="text-xs text-green-400/70">
                  ✓ آماده سفارش
                </div>

              </div>

              <button
                className="
                  mt-5
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-600
                  via-fuchsia-500
                  to-blue-500
                  px-5
                  py-4
                  font-black
                  text-white
                  shadow-[0_0_30px_rgba(168,85,247,.2)]
                  transition
                  hover:scale-[1.02]
                  active:scale-[.98]
                "
              >
                ✨ افزودن به سبد خرید
              </button>

            </div>

          </aside>

        </div>

      </div>
    </main>
  );
      }
