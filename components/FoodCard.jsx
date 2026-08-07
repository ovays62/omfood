"use client";


import {motion} from "framer-motion";
import {
 Star,
 ShoppingCart
} from "lucide-react";



export default function FoodCard({

food

}){


return (


<motion.div


whileHover={{

y:-10,

scale:1.03

}}


className="
glass
rounded-3xl
overflow-hidden
"


>



<div

className="
h-64
overflow-hidden
"

>


<img

src={food.image}

alt={food.name}

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"

/>


</div>




<div

className="
p-6
"

>


<div

className="
flex
justify-between
"

>


<h3

className="
text-2xl
font-bold
"

>

{food.name}

</h3>



<div

className="
flex
gap-1
text-yellow-400
"

>

<Star
size={18}
fill="currentColor"
/>


{food.rating}


</div>



</div>




<p

className="
text-gray-400
mt-4
"

>

{food.description}

</p>




<div

className="
flex
justify-between
items-center
mt-6
"

>


<span

className="
gradient-text
font-black
text-xl
"

>

{food.price.toLocaleString()}

 تومان

</span>



<button

className="
btn-primary
flex
gap-2
items-center
"

>

<ShoppingCart size={18}/>

سفارش

</button>


</div>


</div>


</motion.div>


);


}
