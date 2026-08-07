"use client";


import { useFrame } from "@react-three/fiber";



export default function CameraAnimation(){



useFrame(({camera})=>{


camera.position.x +=

Math.sin(
Date.now()*0.0005
)
*
0.002;



camera.lookAt(0,0,0);



});



return null;


}
