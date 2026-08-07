"use client";


import {Canvas} from "@react-three/fiber";

import {

OrbitControls,

Environment

} from "@react-three/drei";


import RealFoodModel from "./RealFoodModel";




export default function FoodViewer3D(){



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

position:[

0,

2,

5

]

}}

>


<ambientLight

intensity={1.5}

/>



<directionalLight

position={[

5,

5,

5

]}

/>




<RealFoodModel

model="/models/pizza.glb"

/>





<OrbitControls

enableZoom

enablePan

/>





<Environment

preset="city"

/>



</Canvas>



</div>



);


}
