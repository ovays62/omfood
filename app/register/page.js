"use client";


import Link from "next/link";
import { useState } from "react";



export default function RegisterPage(){



const [form,setForm] = useState({

name:"",

email:"",

password:""


});






function update(e){


setForm({

...form,

[e.target.name]:

e.target.value

});


}





function register(e){


e.preventDefault();


console.log(form);



}





return (


<main

className="
min-h-screen
galaxy-bg
flex
items-center
justify-center
px-6
"

>


<div

className="
glass
rounded-[40px]
p-10
w-full
max-w-md
"

>



<h1

className="
text-5xl
font-black
text-center
"

>

ساخت حساب

</h1>






<form

onSubmit={register}

className="
mt-10
space-y-5
"

>



<input

name="name"

placeholder="نام"

onChange={update}

className="
w-full
p-4
rounded-xl
bg-white/10
"

 />





<input

name="email"

placeholder="ایمیل"

onChange={update}

className="
w-full
p-4
rounded-xl
bg-white/10
"

 />





<input

name="password"

type="password"

placeholder="رمز عبور"

onChange={update}

className="
w-full
p-4
rounded-xl
bg-white/10
"

 />







<button

className="
btn-primary
w-full
"

>

ثبت نام

</button>




</form>





<p

className="
text-center
mt-8
text-gray-400
"

>

حساب دارید؟

<Link

href="/login"

className="
text-violet-400
mr-2
"

>

ورود

</Link>


</p>



</div>


</main>


);


}
