import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "tailwindcss/dist/tailwind.min.css"
import "../../styles.css";
import "../../index.css";
import "./cr.css"
import sliderImageUrl from "./sliderImageUrl"
// import About from '../../components/About';
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

const Multi = () => {
window.scrollTo(0,0)

    return ( 
        <>




        
    <div className="parent ">
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
 
        </div>

  
    {/* <About/> */}


    {/* <div className="w-full  flex flex-auto    grid  grid-cols-2 xl:grid-cols-6 lg:gap-8">
             {sliderImageUrl.map((item)=>(
                <div className="bg-white  dark:bg-gray-800 rounded shadow px-8 py-6 flex flex-row items-center">
                    <div key={item} className="p-4  justify-center flex  rounded text-white">
                     <img className='w-28 mx-auto ' src={item.url} alt='partners'/>
                    </div>
                  
                </div>
            ))}
              
            </div> */}
           

    </>
    );
}

export default Multi;
