import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



const ToTop = () => {
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <div className='justify-end flex m-5 z-100 sticky'>
      <button className='w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-600'  onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowUp} className='z-10' />
      </button>
    </div>

    <div className="scroll-to-top-button">
      {isVisible && (
        <button onClick={handleClick}>
          {/* <FaArrowUp /> */}
        </button>
      )}
    </div>
    </>
  )
}

export default ToTop;