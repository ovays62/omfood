"use client";



export default function OrderSummary({

ingredients=[]

}){



return (


<div

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
mb-5
"

>

خلاصه سفارش


</h2>





{

ingredients.length===0

?

<p

className="
text-gray-400
"

>

هنوز ماده‌ای انتخاب نشده

</p>


:


<div

className="
space-y-3
"

>


{

ingredients.map((item)=>(


<div

key={item.name}

className="
flex
justify-between
bg-white/5
rounded-xl
p-3
"

>


<span>

{item.icon}

{item.name}

</span>



<span>

{item.price.toLocaleString()}

 تومان

</span>



</div>


))


}



</div>



}







<button

className="
btn-primary
w-full
mt-6
"

>

افزودن به سبد خرید 🛒


</button>




</div>


);


}
