"use client";


import { useState } from "react";
import Link from "next/link";



const demoCart = [

  {

    id:1,

    name:
    "Premium Truffle Pizza",

    image:
    "/images/foods/truffle-pizza.webp",

    price:
    320000,

    quantity:
    1

  },


  {

    id:2,

    name:
    "AI Signature Burger",

    image:
    "/images/foods/signature-burger.webp",

    price:
    280000,

    quantity:
    1

  }


];





export default function CartPage(){



const [cart,setCart] = useState(demoCart);





function increase(id){


setCart(

cart.map(item=>

item.id===id

?

{

...item,

quantity:item.quantity+1

}

:

item

)

);


}






function decrease(id){


setCart(

cart.map(item=>

item.id===id

&& item.quantity>1

?

{

...item,

quantity:item.quantity-1

}

:

item

)

);


}






function remove(id){


setCart(

cart.filter(

item=>item.id!==id

)

);


}






const total =

cart.reduce(

(sum,item)=>

sum +

item.price *

item.quantity,

0

);







return (


<main

className="
min-h-screen
galaxy-bg
px-6
pt-32
pb-20
"

>



<div

className="
max-w-5xl
mx-auto
"

>



<h1

className="
text-6xl
font-black
text-center
mb-16
"

>

سبد خرید

</h1>







<div

className="
space-y-6
"

>


{


cart.map(item=>(


<div

key={item.id}

className="
glass
rounded-3xl
p-6
flex
flex-col
md:flex-row
gap-6
items-center
"

>




<img

src={item.image}

alt={item.name}

className="
w-40
h-40
rounded-2xl
object-cover
"

/>






<div

className="
flex-1
"

>


<h2

className="
text-2xl
font-bold
"

>

{item.name}

</h2>



<p

className="
mt-3
gradient-text
font-bold
"

>

{item.price.toLocaleString()}
تومان

</p>


</div>






<div

className="
flex
items-center
gap-4
"

>


<button

onClick={()=>decrease(item.id)}

className="
px-4
py-2
rounded-xl
bg-white/10
"

>

-

</button>




<span>

{item.quantity}

</span>




<button

onClick={()=>increase(item.id)}

className="
px-4
py-2
rounded-xl
bg-violet-600/40
"

>

+

</button>



</div>






<button

onClick={()=>remove(item.id)}

className="
text-red-400
"

>

حذف

</button>




</div>


))


}




</div>







<div

className="
glass
rounded-3xl
p-8
mt-10
"

>


<h2

className="
text-3xl
font-black
"

>

مبلغ نهایی:

</h2>



<p

className="
text-5xl
font-black
gradient-text
mt-5
"

>

{total.toLocaleString()}

تومان

</p>




<Link

href="/checkout"

className="
btn-primary
inline-block
mt-8
"

>

ادامه سفارش

</Link>



</div>




</div>


</main>


);


  }
