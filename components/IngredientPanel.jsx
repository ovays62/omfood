"use client";


import {ingredients} from "@/lib/ingredients";



export default function IngredientPanel({

selected,

setSelected

}){



function toggle(item){


const exists =

selected.find(

x=>x.id===item.id

);




if(exists){


setSelected(

selected.filter(

x=>x.id!==item.id

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

انتخاب مواد

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

key={item.id}

onClick={()=>toggle(item)}

className={`

rounded-2xl

p-4

border

transition


${

selected.some(

x=>x.id===item.id

)

?

"bg-violet-600/40 border-violet-400"

:

"bg-white/5 border-white/10"

}

`}

>


<div

className="
text-4xl
"

>

{item.icon}

</div>



<p>

{item.name}

</p>



<span

className="
text-sm
text-gray-400
"

>

{item.price.toLocaleString()}

تومان

</span>



</button>


))


}


</div>


</div>


);


}
