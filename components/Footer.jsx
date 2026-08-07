"use client";


import Link from "next/link";
import {
  Instagram,
  Twitter,
  Github,
  Mail
} from "lucide-react";



export default function Footer(){


  const columns = [

    {

      title:"OmFood",

      links:[

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
        }

      ]

    },


    {

      title:"خدمات",

      links:[

        {
          name:"AI Chef",
          href:"/ai"
        },

        {
          name:"سفارش‌ها",
          href:"/orders"
        },

        {
          name:"پشتیبانی",
          href:"/support"
        }

      ]

    },


    {

      title:"شرکت",

      links:[

        {
          name:"درباره ما",
          href:"/about"
        },

        {
          name:"قوانین",
          href:"/terms"
        },

        {
          name:"حریم خصوصی",
          href:"/privacy"
        }

      ]

    }


  ];





  return (

    <footer

      className="
      relative
      z-10
      px-6
      py-20
      "

    >



      <div

        className="
        max-w-7xl
        mx-auto
        glass
        rounded-[40px]
        p-10
        "

      >



        <div

          className="
          grid
          md:grid-cols-4
          gap-10
          "

        >




          {/* Brand */}


          <div>


            <h2

              className="
              text-4xl
              font-black
              gradient-text
              "

            >

              OmFood

            </h2>



            <p

              className="
              mt-5
              text-gray-400
              leading-7
              "

            >

              تجربه نسل آینده سفارش غذا
              با هوش مصنوعی و فناوری سه‌بعدی.

            </p>



            <div

              className="
              flex
              gap-4
              mt-8
              "

            >


              <a
                href="#"
                className="
                p-3
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
                "
              >

                <Instagram size={22}/>

              </a>



              <a
                href="#"
                className="
                p-3
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
                "
              >

                <Twitter size={22}/>

              </a>



              <a
                href="#"
                className="
                p-3
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
                "
              >

                <Github size={22}/>

              </a>



              <a
                href="#"
                className="
                p-3
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
                "
              >

                <Mail size={22}/>

              </a>


            </div>



          </div>





          {/* Links */}


          {

          columns.map((column)=>(


            <div

              key={column.title}

            >


              <h3

                className="
                text-xl
                font-bold
                mb-5
                "

              >

                {column.title}

              </h3>



              <div

                className="
                flex
                flex-col
                gap-4
                "

              >


                {

                column.links.map((link)=>(


                  <Link

                    key={link.href}

                    href={link.href}

                    className="
                    text-gray-400
                    hover:text-white
                    transition
                    "

                  >

                    {link.name}

                  </Link>


                ))}


              </div>


            </div>


          ))}



        </div>





        <div

          className="
          border-t
          border-white/10
          mt-12
          pt-8
          text-center
          text-gray-500
          "

        >

          © 2026 OmFood. All rights reserved.

        </div>



      </div>



    </footer>


  );

}
