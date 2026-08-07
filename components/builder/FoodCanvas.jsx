"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, ShoppingCart } from "lucide-react";


const ingredients = [
  {
    id: "cheese",
    name: "پنیر",
    emoji: "🧀",
    price: 20,
  },
  {
    id: "pepperoni",
    name: "پپرونی",
    emoji: "🍖",
    price: 35,
  },
  {
    id: "mushroom",
    name: "قارچ",
    emoji: "🍄",
    price: 25,
  },
  {
    id: "olive",
    name: "زیتون",
    emoji: "🫒",
    price: 15,
  },
  {
    id: "tomato",
    name: "گوجه",
    emoji: "🍅",
    price: 10,
  },
];


export default function FoodCanvas() {


  const canvasRef = useRef(null);


  const [items,setItems] = useState([]);


  const [price,setPrice] = useState(100);


  const [drag,setDrag] = useState(null);



  useEffect(()=>{

    draw();

  },[items]);



  function draw(){

    const canvas = canvasRef.current;

    if(!canvas) return;


    const ctx = canvas.getContext("2d");


    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );



    // background

    ctx.fillStyle="#111122";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );



    // pizza

    ctx.beginPath();

    ctx.arc(
      250,
      250,
      150,
      0,
      Math.PI*2
    );

    ctx.fillStyle="#d89035";

    ctx.fill();



    ctx.beginPath();

    ctx.arc(
      250,
      250,
      125,
      0,
      Math.PI*2
    );

    ctx.fillStyle="#ffdd8a";

    ctx.fill();



    // ingredients

    items.forEach(item=>{


      ctx.font="40px Arial";

      ctx.fillText(
        item.emoji,
        item.x,
        item.y
      );


    });



  }




  function addIngredient(item){


    const newItem={

      ...item,

      x:
      210+
      Math.random()*80,

      y:
      220+
      Math.random()*80

    };


    setItems([
      ...items,
      newItem
    ]);


    setPrice(
      price+
      item.price
    );


  }





  function clearFood(){

    setItems([]);

    setPrice(100);

  }





  function handleMove(e){


    if(!drag)
      return;


    const rect =
      canvasRef.current
      .getBoundingClientRect();



    setItems(prev=>

      prev.map((item,index)=>

        index===drag.index

        ?

        {

          ...item,

          x:
          e.clientX-
          rect.left,

          y:
          e.clientY-
          rect.top

        }

        :

        item

      )

    );


  }





  function handleDown(index){

    setDrag({
      index
    });

  }





  function handleUp(){

    setDrag(null);

  }





return (

<div className="w-full min-h-screen galaxy-bg p-5">


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
glass
rounded-3xl
p-5
max-w-5xl
mx-auto
"

>


<h1

className="
text-4xl
font-bold
gradient-text
text-center
mb-5
"

>

🍕 ساخت غذای من

</h1>



<div

className="
flex
flex-col
lg:flex-row
gap-5
"

>


<div>


<canvas

ref={canvasRef}

width={500}

height={500}

onMouseMove={handleMove}

onMouseUp={handleUp}

className="
rounded-3xl
border
border-white/20
shadow-xl
"

 />



</div>





<div

className="
glass
rounded-3xl
p-5
flex-1
"

>


<h2 className="
text-xl
mb-4
">

مواد اولیه

</h2>



<div className="
grid
grid-cols-2
gap-3
">


{

ingredients.map(item=>(


<button

key={item.id}

onClick={()=>addIngredient(item)}

className="
glass
rounded-xl
p-3
hover:scale-105
transition
"

>


<div className="text-3xl">

{item.emoji}

</div>


<div>

{item.name}

</div>


<div>

+{item.price} تومان

</div>


</button>


))

}


</div>






<div

className="
mt-6
text-xl
"

>

💰 قیمت:

<span className="
gradient-text
font-bold
">

 {price}

</span>

 تومان

</div>





<button

onClick={clearFood}

className="
mt-5
w-full
bg-red-500/30
rounded-xl
p-3
flex
items-center
justify-center
gap-2
"

>

<Trash2 size={20}/>

پاک کردن

</button>





<button

className="
mt-3
w-full
btn-primary
flex
justify-center
gap-2
"

>

<ShoppingCart/>

افزودن به سبد

</button>



</div>


</div>


</motion.div>


</div>


);


}
