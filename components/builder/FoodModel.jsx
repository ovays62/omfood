"use client";

import { Float } from "@react-three/drei";


export default function FoodModel(){

return (

<Float
speed={2}
rotationIntensity={1}
floatIntensity={1}
>


<mesh>

<cylinderGeometry
args={[
1.8,
1.8,
0.3,
64
]}
/>


<meshStandardMaterial
color="#d97706"
/>


</mesh>


{/* Cheese */}

<mesh
position={[0,0,0.2]}
>

<cylinderGeometry
args={[
1.5,
1.5,
0.05,
64
]}
/>


<meshStandardMaterial
color="#facc15"
/>


</mesh>


</Float>

)

}
