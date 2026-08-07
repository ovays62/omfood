"use client";


import { useState } from "react";



const foods = [

  {

    name:
    "Premium Truffle Pizza",

    type:
    "ایتالیایی",

    price:
    320000

  },


  {

    name:
    "AI Signature Burger",

    type:
    "فست فود",

    price:
    280000

  },


  {

    name:
    "Healthy Sandwich",

    type:
    "سالم",

    price:
    220000

  }


];





export default function AIPage(){



const [taste,setTaste] = useState("");

const [budget,setBudget] = useState(300000);


const [result,setResult] = useState(null);






function generate(){



const food = foods.find(

item =>

item.price <= budget

);



setResult(food);



}





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
"

>

🤖 AI Chef

</h1>





<p

className="
text-center
text-gray-400
mt-6
text-lg
"

>

دستیار هوشمند انتخاب غذای شما

</p>








<div

className="
glass
rounded-[40px]
p-10
mt-12
space-y-8
"

>




<div>


<label

className="
block
mb-3
"

>

چه غذایی دوست داری؟

</label>



<select

value={taste}

onChange={
e=>setTaste(e.target.value)
}

className="
w-full
p-4
rounded-xl
bg-white/10
"

>


<option>

همه

</option>


<option>

فست فود

</option>


<option>

سالم

</option>


<option>

ایتالیایی

</option>


</select>


</div>







<div>


<label

className="
block
mb-3
"

>

بودجه شما:

</label>



<input

type="range"

min="100000"

max="1000000"

step="50000"

value={budget}

onChange={
e=>setBudget(
e.target.value
)
}

className="
w-full
"

/>



<p

className="
mt-3
gradient-text
font-bold
"

>

{Number(budget).toLocaleString()}

تومان

</p>



</div>






<button

onClick={generate}

className="
btn-primary
w-full
"

>

پیشنهاد AI

</button>





{

result &&

<div

className="
mt-10
bg-white/5
rounded-3xl
p-6
"

>


<h2

className="
text-3xl
font-bold
"

>

پیشنهاد من:

</h2>




<p

className="
text-2xl
mt-5
"

>

{result.name}

</p>



<p

className="
text-gray-400
mt-3
"

>

دسته:

{result.type}

</p>



<p

className="
gradient-text
mt-3
font-bold
"

>

{result.price.toLocaleString()}

تومان

</p>


</div>


}



</div>




</div>


</main>


);


  }
