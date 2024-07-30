import React from 'react'
import { useEffect,useRef } from 'react';



const Scroll = () => {
    const [scrollposition, setScrollposition] = useState(0)

    const containerRef = useRef();
  
    const handleScroll = (scrollAmount) => {
  
      const newScrollPosition = scrollposition + scrollAmount;
      setScrollposition(newScrollPosition)
  
      containerRef.current.scrollLeft = newScrollPosition;
    }
  
    return (
        <div className="arrow flex gap-1">
            <img onClick={() => { handleScroll(-ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={left} alt="" />
            <img onClick={() => { handleScroll(ITEM_WIDTH) }} className='bg-[#D9D9D9] hover:bg-[#c3c3c3] rounded-full px-[14px] py-[12px] transition-all' src={right} alt="" />
        </div>
    )
}

export default Scroll
