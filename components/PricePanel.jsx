"use client";



export default function PricePanel({

ingredients=[]

}){


  const basePrice =
    150000;



  const total =

    basePrice +

    ingredients.reduce(

      (sum,item)=>

        sum + item.price,

      0

    );




  return (

    <div

      className="
      glass
      rounded-3xl
      p-6
      "

    >

      <h3

        className="
        text-xl
        font-bold
        "

      >

        قیمت نهایی

      </h3>



      <p

        className="
        text-4xl
        font-black
        gradient-text
        mt-4
        "

      >

        {total.toLocaleString()}

        تومان

      </p>


    </div>


  );

}
