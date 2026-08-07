"use client";

import {motion} from "framer-motion";


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

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
text-5xl
md:text-8xl
font-black
gradient-text
"

>

غذای آینده
<br/>
را بساز

</motion.h1>



<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.5
}}

className="
mt-8
text-xl
text-white/70
"

>

یک تجربه فست‌فود سه‌بعدی،
هوشمند و شخصی‌سازی شده

</motion.p>



<div className="
flex
justify-center
gap-5
mt-10
">


<button className="
btn-primary
text-lg
">

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
