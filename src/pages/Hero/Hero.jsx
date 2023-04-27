import React from 'react'
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "../../index.css"
import Slider from './Slider'
import Product from '../Product'
import Cibilstr from './Cibilstr'
import Refinestr from './Refinestr'
import Contactstr from './Contactstr'
import CScore from "../../assets/Images/CScore.png"
import Index from './Index'
import Carousel from './carousel'
import FAQ from './FAQ'
// import test from "../../assets/Images/CScore.png"

const Hero = () => {
window.scrollTo(0,0)
    
  return (
    <div className=' w-full ' >
     
  
     <Slider/>
    

      <Product/>

{/* Check Cibil Score */}
 <Cibilstr/>
   
{/* Check Cibil Score End */}


<Contactstr/>
{/* Check Sum Cibil Score start */}
 <Refinestr/>
{/* CheckSum Cibil Score End */}
{/* <Multi/> */}
<Carousel/>
<FAQ/>
{/*  */}


            {/*  */}
    </div>
  )
}

export default Hero