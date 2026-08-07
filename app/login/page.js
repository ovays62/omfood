"use client";


import Link from "next/link";
import { useState } from "react";



export default function LoginPage(){


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");




function login(e){

e.preventDefault();


console.log({

email,

password

});


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

ورود

</h1>




<form

onSubmit={login}

className="
mt-10
space-y-5
"

>


<input


type="email"

placeholder="ایمیل"

value={email}

onChange={e=>setEmail(e.target.value)}

className="
w-full
p-4
rounded-xl
bg-white/10
outline-none
"

 />





<input


type="password"

placeholder="رمز عبور"

value={password}

onChange={e=>setPassword(e.target.value)}

className="
w-full
p-4
rounded-xl
bg-white/10
outline-none
"

 />






<button

className="
btn-primary
w-full
"

>

ورود به OmFood

</button>



</form>





<p

className="
text-center
mt-8
text-gray-400
"

>

حساب ندارید؟

<Link

href="/register"

className="
text-violet-400
mr-2
"

>

ثبت نام

</Link>


</p>



</div>


</main>


);


}
