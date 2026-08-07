"use client";


import { useState } from "react";


import FoodViewer3D from "@/components/FoodViewer3D";

import IngredientPanel from "@/components/IngredientPanel";

import PricePanel from "@/components/PricePanel";

import OrderSummary from "@/components/OrderSummary";



export default function BuilderPage(){



const [ingredients,setIngredients] = useState([]);





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
max-w-7xl
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


Food Builder


</h1>






<div

className="
grid
lg:grid-cols-2
gap-10
"

>





{/* 3D Viewer */}



<div>


<FoodViewer3D/>


</div>







{/* Controls */}



<div

className="
space-y-8
"

>


<IngredientPanel

selected={ingredients}

setSelected={setIngredients}

/>





<PricePanel

ingredients={ingredients}

/>





<OrderSummary

ingredients={ingredients}

/>



</div>





</div>



</div>



</main>


);


             }
