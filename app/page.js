"use client";

import { motion } from "framer-motion";

export default function Home(){

return (
<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>
<h1>
OmFood
</h1>
</motion.div>
)

}
