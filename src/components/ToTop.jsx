import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ToTop = () => {

const [visible, setVisible] = useState (false);

const toggleVisible =()=>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled>300){
        setVisible(true)
    }
    else if(scrolled <= 300){
        setVisible(false)
    }
}

const scrollToTop=()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener("scroll", toggleVisible);
  return (
    <div className='justify-end flex m-5 z-100 sticky'>
      <button className='w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-600 '>
      <FontAwesomeIcon icon={faArrowUp} onClick={scrollToTop} style={{display: visible ? "inline": "none"}} className='' />
      </button>
    </div>
  )
}

export default ToTop;