import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";



const Notification = () => {
  return (
    <div>
        <div className='flex justify-between items-center bg-[#0066a1] text-white p-6 rounded-full'>
        <h1 className='flex items-center gap-2'>
           <strong> Slack is your digital HQ</strong> Meet the new features to help you work faster, smarter, and together.
           <span className='font-semibold ml-2 underline cursor-pointer'>Lets Go</span>
           <GoArrowRight size={20}/>
        </h1>
        <RxCross1 size={20}/>
        </div>
        
    </div>
  )
}

export default Notification