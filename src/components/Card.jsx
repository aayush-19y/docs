import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";


function Card() {
  return (
   
       <div className='w-60 h-72 rounded-[20px] bg-sky-200 bg-zinc-900/90 text-white p-5'  >
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full py-3 left-0'></div>
       </div>
    
  )
}

export default Card
