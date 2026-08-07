"use client";

import { motion } from "framer-motion";

export default function Hero(){

return (

<section className="
min-h-screen
flex
items-center
justify-center
text-center
px-5
">


<div>


<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="
text-5xl
md:text-7xl
font-black
gradient-text
">

غذای آینده را
<br/>
خودت بساز

</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.4}}
className="
mt-6
text-xl
text-white/70
">

با OmFood غذا را طراحی کن،
بساز و سفارش بده 🚀

</motion.p>


<div className="mt-10 flex gap-5 justify-center">

<button className="btn-primary">
🍕 ساخت غذای من
</button>


<button className="
glass
px-8
py-4
rounded-2xl
">
مشاهده منو
</button>

</div>


</div>


</section>

)

}
