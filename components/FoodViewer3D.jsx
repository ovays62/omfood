"use client";


import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment
} from "@react-three/drei";



function FoodModel(){


  return (

    <mesh

      rotation={[
        0,
        Math.PI / 4,
        0
      ]}

    >

      <sphereGeometry
        args={[
          1.5,
          64,
          64
        ]}
      />


      <meshStandardMaterial

        color="#ff7b00"

        metalness={0.2}

        roughness={0.5}

      />


    </mesh>

  );

}




export default function FoodViewer3D(){



  return (

    <div

      className="
      h-[500px]
      rounded-[40px]
      overflow-hidden
      glass
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
          intensity={1}
        />


        <directionalLight

          position={[
            5,
            5,
            5
          ]}

          intensity={2}

        />



        <FoodModel/>



        <OrbitControls/>



        <Environment preset="city"/>



      </Canvas>



    </div>


  );

}
