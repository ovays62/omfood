"use client";


import {useState} from "react";



export default function AdminFoods(){


const [foods,setFoods]=useState([

"Premium Pizza",

"AI Burger",

"Future Sandwich"

]);



return (

<main

className="
min-h-screen
galaxy-bg
px-6
pt-32
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
text-5xl
font-black
mb-10
"

>

مدیریت غذاها

</h1>





<div

className="
space-y-5
"

>


{

foods.map(food=>(


<div

key={food}

className="
glass
rounded-2xl
p-6
flex
justify-between
"

>


<span>

{food}

</span>



<button

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


</div>


</main>

);

}
