"use client";


import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";



export default function FoodCard({food}){


  return (

    <motion.div


      whileHover={{

        y:-10,
        scale:1.03

      }}


      transition={{

        duration:.3

      }}


      className="
      glass
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      "

    >




      {/* Image Area */}


      <div

        className="
        h-64
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-violet-600/20
        to-cyan-500/20
        "

      >


        <div

          className="
          text-8xl
          animate-float
          "

        >

          {food.icon || "🍕"}

        </div>



      </div>






      {/* Content */}


      <div

        className="
        p-6
        "

      >



        <div

          className="
          flex
          justify-between
          items-center
          "

        >



          <h3

            className="
            text-2xl
            font-bold
            "

          >

            {food.name}


          </h3>




          <div

            className="
            flex
            items-center
            gap-1
            text-yellow-400
            "

          >

            <Star

              size={18}

              fill="currentColor"

            />


            <span>

              {food.rating || "5.0"}

            </span>


          </div>



        </div>





        <p

          className="
          text-gray-400
          mt-4
          leading-7
          "

        >

          {food.description}


        </p>






        <div

          className="
          flex
          items-center
          justify-between
          mt-8
          "

        >




          <span

            className="
            text-xl
            font-black
            gradient-text
            "

          >

            {food.price || "250,000"} تومان

          </span>





          <button

            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-violet-600/30
            border
            border-violet-400/30
            hover:bg-violet-600/50
            transition
            "

          >

            <ShoppingCart size={20}/>


            سفارش


          </button>



        </div>



      </div>



    </motion.div>


  );

}
