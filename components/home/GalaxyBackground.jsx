"use client";

import { motion } from "framer-motion";

export default function GalaxyBackground(){

const stars = Array.from({length:120});

return (

<div className="
fixed
inset-0
-z-10
overflow-hidden
bg-[#050510]
">

{/* Purple Nebula */}
<div className="
absolute
top-[-200px]
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
bg-purple-600/30
blur-[180px]
rounded-full
"/>


{/* Cyan Nebula */}
<div className="
absolute
bottom-[-200px]
right-[-150px]
w-[500px]
h-[500px]
bg-cyan-500/20
blur-[160px]
rounded-full
"/>



{/* Stars */}

{
stars.map((_,i)=>(

<motion.div

key={i}

className="
absolute
w-[2px]
h-[2px]
bg-white
rounded-full
"

initial={{
opacity:0.2,
x:Math.random()*1200,
y:Math.random()*900
}}

animate={{
opacity:[0.2,1,0.2]
}}

transition={{
duration:
2+Math.random()*4,
repeat:Infinity
}}

/>

))
}


</div>

)

}
