import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "tailwindcss/dist/tailwind.min.css"
import "../styles.css";
import "../index.css"
import sliderImageUrl from "./sliderImageUrl"
import About from './About';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 250 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

window.scrollTo(0,0)


const Multi = () => {
    return ( 
        <>


        
    {/* <div className="parent ">
        <div className=' bg:bg-pink-800 '></div>
        <h1  className='text-4xl mx-2 relative w-50 focus-within:shadow-lg   font-bold tracking-tight text-gray-500 sm:text-6xl bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '>Our Clients</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        // showDots={true}
        infinite={true}
        partialVisible={true}
        // dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
 <>           <div className="slider" key={index}>

              <img src={imageUrl.url} alt="partners" />
            </div>
            </>
          );
        })}
      </Carousel>
    </div> */}
    {/* <About/> */}


    
    </>
    );
}

export default Multi;
