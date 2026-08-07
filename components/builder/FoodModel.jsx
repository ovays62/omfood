"use client";

import {Float} from "@react-three/drei";


export default function FoodModel({
ingredients
}){


return (

<Float
speed={2}
rotationIntensity={1}
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



{
ingredients.includes("پنیر") &&

<mesh position={[0,0,0.25]}>

<cylinderGeometry
args={[
1.5,
1.5,
0.06,
64
]}
/>

<meshStandardMaterial
color="#fde047"
/>

</mesh>

}



{
ingredients.includes("گوشت") &&

<mesh position={[0,0,0.35]}>

<cylinderGeometry
args={[
1.2,
1.2,
0.15,
64
]}
/>

<meshStandardMaterial
color="#7f1d1d"
/>

</mesh>

}


</Float>

)

}
