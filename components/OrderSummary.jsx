"use client";

import { motion } from "framer-motion";


export default function OrderSummary({
  foodType = "pizza",
  ingredients = [],
  totalPrice = 0,
  onSubmit
}) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      className="
      w-full
      p-6
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      text-white
      "

    >

      <h2
        className="
        text-2xl
        font-bold
        mb-5
        "
      >
        🛒 خلاصه سفارش
      </h2>



      <div
        className="
        space-y-3
        "
      >


        <div
          className="
          flex
          justify-between
          "
        >

          <span>
            نوع غذا:
          </span>

          <span
            className="
            font-bold
            "
          >
            {
              foodType === "pizza"
              ?
              "پیتزا"
              :
              foodType === "burger"
              ?
              "برگر"
              :
              "ساندویچ"
            }
          </span>

        </div>



        <div>

          <p>
            مواد انتخابی:
          </p>


          {

            ingredients.length === 0

            ?

            <p
              className="
              opacity-60
              mt-2
              "
            >
              چیزی انتخاب نشده
            </p>

            :

            <ul
              className="
              mt-2
              space-y-1
              "
            >

              {
                ingredients.map(
                  item=>(

                    <li
                      key={item.id}
                      className="
                      flex
                      justify-between
                      bg-black/20
                      rounded-xl
                      px-3
                      py-2
                      "
                    >

                      <span>
                        {item.name}
                      </span>


                      <span>
                        {
                          item.price.toLocaleString()
                        }
                      </span>


                    </li>

                  )
                )
              }


            </ul>

          }


        </div>




        <div
          className="
          border-t
          border-white/20
          pt-4
          mt-4
          flex
          justify-between
          text-xl
          font-bold
          "
        >

          <span>
            مبلغ:
          </span>


          <span
            className="
            text-yellow-300
            "
          >

            {
              totalPrice.toLocaleString()
            }

            {" "}
            تومان

          </span>


        </div>



      </div>




      <button

        onClick={onSubmit}

        className="
        mt-6
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        font-bold
        text-lg
        hover:scale-105
        transition
        "

      >

        ثبت سفارش 🚀

      </button>



    </motion.div>

  );

}
