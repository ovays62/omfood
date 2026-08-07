"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INGREDIENTS = [
  { id: "cheese", name: "پنیر", emoji: "🧀", price: 35000 },
  { id: "mushroom", name: "قارچ", emoji: "🍄", price: 25000 },
  { id: "pepper", name: "فلفل", emoji: "🌶️", price: 15000 },
  { id: "olive", name: "زیتون", emoji: "🫒", price: 20000 },
  { id: "tomato", name: "گوجه", emoji: "🍅", price: 18000 },
  { id: "corn", name: "ذرت", emoji: "🌽", price: 22000 },
];

export default function FoodCanvas() {
  const canvasRef = useRef(null);

  const [foodType, setFoodType] = useState("pizza");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [hoveredIngredient, setHoveredIngredient] = useState(null);

  const basePrices = {
    pizza: 149000,
    burger: 139000,
    sandwich: 119000,
  };

  const basePrice = basePrices[foodType];

  const ingredientsPrice = selectedIngredients.reduce(
    (total, id) => {
      const ingredient = INGREDIENTS.find((item) => item.id === id);
      return total + (ingredient?.price || 0);
    },
    0
  );

  const finalPrice = basePrice + ingredientsPrice;

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((current) => {
      if (current.includes(ingredient.id)) {
        return current.filter((id) => id !== ingredient.id);
      }

      return [...current, ingredient.id];
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawFood();
    };

    const drawFood = () => {
      const rect = canvas.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      /*
       * Ambient glow
       */

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        230
      );

      glow.addColorStop(0, "rgba(139,92,246,.25)");
      glow.addColorStop(0.5, "rgba(59,130,246,.10)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 230, 0, Math.PI * 2);

      ctx.fill();

      /*
       * Food plate shadow
       */

      ctx.save();

      ctx.fillStyle = "rgba(0,0,0,.35)";
      ctx.filter = "blur(25px)";

      ctx.beginPath();

      ctx.ellipse(
        centerX,
        centerY + 125,
        145,
        38,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      /*
       * Plate
       */

      const plateGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        190
      );

      plateGradient.addColorStop(0, "#ffffff");
      plateGradient.addColorStop(0.8, "#d9d9df");
      plateGradient.addColorStop(1, "#8b8b96");

      ctx.fillStyle = plateGradient;

      ctx.beginPath();

      ctx.ellipse(
        centerX,
        centerY + 35,
        185,
        65,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Food
       */

      if (foodType === "pizza") {
        drawPizza(ctx, centerX, centerY);
      }

      if (foodType === "burger") {
        drawBurger(ctx, centerX, centerY);
      }

      if (foodType === "sandwich") {
        drawSandwich(ctx, centerX, centerY);
      }

      /*
       * Ingredient decorations
       */

      selectedIngredients.forEach((id, index) => {
        const ingredient = INGREDIENTS.find(
          (item) => item.id === id
        );

        if (!ingredient) return;

        const angle =
          (Math.PI * 2 * index) /
          Math.max(selectedIngredients.length, 1);

        const radius = 65;

        const x =
          centerX +
          Math.cos(angle) * radius;

        const y =
          centerY +
          Math.sin(angle) * radius;

        ctx.save();

        ctx.font = "30px Arial";

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.shadowColor = "rgba(0,0,0,.4)";
        ctx.shadowBlur = 8;

        ctx.fillText(
          ingredient.emoji,
          x,
          y
        );

        ctx.restore();
      });
    };

    const drawPizza = (
      ctx,
      x,
      y
    ) => {
      const radius = 125;

      /*
       * Pizza shadow
       */

      ctx.save();

      ctx.fillStyle = "rgba(0,0,0,.3)";
      ctx.filter = "blur(10px)";

      ctx.beginPath();

      ctx.arc(
        x,
        y + 12,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      /*
       * Crust
       */

      const crust = ctx.createRadialGradient(
        x - 30,
        y - 30,
        20,
        x,
        y,
        radius
      );

      crust.addColorStop(0, "#ffd27a");
      crust.addColorStop(0.7, "#d8892b");
      crust.addColorStop(1, "#8d4b18");

      ctx.fillStyle = crust;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Sauce
       */

      ctx.fillStyle = "#b82e22";

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius - 14,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Cheese
       */

      const cheese = ctx.createRadialGradient(
        x - 30,
        y - 30,
        10,
        x,
        y,
        radius
      );

      cheese.addColorStop(0, "#fff2a8");
      cheese.addColorStop(0.8, "#ffc94f");
      cheese.addColorStop(1, "#e69a21");

      ctx.fillStyle = cheese;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius - 24,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Pepperoni
       */

      const pepperonis = [
        [-45, -35],
        [45, -45],
        [55, 30],
        [-55, 40],
        [0, 55],
      ];

      pepperonis.forEach(([dx, dy]) => {
        ctx.fillStyle = "#b52d22";

        ctx.beginPath();

        ctx.arc(
          x + dx,
          y + dy,
          16,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.fillStyle = "#e84a2e";

        ctx.beginPath();

        ctx.arc(
          x + dx - 4,
          y + dy - 4,
          5,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });
    };

    const drawBurger = (
      ctx,
      x,
      y
    ) => {
      /*
       * Burger shadow
       */

      ctx.save();

      ctx.fillStyle = "rgba(0,0,0,.35)";
      ctx.filter = "blur(15px)";

      ctx.beginPath();

      ctx.ellipse(
        x,
        y + 110,
        125,
        25,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      /*
       * Bottom bun
       */

      const bun = ctx.createLinearGradient(
        x,
        y - 80,
        x,
        y + 100
      );

      bun.addColorStop(0, "#ffd27a");
      bun.addColorStop(1, "#a95b1d");

      ctx.fillStyle = bun;

      roundRect(
        ctx,
        x - 125,
        y + 55,
        250,
        55,
        25
      );

      ctx.fill();

      /*
       * Patty
       */

      ctx.fillStyle = "#542b1a";

      roundRect(
        ctx,
        x - 120,
        y + 15,
        240,
        48,
        15
      );

      ctx.fill();

      /*
       * Cheese
       */

      ctx.fillStyle = "#ffca3a";

      ctx.beginPath();

      ctx.moveTo(x - 115, y + 10);
      ctx.lineTo(x + 115, y + 10);
      ctx.lineTo(x + 85, y + 38);
      ctx.lineTo(x + 45, y + 22);
      ctx.lineTo(x, y + 40);
      ctx.lineTo(x - 55, y + 22);
      ctx.lineTo(x - 90, y + 38);
      ctx.closePath();

      ctx.fill();

      /*
       * Lettuce
       */

      ctx.fillStyle = "#45a83d";

      roundRect(
        ctx,
        x - 120,
        y - 5,
        240,
        28,
        10
      );

      ctx.fill();

      /*
       * Top bun
       */

      const topBun = ctx.createRadialGradient(
        x - 40,
        y - 65,
        10,
        x,
        y - 30,
        130
      );

      topBun.addColorStop(0, "#ffe09b");
      topBun.addColorStop(0.7, "#e99a37");
      topBun.addColorStop(1, "#a95b1d");

      ctx.fillStyle = topBun;

      ctx.beginPath();

      ctx.ellipse(
        x,
        y - 48,
        125,
        65,
        0,
        Math.PI,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Sesame
       */

      const seeds = [
        [-55, -70],
        [-20, -85],
        [20, -82],
        [55, -65],
        [0, -65],
      ];

      ctx.fillStyle = "#fff0b5";

      seeds.forEach(([dx, dy]) => {
        ctx.beginPath();

        ctx.ellipse(
          x + dx,
          y + dy,
          7,
          3,
          -0.3,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });
    };

    const drawSandwich = (
      ctx,
      x,
      y
    ) => {
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(-0.08);

      /*
       * Bread
       */

      const bread = ctx.createLinearGradient(
        0,
        -100,
        0,
        100
      );

      bread.addColorStop(0, "#ffe0a3");
      bread.addColorStop(1, "#b86b25");

      ctx.fillStyle = bread;

      roundRect(
        ctx,
        -135,
        -90,
        270,
        75,
        25
      );

      ctx.fill();

      /*
       * Meat
       */

      ctx.fillStyle = "#713b28";

      roundRect(
        ctx,
        -130,
        -20,
        260,
        42,
        12
      );

      ctx.fill();

      /*
       * Cheese
       */

      ctx.fillStyle = "#ffc93c";

      ctx.beginPath();

      ctx.moveTo(-125, -20);
      ctx.lineTo(125, -20);
      ctx.lineTo(95, 15);
      ctx.lineTo(40, -2);
      ctx.lineTo(-20, 18);
      ctx.lineTo(-75, -2);
      ctx.closePath();

      ctx.fill();

      /*
       * Lettuce
       */

      ctx.fillStyle = "#43a047";

      roundRect(
        ctx,
        -130,
        15,
        260,
        25,
        8
      );

      ctx.fill();

      /*
       * Bottom bread
       */

      ctx.fillStyle = "#d38a36";

      roundRect(
        ctx,
        -135,
        38,
        270,
        65,
        20
      );

      ctx.fill();

      ctx.restore();
    };

    const roundRect = (
      ctx,
      x,
      y,
      width,
      height,
      radius
    ) => {
      ctx.beginPath();

      ctx.roundRect(
        x,
        y,
        width,
        height,
        radius
      );
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, [
    foodType,
    selectedIngredients,
  ]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070c] px-4 py-8 text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black sm:text-5xl"
          >
            غذای خودت را بساز
          </motion.h1>

          <p className="mt-3 text-white/50">
            هر چیزی که دوست داری انتخاب کن.
          </p>

        </div>

        {/* Food Type */}

        <div className="mb-6 grid grid-cols-3 gap-3">

          {[
            ["pizza", "🍕", "پیتزا"],
            ["burger", "🍔", "برگر"],
            ["sandwich", "🥪", "ساندویچ"],
          ].map(([id, emoji, name]) => (
            <motion.button
              key={id}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFoodType(id)}
              className={`rounded-2xl border p-4 transition ${
                foodType === id
                  ? "border-purple-400/50 bg-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,.15)]"
                  : "border-white/10 bg-white/[.04] hover:bg-white/[.08]"
              }`}
            >
              <div className="text-3xl">
                {emoji}
              </div>

              <div className="mt-2 text-sm font-bold">
                {name}
              </div>

            </motion.button>
          ))}

        </div>

        {/* Main Builder */}

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Canvas */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[.035] backdrop-blur-xl"
          >

            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/50 backdrop-blur-xl">
              Live Preview
            </div>

            <canvas
              ref={canvasRef}
              className="h-[480px] w-full"
            />

            {/* Bottom Info */}

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">

              <div>
                <div className="text-xs text-white/40">
                  غذای انتخابی
                </div>

                <div className="mt-1 font-bold">
                  {foodType === "pizza"
                    ? "پیتزا"
                    : foodType === "burger"
                    ? "برگر"
                    : "ساندویچ"}
                </div>
              </div>

              <div className="text-left">
                <div className="text-xs text-white/40">
                  قیمت نهایی
                </div>

                <motion.div
                  key={finalPrice}
                  initial={{
                    scale: 1.2,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="mt-1 text-xl font-black text-purple-300"
                >
                  {finalPrice.toLocaleString("fa-IR")} تومان
                </motion.div>
              </div>

            </div>

          </motion.div>

          {/* Ingredients */}

          <div className="rounded-[32px] border border-white/10 bg-white/[.035] p-5 backdrop-blur-xl">

            <div className="mb-5">

              <h2 className="text-xl font-black">
                مواد اولیه
              </h2>

              <p className="mt-1 text-sm text-white/40">
                مواد مورد علاقه‌ات را اضافه کن
              </p>

            </div>

            <div className="space-y-3">

              {INGREDIENTS.map((ingredient) => {
                const selected =
                  selectedIngredients.includes(
                    ingredient.id
                  );

                return (
                  <motion.button
                    key={ingredient.id}
                    whileHover={{
                      scale: 1.02,
                      x: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() =>
                      toggleIngredient(
                        ingredient
                      )
                    }
                    onMouseEnter={() =>
                      setHoveredIngredient(
                        ingredient.id
                      )
                    }
                    onMouseLeave={() =>
                      setHoveredIngredient(null)
                    }
                    className={`relative flex w-full items-center justify-between rounded-2xl border p-4 text-right transition ${
                      selected
                        ? "border-purple-400/40 bg-purple-500/15"
                        : "border-white/10 bg-white/[.025] hover:bg-white/[.06]"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <div className="text-3xl">
                        {ingredient.emoji}
                      </div>

                      <div>

                        <div className="font-bold">
                          {ingredient.name}
                        </div>

                        <div className="mt-1 text-xs text-white/40">
                          +
                          {ingredient.price.toLocaleString(
                            "fa-IR"
                          )}
                          تومان
                        </div>

                      </div>

                    </div>

                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
                        selected
                          ? "border-purple-400 bg-purple-500"
                          : "border-white/20"
                      }`}
                    >
                      {selected && "✓"}
                    </div>

                    <AnimatePresence>
                      {hoveredIngredient ===
                        ingredient.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          className="absolute -top-10 right-2 rounded-lg bg-black/80 px-3 py-1 text-xs text-white/70"
                        >
                          اضافه کردن {ingredient.name}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.button>
                );
              })}

            </div>

            {/* Summary */}

            <div className="mt-6 border-t border-white/10 pt-5">

              <div className="flex items-center justify-between text-sm text-white/50">
                <span>قیمت پایه</span>

                <span>
                  {basePrice.toLocaleString(
                    "fa-IR"
                  )}{" "}
                  تومان
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-white/50">
                <span>افزودنی‌ها</span>

                <span>
                  {ingredientsPrice.toLocaleString(
                    "fa-IR"
                  )}{" "}
                  تومان
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">

                <span className="font-bold">
                  مجموع
                </span>

                <span className="text-2xl font-black text-purple-300">
                  {finalPrice.toLocaleString(
                    "fa-IR"
                  )}{" "}
                  تومان
                </span>

              </div>

              <motio
