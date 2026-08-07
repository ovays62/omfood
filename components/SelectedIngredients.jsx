"use client";


export default function SelectedIngredients({

items=[]

}){


return (

<div

className="
absolute
top-5
left-5
glass
rounded-2xl
p-4
"

>


<h3

className="
font-bold
mb-3
"

>

مواد فعال:

</h3>



{

items.map(item=>(


<div

key={item.id}

className="
text-sm
"

>

{item.icon}

{item.name}

</div>


))


}


</div>


);


}
