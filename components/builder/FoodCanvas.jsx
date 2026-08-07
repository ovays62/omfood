"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const INGREDIENTS = {
  cheese: {
    name: "پنیر",
    emoji: "🧀",
  },
  mushroom: {
    name: "قارچ",
    emoji: "🍄",
  },
  olive: {
    name: "زیتون",
    emoji: "🫒",
  },
  pepper: {
    name: "فلفل",
    emoji: "🌶️",
  },
  tomato: {
    name: "گوجه",
    emoji: "🍅",
  },
  pepperoni: {
    name: "پپرونی",
    emoji: "🍕",
  },
  chicken: {
    name: "مرغ",
    emoji: "🍗",
  },
  beef: {
    name: "گوشت",
    emoji: "🥩",
  },
};

export default function FoodCanvas({
  base = "pizza",
  selectedIngredients = [],
  onIngredientAdd,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [ingredientMode, setIngredientMode] = useState(null);
  const [particles, setParticles] = useState([]);

  const getCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    return canvas;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawFood();
  };

  const drawFood = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);

    /*
     * Background glow
     */
    const glow = ctx.createRadialGradient(
      width / 2,
      height / 2,
      20,
      width / 2,
      height / 2,
      Math.min(width, height) * 0.45
    );

    glow.addColorStop(0, "rgba(168,85,247,.16)");
    glow.addColorStop(0.5, "rgba(59,130,246,.07)");
    glow.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    /*
     * Food size
     */
    const size = Math.min(width, height) * 0.62;

    const centerX = width / 2;
    const centerY = height / 2;

    /*
     * Shadow
     */
    ctx.save();

    ctx.beginPath();

    ctx.ellipse(
      centerX,
      centerY + size * 0.37,
      size * 0.38,
      size * 0.09,
      0,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "rgba(0,0,0,.5)";
    ctx.filter = "blur(18px)";
    ctx.fill();

    ctx.restore();

    /*
     * Base food
     */
    if (base === "pizza") {
      drawPizzaBase(ctx, centerX, centerY, size);
    }

    if (base === "burger") {
      drawBurgerBase(ctx, centerX, centerY, size);
    }

    if (base === "sandwich") {
      drawSandwichBase(ctx, centerX, centerY, size);
    }

    /*
     * Ingredients
     */
    selectedIngredients.forEach((ingredient, index) => {
      drawIngredient(
        ctx,
        ingredient,
        centerX,
        centerY,
        size,
        index
      );
    });
  };

  const drawPizzaBase = (ctx, x, y, size) => {
    const radius = size * 0.38;

    /*
     * Outer crust
     */
    ctx.save();

    const crust = ctx.createRadialGradient(
      x - radius * 0.2,
      y - radius * 0.2,
      radius * 0.1,
      x,
      y,
      radius
    );

    crust.addColorStop(0, "#ffd27a");
    crust.addColorStop(0.55, "#d9822b");
    crust.addColorStop(1, "#7a3519");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    ctx.fillStyle = crust;
    ctx.shadowColor = "rgba(255,150,50,.25)";
    ctx.shadowBlur = 35;
    ctx.fill();

    ctx.restore();

    /*
     * Cheese
     */
    ctx.save();

    const cheese = ctx.createRadialGradient(
      x - radius * 0.2,
      y - radius * 0.25,
      0,
      x,
      y,
      radius
    );

    cheese.addColorStop(0, "#fff4ad");
    cheese.addColorStop(0.65, "#ffd84d");
    cheese.addColorStop(1, "#e5a72d");

    ctx.beginPath();
    ctx.arc(x, y, radius * 0.89, 0, Math.PI * 2);

    ctx.fillStyle = cheese;
    ctx.fill();

    ctx.restore();

    /*
     * Cheese highlights
     */
    ctx.save();

    ctx.globalAlpha = 0.25;

    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius * 0.7;

      const px = x + Math.cos(angle) * distance;
      const py = y + Math.sin(angle) * distance;

      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);

      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    ctx.restore();
  };

  const drawBurgerBase = (ctx, x, y, size) => {
    const width = size * 0.7;
    const height = size * 0.18;

    /*
     * Bottom bun
     */
    ctx.save();

    ctx.beginPath();

    ctx.roundRect(
      x - width / 2,
      y + size * 0.14,
      width,
      height,
      40
    );

    const bottom = ctx.createLinearGradient(
      0,
      y,
      0,
      y + height
    );

    bottom.addColorStop(0, "#d98a35");
    bottom.addColorStop(1, "#7d3919");

    ctx.fillStyle = bottom;
    ctx.fill();

    ctx.restore();

    /*
     * Meat
     */
    ctx.save();

    ctx.beginPath();

    ctx.roundRect(
      x - width / 2,
      y - size * 0.02,
      width,
      height,
      30
    );

    const meat = ctx.createLinearGradient(
      0,
      y,
      0,
      y + height
    );

    meat.addColorStop(0, "#8b3a20");
    meat.addColorStop(1, "#42170d");

    ctx.fillStyle = meat;
    ctx.fill();

    ctx.restore();

    /*
     * Cheese
     */
    ctx.save();

    ctx.beginPath();

    ctx.moveTo(x - width * 0.46, y - size * 0.04);
    ctx.lineTo(x + width * 0.46, y - size * 0.04);
    ctx.lineTo(x + width * 0.4, y + size * 0.06);
    ctx.lineTo(x - width * 0.4, y + size * 0.06);
    ctx.closePath();

    ctx.fillStyle = "#ffd84d";
    ctx.fill();

    ctx.restore();

    /*
     * Lettuce
     */
    ctx.save();

    ctx.beginPath();

    for (let i = 0; i <= 12; i++) {
      const px =
        x - width / 2 + (width / 12) * i;

      const py =
        y - size * 0.08 +
        Math.sin(i * 1.7) * 5;

      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }

    ctx.strokeStyle = "#54b947";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.restore();

    /*
     * Top bun
     */
    ctx.save();

    ctx.beginPath();

    ctx.ellipse(
      x,
      y - size * 0.16,
      width * 0.52,
      height * 1.4,
      0,
      Math.PI,
      Math.PI * 2
    );

    const top = ctx.createRadialGradient(
      x - width * 0.15,
      y - size * 0.25,
      0,
      x,
      y - size * 0.18,
      width
    );

    top.addColorStop(0, "#ffd98b");
    top.addColorStop(0.6, "#dc8c3c");
    top.addColorStop(1, "#8b421e");

    ctx.fillStyle = top;
    ctx.fill();

    ctx.restore();

    /*
     * Sesame
     */
    ctx.save();

    ctx.fillStyle = "#fff1bc";

    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI;
      const px =
        x + Math.cos(angle) * width * 0.38;

      const py =
        y - size * 0.23 +
        Math.random() * size * 0.07;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(Math.random());
      ctx.fillRect(-3, -1, 6, 2);
      ctx.restore();
    }

    ctx.restore();
  };

  const drawSandwichBase = (ctx, x, y, size) => {
    const width = size * 0.78;
    const height = size * 0.28;

    ctx.save();

    /*
     * Bread
     */
    const bread = ctx.createLinearGradient(
      x,
      y - height,
      x,
      y + height
    );

    bread.addColorStop(0, "#ffd98b");
    bread.addColorStop(0.55, "#d99543");
    bread.addColorStop(1, "#7c3d1d");

    ctx.beginPath();

    ctx.roundRect(
      x - width / 2,
      y - height / 2,
      width,
      height,
      40
    );

    ctx.fillStyle = bread;

    ctx.shadowColor = "rgba(255,150,50,.25)";
    ctx.shadowBlur = 30;

    ctx.fill();

    ctx.restore();

    /*
     * Filling
     */
    ctx.save();

    ctx.beginPath();

    ctx.roundRect(
      x - width * 0.43,
      y - height * 0.08,
      width * 0.86,
      height * 0.45,
      15
    );

    ctx.fillStyle = "#5b2817";
    ctx.fill();

    ctx.restore();

    /*
     * Lettuce
     */
    ctx.save();

    ctx.strokeStyle = "#59b94a";
    ctx.lineWidth = 14;
    ctx.lineCap = "round";

    ctx.beginPath();

    ctx.moveTo(
      x - width * 0.4,
      y - height * 0.01
    );

    ctx.quadraticCurveTo(
      x - width * 0.15,
      y + height * 0.1,
      x,
      y
    );

    ctx.quadraticCurveTo(
      x + width * 0.2,
      y - height * 0.08,
      x + width * 0.4,
      y
    );

    ctx.stroke();

    ctx.restore();
  };

  const drawIngredient = (
    ctx,
    ingredient,
    centerX,
    centerY,
    size,
    index
  ) => {
    if (!ingredient) return;

    const key =
      typeof ingredient === "string"
        ? ingredient
        : ingredient.id;

    const data = INGREDIENTS[key];

    if (!data) return;

    const angle =
      (index * 137.5 * Math.PI) / 180;

    const distance =
      size * (0.08 + (index % 4) * 0.07);

    const x =
      centerX +
      Math.cos(angle) * distance;

    const y =
      centerY +
      Math.sin(angle) * distance;

    ctx.save();

    ctx.font = `${Math.max(22, size * 0.075)}px Arial`;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.shadowColor = "rgba(0,0,0,.45)";
    ctx.shadowBlur = 8;

    ctx.fillText(
      data.emoji,
      x,
      y
    );

    ctx.restore();
  };

  const getPointerPosition = (event) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    const clientX =
      event.touches?.[0]?.clientX ??
      event.clientX;

    const clientY =
      event.touches?.[0]?.clientY ??
      event.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const drawBrush = (x, y) => {
    const canvas = getCanvas();

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.save();

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      14,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(168,85,247,.18)";

    ctx.shadowColor =
      "rgba(168,85,247,.8)";

    ctx.shadowBlur = 20;

    ctx.fill();

    ctx.restore();
  };

  const handlePointerDown = (event) => {
    const position =
      getPointerPosition(event);

    if (!position) return;

    setIsDrawing(true);

    if (ingredientMode) {
      addIngredientAtPosition(
        position.x,
        position.y
      );

      return;
    }

    drawBrush(
      position.x,
      position.y
    );
  };

  const handlePointerMove = (event) => {
    if (!isDrawing) return;

    const position =
      getPointerPosition(event);

    if (!position) return;

    if (!ingredientMode) {
      drawBrush(
        position.x,
        position.y
      );
    }
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const addIngredientAtPosition = (
    x,
    y
  ) => {
    if (!ingredientMode) return;

    const newParticle = {
      id:
        Date.now() +
        Math.random(),

      ingredient:
        ingredientMode,

      x,
      y,
    };

    setParticles((current) => [
      ...current,
      newParticle,
    ]);

    if (onIngredientAdd) {
      onIngredientAdd(
        ingredientMode
      );
    }
  };

  const clearCanvas = () => {
    setParticles([]);
    setIngredientMode(null);

    drawFood();
  };

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    drawFood();
  }, [
    base,
    selectedIngredients,
    particles,
  ]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        min-h-[560px]
        w-full
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-black/20
        backdrop-blur-2xl
      "
    >

      {/* Header */}
      <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between">

        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-white/30">
            OMFOOD
          </div>

          <div className="mt-1 text-sm font-bold text-white/80">
            Food Canvas
          </div>
        </div>

        <button
          onClick={clearCanvas}
          className="
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            py-2
            text-xs
            text-white/50
            backdrop-blur-xl
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          پاک کردن
        </button>

      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          h-full
          w-full
          touch-none
          cursor-crosshair
        "
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />

      {/* Placed ingredients */}
      <AnimateParticles
        particles={particles}
      />

      {/* Ingredient tools */}
      <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2">

        <div className="
          flex
          items-center
          gap-2
          overflow-x-auto
          rounded-2xl
          border
          border-white/10
          bg-black/40
          p-2
          backdrop-blur-2xl
        ">

          {Object.entries(INGREDIENTS).map(
            ([id, item]) => (
              <motion.button
                key={id}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => {
                  setIngredientMode(
                    current =>
                      current === id
                        ? null
                        : id
                  );
                }}
                className={`
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  px-3
                  py-2
                  text-xs
                  transition
                  ${
                    ingredientMode === id
                      ? "bg-purple-500/30 text-white ring-1 ring-purple-400/50"
                      : "bg-white/5 text-white/50 hover:bg-white/10"
                  }
                `}
              >
                <span className="text-lg">
                  {item.emoji}
                </span>

                <span>
                  {item.name}
                </span>
              </motion.button>
            )
          )}

        </div>

        <div className="mt-2 text-center text-[10px] text-white/25">
          یک ماده را انتخاب کن و روی غذا ضربه بزن
        </div>

      </div>

    </div>
  );
}

function AnimateParticles({
  particles,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">

      {particles.map((particle) => {
        const ingredient =
          INGREDIENTS[
            particle.ingredient
          ];

        if (!ingredient) return null;

        return (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
              text-3xl
              drop-shadow-[0_8px_10px_rgba(0,0,0,.5)]
            "
            style={{
              left: particle.x,
              top: particle.y,
            }}
          >
            {ingredient.emoji}
          </motion.div>
        );
      })}

    </div>
  );
}
