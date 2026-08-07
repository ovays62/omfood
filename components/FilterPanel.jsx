"use client";


import { SlidersHorizontal } from "lucide-react";



export default function FilterPanel({

  filters,
  setFilters

}){


  const categories = [

    "همه",
    "پیتزا",
    "برگر",
    "ساندویچ",
    "دسر"

  ];



  function updateFilter(
    key,
    value
  ){

    setFilters({

      ...filters,

      [key]:value

    });

  }



  return (

    <div

      className="
      glass
      rounded-3xl
      p-6
      "

    >



      <div

        className="
        flex
        items-center
        gap-3
        mb-6
        "

      >

        <SlidersHorizontal/>

        <h2

          className="
          text-xl
          font-bold
          "

        >

          فیلتر غذا

        </h2>


      </div>





      <div

        className="
        space-y-6
        "

      >


        <div>


          <label
            className="
            block
            mb-3
            text-gray-300
            "
          >

            دسته‌بندی

          </label>



          <select

            value={filters.category}

            onChange={(e)=>
              updateFilter(
                "category",
                e.target.value
              )
            }


            className="
            w-full
            bg-black/30
            rounded-xl
            p-3
            outline-none
            "

          >


            {

            categories.map((cat)=>(


              <option

                key={cat}

                value={cat}

              >

                {cat}

              </option>


            ))

            }


          </select>


        </div>






        <div>


          <label
            className="
            block
            mb-3
            text-gray-300
            "
          >

            حداکثر قیمت

          </label>



          <input

            type="range"

            min="50000"

            max="1000000"

            step="50000"

            value={filters.price}

            onChange={(e)=>
              updateFilter(
                "price",
                e.target.value
              )
            }

            className="
            w-full
            "

          />



          <p

            className="
            mt-2
            text-gray-400
            "

          >

            {filters.price}
            تومان

          </p>


        </div>





        <div>


          <label
            className="
            block
            mb-3
            text-gray-300
            "
          >

            حداقل امتیاز

          </label>


          <select

            value={filters.rating}

            onChange={(e)=>
              updateFilter(
                "rating",
                e.target.value
              )
            }


            className="
            w-full
            bg-black/30
            rounded-xl
            p-3
            "

          >

            <option value="0">
              همه
            </option>


            <option value="4">
              بالای ۴ ⭐
            </option>


            <option value="4.5">
              بالای ۴.۵ ⭐
            </option>


          </select>


        </div>



      </div>


    </div>


  );

}
