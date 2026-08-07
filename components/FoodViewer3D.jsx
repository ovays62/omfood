"use client";


import {Canvas} from "@react-three/fiber";

import {

OrbitControls,

Environment

} from "@react-three/drei";


import FoodModel3D from "./FoodModel3D";




export default function FoodViewer3D({

ingredients=[]

}){



return (


<div

className="
h-[600px]
glass
rounded-[40px]
overflow-hidden
"

>



<Canvas

camera={{

position:[0,2,5]

}}

>



<ambientLight

intensity={1.5}

/>




<FoodModel3D

model="/models/pizza.glb"

ingredients={ingredients}

/>





<OrbitControls

enableZoom

/>



<Environment

preset="city"

/>



</Canvas>



</div>



);


}
