"use client";


import Link from "next/link";



const stats = [

{

title:"سفارش‌ها",

value:"128"

},

{

title:"کاربران",

value:"540"

},

{

title:"غذاها",

value:"36"

}


];





export default function AdminPage(){



return (


<main

className="
min-h-screen
galaxy-bg
px-6
pt-32
pb-20
"

>



<div

className="
max-w-7xl
mx-auto
"

>



<h1

className="
text-6xl
font-black
mb-12
"

>

پنل مدیریت OmFood

</h1>







<div

className="
grid
md:grid-cols-3
gap-8
"

>


{

stats.map(item=>(


<div

key={item.title}

className="
glass
rounded-3xl
p-8
"

>


<h2

className="
text-gray-400
"

>

{item.title}

</h2>



<p

className="
text-5xl
font-black
gradient-text
mt-4
"

>

{item.value}

</p>



</div>


))


}



</div>







<div

className="
grid
md:grid-cols-3
gap-6
mt-12
"

>



<Link

href="/admin/foods"

className="
glass
rounded-3xl
p-8
text-2xl
font-bold
"

>

🍕

مدیریت غذاها

</Link>





<Link

href="/admin/orders"

className="
glass
rounded-3xl
p-8
text-2xl
font-bold
"

>

🛒

مدیریت سفارش‌ها

</Link>





<Link

href="/admin/users"

className="
glass
rounded-3xl
p-8
text-2xl
font-bold
"

>

👤

مدیریت کاربران

</Link>




</div>




</div>


</main>


);


}
