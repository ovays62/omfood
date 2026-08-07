"use client";


import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {


  return (

    <main className="relative min-h-screen overflow-hidden galaxy-bg">


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-purple-600/30
        blur-[150px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        bottom-10
        right-10
        w-[400px]
        h-[400px]
        bg-cyan-500/20
        blur-[130px]
        rounded-full
        "
      />



      {/* Hero */}


      <section
        className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        "
      >


        <div
          className="
          max-w-5xl
          text-center
          "
        >



          <motion.h1

            initial={{
              opacity:0,
              y:50
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
            text-6xl
            md:text-8xl
            font-black
            leading-tight
            "

          >

            ساخت غذای آینده

            <br />


            <span
              className="
              gradient-text
              "
            >

              با OmFood

            </span>


          </motion.h1>





          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.5
            }}

            className="
            mt-8
            text-lg
            md:text-xl
            text-gray-300
            max-w-3xl
            mx-auto
            leading-8
            "

          >

            پلتفرم هوشمند سفارش غذا،
            طراحی سه‌بعدی غذا و تجربه‌ای متفاوت
            با کمک هوش مصنوعی.

          </motion.p>





          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              delay:0.8
            }}

            className="
            mt-12
            flex
            justify-center
            gap-5
            flex-wrap
            "

          >


            <Link

              href="/builder"

              className="
              btn-primary
              glow-purple
              "

            >

              شروع ساخت غذا 🍕

            </Link>




            <Link

              href="/products"

              className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-xl
              hover:bg-white/10
              transition
              "

            >

              مشاهده غذاها

            </Link>


          </motion.div>



        </div>


      </section>
      {/* Featured Foods */}

      <section
        className="
        relative
        z-10
        py-32
        px-6
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          "
        >


          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            className="
            text-center
            mb-16
            "

          >

            <h2
              className="
              text-5xl
              font-black
              "
            >

              غذاهای ویژه OmFood

            </h2>


            <p
              className="
              text-gray-400
              mt-5
              text-lg
              "
            >

              تجربه‌ای متفاوت از سفارش غذا

            </p>


          </motion.div>





          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >


            {


            [

              {
                name:"Galaxy Pizza",
                icon:"🍕",
                description:
                "پیتزای هوشمند با مواد انتخابی شما"
              },


              {
                name:"AI Burger",
                icon:"🍔",
                description:
                "برگر اختصاصی ساخته شده با AI"
              },


              {
                name:"Future Sandwich",
                icon:"🥪",
                description:
                "ساندویچ نسل آینده"
              }


            ].map((food,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index*0.15
                }}

                viewport={{
                  once:true
                }}

                className="
                glass
                rounded-3xl
                p-8
                hover:-translate-y-3
                transition
                duration-300
                "

              >


                <div
                  className="
                  text-7xl
                  mb-6
                  "
                >

                  {food.icon}

                </div>



                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >

                  {food.name}

                </h3>



                <p
                  className="
                  mt-4
                  text-gray-400
                  leading-7
                  "
                >

                  {food.description}

                </p>



                <button

                  className="
                  mt-6
                  px-6
                  py-3
                  rounded-xl
                  bg-violet-600/30
                  border
                  border-violet-400/30
                  hover:bg-violet-600/50
                  transition
                  "

                >

                  ساخت این غذا

                </button>



              </motion.div>


            ))}


          </div>


        </div>


      </section>





      {/* AI Chef Section */}


      <section
        className="
        relative
        z-10
        py-32
        px-6
        "
      >


        <div
          className="
          max-w-6xl
          mx-auto
          glass
          rounded-[40px]
          p-10
          md:p-16
          "
        >


          <div
            className="
            grid
            md:grid-cols-2
            gap-12
            items-center
            "
          >


            <div>


              <h2
                className="
                text-5xl
                font-black
                "
              >

                🤖 AI Chef

              </h2>



              <p
                className="
                mt-6
                text-gray-300
                text-lg
                leading-8
                "
              >

                هوش مصنوعی OmFood سلیقه،
                بودجه و علاقه‌های شما را بررسی می‌کند
                و بهترین پیشنهاد غذایی را ارائه می‌دهد.

              </p>



              <Link

                href="/ai"

                className="
                inline-block
                mt-8
                btn-primary
                "

              >

                تجربه AI Chef

              </Link>


            </div>
            <motion.div

              initial={{
                opacity:0,
                scale:0.8
              }}

              whileInView={{
                opacity:1,
                scale:1
              }}

              viewport={{
                once:true
              }}

              className="
              h-80
              rounded-3xl
              bg-gradient-to-br
              from-violet-600/30
              to-cyan-500/20
              flex
              items-center
              justify-center
              border
              border-white/10
              "

            >


              <div
                className="
                text-9xl
                animate-float
                "
              >

                🤖🍕

              </div>


            </motion.div>


          </div>


        </div>


      </section>





      {/* 3D Builder Preview */}


      <section

        className="
        relative
        z-10
        py-32
        px-6
        "

      >


        <div

          className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
          items-center
          "

        >



          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

          >


            <h2

              className="
              text-5xl
              font-black
              "

            >

              🎮 Food Builder سه‌بعدی

            </h2>



            <p

              className="
              mt-6
              text-gray-300
              text-lg
              leading-8
              "

            >

              غذای خودت را بساز،
              مواد اولیه را انتخاب کن،
              تغییرات را به صورت سه‌بعدی ببین
              و بعد سفارش بده.

            </p>




            <ul

              className="
              mt-8
              space-y-4
              text-gray-300
              "

            >

              <li>
                ✨ نمایش سه‌بعدی غذا
              </li>

              <li>
                ✨ انتخاب مواد اولیه
              </li>

              <li>
                ✨ قیمت لحظه‌ای
              </li>

              <li>
                ✨ ذخیره سفارش
              </li>


            </ul>




            <Link

              href="/builder"

              className="
              inline-block
              mt-10
              btn-primary
              "

            >

              ورود به Builder

            </Link>



          </motion.div>






          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            viewport={{
              once:true
            }}

            className="
            h-[400px]
            rounded-[40px]
            glass
            flex
            items-center
            justify-center
            "

          >


            <div

              className="
              text-[140px]
              animate-float
              "

            >

              🍕

            </div>



          </motion.div>




        </div>


      </section>
      {/* Features Section */}


      <section

        className="
        relative
        z-10
        py-32
        px-6
        "

      >


        <div

          className="
          max-w-7xl
          mx-auto
          "

        >



          <h2

            className="
            text-center
            text-5xl
            font-black
            mb-16
            "

          >

            چرا OmFood؟

          </h2>




          <div

            className="
            grid
            md:grid-cols-3
            gap-8
            "

          >



            {[

              {
                icon:"⚡",
                title:"سرعت بالا",
                text:"ساخته شده برای تجربه سریع و روان"
              },


              {
                icon:"🌌",
                title:"تجربه متفاوت",
                text:"طراحی فضایی و نسل جدید سفارش غذا"
              },


              {
                icon:"🤖",
                title:"هوش مصنوعی",
                text:"پیشنهاد غذا با سیستم هوشمند"
              }


            ].map((item,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index * .15
                }}

                viewport={{
                  once:true
                }}

                className="
                glass
                rounded-3xl
                p-8
                text-center
                "

              >


                <div
                  className="
                  text-6xl
                  "
                >

                  {item.icon}

                </div>



                <h3

                  className="
                  text-2xl
                  font-bold
                  mt-6
                  "

                >

                  {item.title}

                </h3>



                <p

                  className="
                  mt-4
                  text-gray-400
                  "

                >

                  {item.text}

                </p>


              </motion.div>


            ))}



          </div>


        </div>


      </section>





      {/* Final CTA */}


      <section

        className="
        relative
        z-10
        py-32
        px-6
        "

      >


        <div

          className="
          max-w-5xl
          mx-auto
          text-center
          glass
          rounded-[40px]
          p-12
          "

        >


          <h2

            className="
            text-5xl
            font-black
            "

          >

            آماده ساخت غذای آینده هستی؟ 🚀

          </h2>



          <p

            className="
            mt-6
            text-gray-300
            text-lg
            "

          >

            با OmFood تجربه‌ای جدید از غذا را شروع کن.

          </p>



          <Link

            href="/builder"

            className="
            inline-block
            mt-10
            btn-primary
            "

          >

            شروع کنید

          </Link>


        </div>


      </section>




    </main>

  );

}
