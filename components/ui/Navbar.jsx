"use client";

import { motion } from "framer-motion";

export default function Navbar(){

return (

<motion.nav
initial={{y:-50,opacity:0}}
animate={{y:0,opacity:1}}
className="
fixed
top-5
left-1/2
-translate-x-1/2
w-[90%]
max-w-6xl
glass
rounded-3xl
px-6
py-4
flex
justify-between
items-center
z-50
">

<h1 className="
text-3xl
font-black
gradient-text
">
OmFood
</h1>


<div className="
hidden
md:flex
gap-8
text-white/80
">

<a>خانه</a>
<a>منو</a>
<a>سازنده غذا</a>
<a>AI Chef</a>

</div>


<button
className="
btn-primary
">
ورود
</button>


</motion.nav>

)

}
