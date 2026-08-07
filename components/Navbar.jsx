"use client";


import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";



export default function Navbar(){


  const [open,setOpen] = useState(false);



  const links = [

    {
      name:"خانه",
      href:"/"
    },

    {
      name:"غذاها",
      href:"/products"
    },

    {
      name:"ساخت غذا",
      href:"/builder"
    },

    {
      name:"AI Chef",
      href:"/ai"
    },

    {
      name:"درباره ما",
      href:"/about"
    }

  ];




  return (

    <header

      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-5
      py-5
      "

    >



      <nav

        className="
        max-w-7xl
        mx-auto
        glass
        rounded-3xl
        px-6
        py-4
        flex
        items-center
        justify-between
        "

      >



        {/* Logo */}


        <Link

          href="/"

          className="
          text-3xl
          font-black
          gradient-text
          "

        >

          OmFood

        </Link>





        {/* Desktop Menu */}


        <div

          className="
          hidden
          md:flex
          items-center
          gap-8
          "

        >



          {

          links.map((link)=>(


            <Link

              key={link.href}

              href={link.href}

              className="
              text-gray-300
              hover:text-white
              transition
              "

            >

              {link.name}

            </Link>


          ))}



        </div>





        {/* Login Button */}


        <Link

          href="/login"

          className="
          hidden
          md:block
          btn-primary
          "

        >

          ورود

        </Link>





        {/* Mobile Button */}


        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-white
          "

        >


          {

          open ?

          <X size={32}/>

          :

          <Menu size={32}/>

          }


        </button>



      </nav>






      {/* Mobile Menu */}



      {

      open &&

      <motion.div

        initial={{
          opacity:0,
          y:-20
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
        md:hidden
        max-w-7xl
        mx-auto
        mt-3
        glass
        rounded-3xl
        p-6
        "

      >


        <div

          className="
          flex
          flex-col
          gap-5
          "

        >


          {

          links.map((link)=>(


            <Link

              key={link.href}

              href={link.href}

              onClick={()=>setOpen(false)}

              className="
              text-gray-300
              hover:text-white
              "

            >

              {link.name}

            </Link>


          ))}



          <Link

            href="/login"

            className="
            btn-primary
            text-center
            "

          >

            ورود

          </Link>



        </div>


      </motion.div>


      }



    </header>


  );

}
