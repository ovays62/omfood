"use client";


import {
Canvas
} from "@react-three/fiber";


import {
OrbitControls,
Environment
}
from "@react-three/drei";


import FoodModel from "./FoodModel";


export default function FoodCanvas(){

return (

<div
className="
h-[600px]
w-full
rounded-3xl
overflow-hidden
glass
"
>


<Canvas
camera={{
position:[0,0,5]
}}
>


<ambientLight
intensity={1}
/>


<directionalLight
position={[3,5,2]}
intensity={2}
/>


<FoodModel/>


<Environment
preset="city"
/>


<OrbitControls
enableZoom={true}
/>


</Canvas>


</div>

)

}
