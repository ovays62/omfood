"use client";

import {motion} from "framer-motion";


export default function Navbar(){

return (

<motion.nav

initial={{
opacity:0,
y:-40
}}

animate={{
opacity:1,
y:0
}}

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
items-center
justify-between
z-50
"

>


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

<span>خانه</span>
<span>منو</span>
<span>سازنده غذا</span>
<span>AI Chef</span>

</div>


<button className="
btn-primary
">
ورود
</button>


</motion.nav>

)

}
