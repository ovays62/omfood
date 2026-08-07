"use client";


import { useState } from "react";

import FoodCard from "../../components/FoodCard";

import SearchBar from "@/components/SearchBar";

import FilterPanel from "@/components/FilterPanel";

import { foods } from "@/lib/foods";



export default function ProductsPage(){



const [search,setSearch] = useState("");



const [filters,setFilters] = useState({

category:"همه",

price:1000000,

rating:0

});






const filteredFoods = foods.filter((food)=>{


const searchMatch =

food.name
.toLowerCase()
.includes(
search.toLowerCase()
);




const categoryMatch =

filters.category==="همه"

||

food.category===filters.category;





const priceMatch =

food.price <= filters.price;





const ratingMatch =

food.rating >= filters.rating;





return (

searchMatch &&

categoryMatch &&

priceMatch &&

ratingMatch

);


});







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


<section

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
mb-12
"

>


منوی OmFood


</h1>





<SearchBar

onSearch={setSearch}

/>






<div

className="
grid
lg:grid-cols-4
gap-8
mt-12
"

>




<aside

className="
lg:col-span-1
"

>


<FilterPanel

filters={filters}

setFilters={setFilters}

/>


</aside>








<div

className="
lg:col-span-3
grid
md:grid-cols-2
gap-8
"

>


{


filteredFoods.map((food)=>(


<FoodCard

key={food.id}

food={food}

/>


))


}



</div>





</div>



</section>



</main>


);


  }
