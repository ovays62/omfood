"use client";

import { motion } from "framer-motion";


const ingredientsList = [
  {
    id:"cheese",
    name:"پنیر موزارلا",
    price:25000,
    color:"#ffd966"
  },
  {
    id:"mushroom",
    name:"قارچ",
    price:15000,
    color:"#c9b08b"
  },
  {
    id:"pepper",
    name:"فلفل دلمه‌ای",
    price:10000,
    color:"#48b848"
  },
  {
    id:"olive",
    name:"زیتون",
    price:12000,
    color:"#222222"
  },
  {
    id:"meat",
    name:"گوشت",
    price:35000,
    color:"#b33a2e"
  }
];


export default function IngredientPanel({
  selectedIngredients=[],
  setSelectedIngredients
}) {


  function toggleIngredient(item){

    const exists =
      selectedIngredients.find(
        x=>x.id===item.id
      );


    if(exists){

      setSelectedIngredients(
        selectedIngredients.filter(
          x=>x.id!==item.id
        )
      );

    }else{

      setSelectedIngredients([
        ...selectedIngredients,
        item
      ]);

    }

  }



  return (

    <div
      className="
      w-full
      p-5
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      "
    >

      <h2
        className="
        text-xl
        font-bold
        text-white
        mb-4
        "
      >
        انتخاب مواد اولیه 🍕
      </h2>


      <div
        className="
        grid
        grid-cols-2
        gap-3
        "
      >

        {
          ingredientsList.map(item=>{

            const active =
              selectedIngredients.some(
                x=>x.id===item.id
              );


            return (

              <motion.button

                whileTap={{
                  scale:.9
                }}

                key={item.id}

                onClick={()=>
                  toggleIngredient(item)
                }


                className={`
                p-4
                rounded-2xl
                text-right
                transition
                ${
                  active
                  ?
                  "bg-purple-600 text-white"
                  :
                  "bg-black/30 text-gray-200"
                }
                `}

              >

                <div
                  className="
                  font-bold
                  "
                >
                  {item.name}
                </div>


                <div
                  className="
                  text-sm
                  opacity-80
                  mt-1
                  "
                >
                  {item.price.toLocaleString()}
                  {" "}
                  تومان
                </div>


              </motion.button>

            );

          })
        }

      </div>


    </div>

  );
}
