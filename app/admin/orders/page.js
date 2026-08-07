"use client";


import {useState} from "react";



export default function AdminOrders(){



const [orders,setOrders] = useState([


{

id:"#OM1024",

customer:"Omid",

total:550000,

status:"در انتظار"

},


{

id:"#OM1025",

customer:"Ali",

total:320000,

status:"در حال آماده سازی"

},


{

id:"#OM1026",

customer:"Sara",

total:280000,

status:"ارسال شده"

}


]);







const statuses=[

"در انتظار",

"در حال آماده سازی",

"ارسال شده",

"تحویل شده"

];








function changeStatus(id,status){


setOrders(

orders.map(order=>


order.id===id

?

{

...order,

status

}

:

order


)


);


}







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
max-w-6xl
mx-auto
"

>



<h1

className="
text-5xl
font-black
mb-12
"

>

مدیریت سفارش‌ها

</h1>






<div

className="
space-y-6
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


<div

className="
flex
justify-between
items-center
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




<span

className="
gradient-text
font-bold
"

>

{order.total.toLocaleString()}

تومان

</span>



</div>





<p

className="
mt-4
"

>

مشتری:

{order.customer}

</p>







<select


value={order.status}


onChange={(e)=>

changeStatus(

order.id,

e.target.value

)

}



className="
mt-5
w-full
p-4
rounded-xl
bg-white/10
"

>


{

statuses.map(status=>(


<option

key={status}

>

{status}

</option>


))


}



</select>





</div>


))


}



</div>



</div>


</main>


);


}
