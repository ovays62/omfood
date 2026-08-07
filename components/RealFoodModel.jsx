"use client";


import { useGLTF } from "@react-three/drei";



export default function RealFoodModel({

model

}){


const {scene} = useGLTF(model);



return (

<primitive

object={scene}

scale={1.5}

/>


);


}



useGLTF.preload(

"/models/pizza.glb"

);
