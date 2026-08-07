"use client";


const orders=[

{

id:"#OM1024",

status:"در حال آماده سازی",

time:"10 دقیقه پیش"

},

{

id:"#OM1020",

status:"تحویل داده شده",

time:"امروز"

}


];



export default function OrdersPage(){


return (

<main

className="
min-h-screen
galaxy-bg
px-6
pt-32
"

>


<div

className="
max-w-4xl
mx-auto
"

>


<h1

className="
text-5xl
font-black
mb-10
"

>

سفارش‌های من

</h1>




<div

className="
space-y-5
"

>


{

orders.map(order=>(


<div

key={order.id}

className="
glass
rounded-3xl
p-6
"

>


<h2

className="
text-2xl
font-bold
"

>

{order.id}

</h2>



<p

className="
mt-3
"

>

وضعیت:

{order.status}

</p>



<p

className="
text-gray-400
"

>

{order.time}

</p>


</div>


))


}


</div>


</div>


</main>


);


}
