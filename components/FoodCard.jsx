"use client";

import { motion } from "framer-motion";


export default function FoodCard({
  title,
  description,
  image,
  price,
  onClick
}) {


  return (

    <motion.div

      whileHover={{
        y:-8,
        scale:1.03
      }}

      whileTap={{
        scale:.95
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
      
      onClick={onClick}

    >


      <div
        className="
        h-48
        overflow-hidden
        "
      >

        <img

          src={image}

          alt={title}

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
          {title}
        </h3>



        <p
          className="
          text-gray-300
          text-sm
          mb-4
          "
        >

          {description}

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

            {
              price.toLocaleString()
            }

            {" "}
            تومان

          </span>



          <button

            className="
            px-4
            py-2
            rounded-xl
            bg-purple-600
            font-bold
            "
            
          >

            انتخاب

          </button>


        </div>


      </div>


    </motion.div>

  );

}
 
