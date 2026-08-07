"use client";


import { Search, X } from "lucide-react";
import { useState } from "react";



export default function SearchBar({
  onSearch
}){


  const [value,setValue] = useState("");



  function handleChange(e){


    const text = e.target.value;


    setValue(text);



    if(onSearch){

      onSearch(text);

    }


  }





  function clearSearch(){


    setValue("");



    if(onSearch){

      onSearch("");

    }


  }





  return (

    <div

      className="
      w-full
      max-w-3xl
      mx-auto
      "

    >


      <div

        className="
        glass
        rounded-2xl
        flex
        items-center
        px-5
        py-4
        border
        border-white/10
        "

      >



        <Search

          size={24}

          className="
          text-gray-400
          "

        />





        <input


          value={value}


          onChange={handleChange}


          placeholder="جستجوی غذا..."

          className="
          flex-1
          bg-transparent
          outline-none
          px-4
          text-white
          placeholder:text-gray-500
          "

        />





        {

        value &&

        <button

          onClick={clearSearch}

          className="
          text-gray-400
          hover:text-white
          transition
          "

        >

          <X size={22}/>


        </button>


        }



      </div>


    </div>


  );

}
