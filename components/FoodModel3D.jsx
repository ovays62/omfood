"use client";


import { useGLTF } from "@react-three/drei";

import { useEffect } from "react";



export default function FoodModel3D({

model,

ingredients=[]

}){



const {scene} = useGLTF(model);





useEffect(()=>{


scene.traverse((child)=>{



if(child.isMesh){



// پنیر

if(
child.name
.includes("Cheese")
){


child.visible =

ingredients.some(

item=>item.id==="cheese"

);


}





// گوشت

if(
child.name
.includes("Meat")
){


child.visible =

ingredients.some(

item=>item.id==="meat"

);


}






// قارچ

if(
child.name
.includes("Mushroom")
){


child.visible =

ingredients.some(

item=>item.id==="mushroom"

);


}





}



});



},[ingredients,scene]);






return (


<primitive

object={scene}

/>


);


}



useGLTF.preload(

"/models/pizza.glb"

);
