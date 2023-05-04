import React from 'react'
import formpic from "../../assets/Images/authloan.png"
import { Link } from 'react-router-dom'
const loanform = () => {
window.scrollTo(0,0)

  return (
    <>
    
    <div className="container w-full  my-6 mx-auto">
        <div className=" flex flex-cols md:flex-cols-1 lg:flex-rows-3">
            <div className='tempPic m-auto'>
                <img src={formpic} alt="" />
            </div>
            
            <div className='text-center grid grid-cols lg:grid-cols-3 mx-auto '>
                <p className='my-auto font-bold text-indigo-900' >APPLY HERE & GET BEST OFFERS</p>
                <div className='my-auto justify-between mx-4'>
                    <form class="w-full max-w-lg">
                        <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Your mobile number" aria-label="Full name"/>
                        </div>   
                    </form>
                    <div className="flex flex-cols-2 my-4">
                        <span>
                            <input type="radio" />
                            <label htmlFor="salaried" className='text-base font-semibold mx-3'>SALARIED</label>
                        </span>
                        <span>
                            <input type="radio" />
                            <label htmlFor="salaried" className='text-base font-semibold mx-3'>SELF EMPLOYED</label>
                        </span>
                    </div>
                </div>
            <div className='my-auto mx-5'>
                <Link to="/Adress">
                <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl w-auto uppercase">apply now</button>
           </Link>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default loanform