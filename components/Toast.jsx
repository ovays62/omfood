"use client";


export default function Toast({

message,

type="success"

}){


  if(!message)
    return null;



  return (

    <div

      className={`
      
      fixed
      bottom-8
      right-8
      z-50
      px-6
      py-4
      rounded-2xl
      glass
      
      ${
        type==="error"
        ?
        "border-red-500/50"
        :
        "border-green-500/50"

      }

      `}

    >

      {message}


    </div>


  );

}
