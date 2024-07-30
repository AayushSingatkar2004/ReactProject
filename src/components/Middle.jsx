import React from 'react'
import img2 from '../assets/img2.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import i1 from '../assets/i1-2.png'
import kurti from '../assets/kurti-2.png'
import casual from '../assets/casual.png'
import saree from '../assets/saree.jpeg'
import shorts from '../assets/shorts.jpeg'

import first from '../assets/10.png'
import calvin from '../assets/calvinKlein.png'
import ler from '../assets/ler.jpeg'
import vimy from '../assets/vimy.jpeg'
import { useState, useRef } from 'react'

const ITEM_WIDTH = 800;

const Middle = () => {
    const [scrollposition, setScrollposition] = useState(0)

  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {

    const newScrollPosition = scrollposition + scrollAmount;
    setScrollposition(newScrollPosition)

    containerRef.current.scrollLeft = newScrollPosition;
  }
  return (
    <>
    <div className='flex justify-center h-[552px] m-24'>
        <img src={img2} alt="" />
      </div>
      <div className='flex justify-between mx-40'>
        <h2 className='font-bold text-xl'>Choose that you want to wear</h2>
        <div className="arrow flex gap-1">
          <img onClick={() => { handleScroll(-ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={left} alt="" />
          <img onClick={() => { handleScroll(ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={right} alt="" />
        </div>
      </div>
      <div ref={containerRef} className="flex gap-20 w-[80%] justify-start items-center m-auto overflow-x-auto scrollbar-hidden py-14">
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img src={i1} alt="" /></div>
          <h3 className='text-xl font-bold'>Shirts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={kurti} alt="" /></div>
          <h3 className='text-xl font-bold'>Kurti</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={casual} alt="" /></div>
          <h3 className='text-xl font-bold'>Casual's</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={saree} alt="" /></div>
          <h3 className='text-xl font-bold'>Saree</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={shorts} alt="" /></div>
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={shorts} alt="" /></div>
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={shorts} alt="" /></div>
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden'><img className='' src={shorts} alt="" /></div>
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
      </div>


      <div className='flex justify-between mx-40'>
        <h2 className='font-bold text-xl'>Brands</h2>
        <div className="arrow flex gap-1">
          <img onClick={() => { handleScroll(-ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={left} alt="" />
          <img onClick={() => { handleScroll(ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={right} alt="" />
        </div>
      </div>

      <div className="categories flex justify-evenly m-8">
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden border border-black'><img className='' src={first} alt="" width={184} height={174} /></div>
          <h3 className='text-xl font-bold'>Shirts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden border border-black object-bottom'><img className='' src={calvin} alt="" width={184} height={174} /></div>
          <h3 className='text-xl font-bold'>Kurti</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden object-contain border border-black'><img className='' src={ler} alt="" width={184} height={174} /></div>
          <h3 className='text-xl font-bold'>Casual's</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden border border-black'><img className='' src={vimy} alt="" width={184} height={174} /></div>
          <h3 className='text-xl font-bold'>Saree</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <div className='rounded-full w-40 h-40 overflow-hidden border border-black'><img className='' src={calvin} alt="" width={184} height={174} /></div>
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
      </div>
      </>
  )
}

export default Middle
