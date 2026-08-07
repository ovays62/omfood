"use client";

const ingredients = [
  {
    name:"پنیر",
    price:30000
  },
  {
    name:"گوشت",
    price:50000
  },
  {
    name:"قارچ",
    price:20000
  },
  {
    name:"سس مخصوص",
    price:10000
  }
];


export default function IngredientPanel({
selected,
setSelected
}){


function toggle(item){

if(selected.includes(item)){
setSelected(
selected.filter(
x=>x!==item
)
)
}
else{

setSelected([
...selected,
item
])

}

}


return (

<div className="
glass
rounded-3xl
p-6
mt-8
">

<h2 className="
text-2xl
font-bold
mb-5
">
مواد اولیه
</h2>


<div className="
grid
grid-cols-2
gap-4
">


{
ingredients.map(item=>(

<button

key={item.name}

onClick={()=>
toggle(item)
}

className={`
p-4
rounded-2xl
transition
${
selected.includes(item)
?
"bg-purple-600"
:
"bg-white/10"
}
`}

>

{item.name}

<br/>

<span>
+{item.price.toLocaleString()}
</span>


</button>

))

}


</div>

</div>

)

}
