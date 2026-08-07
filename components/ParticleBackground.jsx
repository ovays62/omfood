"use client";


import { useEffect, useState } from "react";



export default function ParticleBackground(){


  const [particles,setParticles] = useState([]);



  useEffect(()=>{


    const items = [];


    for(let i = 0; i < 80; i++){


      items.push({

        id:i,

        left:
          Math.random() * 100,

        top:
          Math.random() * 100,

        size:
          Math.random() * 4 + 1,

        duration:
          Math.random() * 10 + 5,

        delay:
          Math.random() * 5

      });


    }



    setParticles(items);



  },[]);






  return (

    <div

      className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      -z-10
      "

    >



      {

      particles.map((particle)=>(


        <span

          key={particle.id}

          className="
          absolute
          rounded-full
          bg-white
          opacity-40
          animate-float
          "

          style={{


            left:
              `${particle.left}%`,


            top:
              `${particle.top}%`,


            width:
              `${particle.size}px`,


            height:
              `${particle.size}px`,


            animationDuration:
              `${particle.duration}s`,


            animationDelay:
              `${particle.delay}s`


          }}

        />


      ))}



    </div>


  );

}
