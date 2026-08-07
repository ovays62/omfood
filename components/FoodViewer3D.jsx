"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";

function Bread({ type }) {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color={
          type === "burger"
            ? "#d89b4a"
            : type === "sandwich"
            ? "#e8c27a"
            : "#f2d18b"
        }
      />
    </mesh>
  );
}

function Ingredients({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <mesh
          key={index}
          position={[
            0,
            0.2 + index * 0.12,
            0
          ]}
        >
          <torusGeometry
            args={[
              1.1 - index * 0.03,
              0.08,
              32,
              100
            ]}
          />

          <meshStandardMaterial
            color={item.color}
          />
        </mesh>
      ))}
    </>
  );
}


export default function FoodViewer3D({
  foodType = "pizza",
  ingredients = []
}) {

  return (
    <motion.div
      initial={{
        opacity:0,
        scale:0.8
      }}
      animate={{
        opacity:1,
        scale:1
      }}
      className="w-full h-[420px] rounded-3xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10"
    >

      <Canvas
        camera={{
          position:[0,2.8,5],
          fov:45
        }}
      >

        <ambientLight intensity={1}/>

        <directionalLight
          position={[5,5,5]}
          intensity={2}
        />


        <Bread type={foodType}/>

        <Ingredients
          items={ingredients}
        />


        <OrbitControls
          enableZoom
          autoRotate
          autoRotateSpeed={2}
        />


        <Environment preset="city"/>

      </Canvas>

    </motion.div>
  );
      }
