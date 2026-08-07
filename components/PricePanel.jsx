"use client";

import { motion } from "framer-motion";


export default function PricePanel({
  ingredients = [],
  basePrice = 80000
}) {


  const ingredientsPrice =
    ingredients.reduce(
      (total, item) =>
        total + item.price,
      0
    );


  const finalPrice =
    basePrice + ingredientsPrice;



  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      className="
      w-full
      p-5
      rounded-3xl
      bg-gradient-to-br
      from-purple-500/20
      to-blue-500/20
      backdrop-blur-xl
      border
      border-white/20
      text-white
      "

    >

      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        💰 قیمت سفارش
      </h2>



      <div
        className="
        flex
        justify-between
        mb-3
        "
      >

        <span>
          قیمت پایه
        </span>

        <span>
          {
            basePrice.toLocaleString()
          }
          {" "}
          تومان
        </span>

      </div>



      <div
        className="
        flex
        justify-between
        mb-3
        "
      >

        <span>
          مواد انتخابی
        </span>

        <span>
          {
            ingredientsPrice.toLocaleString()
          }
          {" "}
          تومان
        </span>

      </div>



      <div
        className="
        h-px
        bg-white/20
        my-4
        "
      />



      <div
        className="
        flex
        justify-between
        text-2xl
        font-bold
        "
      >

        <span>
          مجموع
        </span>


        <span
          className="
          text-yellow-300
          "
        >

          {
            finalPrice.toLocaleString()
          }

          {" "}
          تومان

        </span>


      </div>



    </motion.div>

  );
}
