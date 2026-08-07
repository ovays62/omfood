"use client";

import { motion } from "framer-motion";


export default function FoodCard({
  food
}) {


  if (!food) return null;


  return (

    <motion.div

      whileHover={{
        y: -8,
        scale: 1.03
      }}

      whileTap={{
        scale: 0.95
      }}

      className="
      overflow-hidden
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      text-white
      cursor-pointer
      "

    >


      <div
        className="
        h-48
        overflow-hidden
        "
      >

        <img

          src={food.image}

          alt={food.name}

          className="
          w-full
          h-full
          object-cover
          hover:scale-110
          transition
          duration-500
          "

        />

      </div>




      <div
        className="
        p-5
        "
      >


        <h3

          className="
          text-2xl
          font-bold
          mb-2
          "

        >

          {food.name}

        </h3>




        <p

          className="
          text-gray-300
          text-sm
          mb-4
          "

        >

          {food.description}

        </p>




        <div

          className="
          flex
          justify-between
          items-center
          "

        >


          <span

            className="
            text-yellow-300
            font-bold
            text-lg
            "

          >

            {food.price?.toLocaleString() ?? "0"}

            {" "}

            تومان


          </span>





          <button

            className="
            px-4
            py-2
            rounded-xl
            bg-purple-600
            hover:bg-purple-700
            font-bold
            "

          >

            انتخاب

          </button>



        </div>



        <div className="mt-3 text-sm text-yellow-200">

          ⭐ {food.rating}

        </div>



      </div>


    </motion.div>

  );

}
