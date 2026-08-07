"use client";


import { useState } from "react";
import Link from "next/link";



export default function CheckoutPage(){


const [loading,setLoading] = useState(false);


const [success,setSuccess] = useState(false);





async function submitOrder(){


setLoading(true);



/*

بعداً اینجا به Cloudflare Worker وصل می‌شود:

fetch(
"https://api.omfood.com/orders"
)

*/


setTimeout(()=>{


setLoading(false);

setSuccess(true);


},1500);



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
max-w-3xl
mx-auto
"

>



<h1

className="
text-6xl
font-black
text-center
"

>

تکمیل سفارش

</h1>






<div

className="
glass
rounded-[40px]
p-10
mt-12
space-y-8
"

>



<div>


<label>

نام دریافت کننده

</label>


<input

className="
w-full
mt-3
p-4
rounded-xl
bg-white/10
"

placeholder="نام"

 />



</div>







<div>


<label>

آدرس

</label>


<textarea

className="
w-full
mt-3
p-4
rounded-xl
bg-white/10
"

placeholder="آدرس کامل"

 />



</div>






<div>


<label>

روش پرداخت

</label>



<select

className="
w-full
mt-3
p-4
rounded-xl
bg-white/10
"

>


<option>

کارت به کارت

</option>


<option>

پرداخت آنلاین

</option>



</select>


</div>







<button

onClick={submitOrder}

className="
btn-primary
w-full
"

>


{

loading

?

"در حال ثبت..."

:

"ثبت سفارش"

}



</button>






{

success &&


<div

className="
bg-green-500/20
rounded-xl
p-5
text-center
"

>


سفارش با موفقیت ثبت شد ✅


<br/>


شماره سفارش:

#OM1024


</div>



}



</div>



</div>


</main>


);


  }
