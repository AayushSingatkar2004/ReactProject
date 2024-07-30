import React from 'react'
import logo from '../assets/logomain.png'
import vector from '../assets/vector.svg'
import search from '../assets/search.svg'
import bag from '../assets/bag.svg'
import acc from '../assets/acc.svg'
import location from '../assets/location.svg'
import line from '../assets/line.svg'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <div className='w-full flex items-center justify-between px-5 bg-slate-200 fixed top-0 '>
            <div className='flex items-center gap-20' > 
                <img className='img1 w-[80px] h-[70px]' src={logo} alt="" />
                <div className='flex hidden md:visible' >
                    <img src={location} alt="" className='w-[42px] h-[35px]' />
                    <img className='mt-8' src={line} alt="" />
                </div></div>
            <div className="items md:flex gap-4 items-center mr-5 hidden md:visible" >
                <img src={vector} alt="" className='w-[23px] h-[23px]' />
                <img src={search} alt="" className='w-[23px] h-[23px]' />
                <Link to="/cart"><img src={bag} alt="" className='w-[23px] h-[23px]' /></Link>
                <img src={acc} alt="" className='w-[23px] h-[23px]' />


            </div>
        </div>
        </>
    )

}

export default Navbar
