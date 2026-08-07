"use client";

import { motion } from "framer-motion";


const products = [

{
name:"Pizza",
emoji:"🍕",
desc:"پیتزای کاملا شخصی سازی شده",
color:"purple"
},

{
name:"Burger",
emoji:"🍔",
desc:"برگر حرفه‌ای با مواد دلخواه",
color:"cyan"
},

{
name:"Sandwich",
emoji:"🥪",
desc:"ساندویچ ساخته شده توسط تو",
color:"purple"
}

];


export default function ProductPreview(){

return (

<section className="
py-20
px-5
max-w-7xl
mx-auto
">


<h2 className="
text-4xl
md:text-6xl
text-center
font-black
gradient-text
mb-16
">

غذای خودت را انتخاب کن

</h2>



<div className="
grid
md:grid-cols-3
gap-8
">


{
products.map((item,index)=>(


<motion.div

key={item.name}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.2
}}

whileHover={{
rotateY:15,
rotateX:10,
scale:1.05
}}

className="
glass
rounded-3xl
p-8
text-center
cursor-pointer
"

style={{
transformStyle:"preserve-3d"
}}

>


<div className="
text-8xl
mb-6
animate-float
">

{item.emoji}

</div>



<h3 className="
text-3xl
font-bold
text-white
">

{item.name}

</h3>


<p className="
text-white/60
mt-3
">

{item.desc}

</p>



<button className="
btn-primary
mt-8
">

ساختن

</button>


</motion.div>


))

}


</div>


</section>

)

}
