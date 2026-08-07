"use client";


import { Points, PointMaterial } from "@react-three/drei";

import { useMemo } from "react";



export default function FoodParticles(){



const particles = useMemo(()=>{


const array=[];


for(
let i=0;
i<200;
i++
){


array.push(

(Math.random()-0.5)*5,

(Math.random()-0.5)*5,

(Math.random()-0.5)*5

);


}


return new Float32Array(array);


},[]);





return (


<Points

positions={particles}

>


<PointMaterial

size={0.03}

transparent

opacity={0.6}

color="#ffffff"

/>


</Points>


);


}
