"use client";



const users=[


{

name:"Omid",

email:"omid@example.com"

},


{

name:"Ali",

email:"ali@example.com"

}


];




export default function AdminUsers(){



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
max-w-5xl
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

مدیریت کاربران

</h1>





<div

className="
space-y-5
"

>


{

users.map(user=>(


<div

key={user.email}

className="
glass
rounded-3xl
p-6
"

>


<h2

className="
text-xl
font-bold
"

>

{user.name}

</h2>



<p

className="
text-gray-400
"

>

{user.email}

</p>


</div>


))


}



</div>


</div>


</main>


);


}
