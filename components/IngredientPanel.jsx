"use client";


const ingredients = [

  {
    name:"پنیر",
    icon:"🧀",
    price:30000
  },

  {
    name:"قارچ",
    icon:"🍄",
    price:25000
  },

  {
    name:"گوشت",
    icon:"🥩",
    price:70000
  },

  {
    name:"زیتون",
    icon:"🫒",
    price:20000
  }

];



export default function IngredientPanel({

selected,

setSelected

}){



  function toggle(item){


    const exists =
      selected.find(
        x=>x.name===item.name
      );


    if(exists){


      setSelected(

        selected.filter(
          x=>x.name!==item.name
        )

      );


    }

    else{


      setSelected([
        ...selected,
        item
      ]);


    }


  }





  return (

    <div

      className="
      glass
      rounded-3xl
      p-6
      "

    >


      <h2

        className="
        text-2xl
        font-bold
        mb-6
        "

      >

        مواد اولیه

      </h2>



      <div

        className="
        grid
        grid-cols-2
        gap-4
        "

      >


      {

      ingredients.map(item=>(


        <button

          key={item.name}

          onClick={()=>toggle(item)}

          className={`

          p-4
          rounded-2xl
          border
          transition

          ${
          selected.some(
            x=>x.name===item.name
          )

          ?

          "bg-violet-600/40 border-violet-400"

          :

          "bg-white/5 border-white/10"

          }

          `}

        >

          <div className="text-3xl">

            {item.icon}

          </div>


          <div>

            {item.name}

          </div>


          <small>

            {item.price}
            تومان

          </small>


        </button>


      ))

      }


      </div>


    </div>


  );

}
