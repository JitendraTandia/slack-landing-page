import React from 'react'
import Logo from "/assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from './Button';


const Header = () => {
  return (
    <nav className='flex justify-between items-center p-4 '>
        <div className='left flex gap-8 items-center'>
            <img className='cursor-pointer' width={150} src={Logo} alt="logo" />
            <div className='flex gap-4 font-semibold'>
                <div className='flex justify-center items-center cursor-pointer'>
                <h1>Product</h1>
                <RiArrowDropDownLine size={20}/>
                </div>
                <h1 className='cursor-pointer'>Enterprise</h1>
                <h1 className='cursor-pointer'>Resources</h1>
                <h1 className='cursor-pointer'>Pricing</h1>
            </div>
        </div>
        <div className='right flex gap-8 items-center justify-center'>
            <IoSearch size={25} className='cursor-pointer'/>
            <button className='cursor-pointer'>Sign in</button>
            <Button  text={"talk to sales"} className={"border-2 cursor-pointer rounded border-[#661f69] px-4 py-2 uppercase"}/>
            <Button text={"try for free"} className={"border cursor-pointer rounded px-4 py-2 uppercase bg-[#661f69] text-white"}/>
        </div>
    </nav>
  )
}

export default Header