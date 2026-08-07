"use client";


import { motion } from "framer-motion";



export default function LoadingScreen(){


  return (

    <div

      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      galaxy-bg
      "

    >


      <motion.div

        animate={{

          scale:[
            1,
            1.2,
            1
          ]

        }}

        transition={{

          repeat:Infinity,

          duration:1.5

        }}

        className="
        text-7xl
        "

      >

        🍕

      </motion.div>



    </div>


  );

}
