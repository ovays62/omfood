"use client";


import {useState} from "react";

import FoodCanvas from "@/components/builder/FoodCanvas";

import IngredientPanel 
from "@/components/builder/IngredientPanel";


export default function Builder(){


const [ingredients,setIngredients]
=
useState([]);


return (

<main className="
min-h-screen
pt-32
px-5
galaxy-bg
">


<h1 className="
text-5xl
font-black
gradient-text
text-center
mb-10
">

ساخت غذای من 🍕

</h1>


<FoodCanvas
ingredients={ingredients}
/>


<IngredientPanel

selected={ingredients}

setSelected={setIngredients}

/>


</main>

)

  }
