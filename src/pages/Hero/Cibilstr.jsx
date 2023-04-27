import React from 'react'
import Cibilg from "../../assets/Images/hscore.png"
import { Link } from 'react-router-dom'
const Cibilstr = () => {
window.scrollTo(0,0)

  return (
    <>
    <div className=" shadow-lg rounded-xl p-8  bg-white">
      <div className=" grid md:grid-cols-2 grid-cols-1 justify-between">
          <div className="sm:max-w-lg m-auto space-y-8">
            <h1 className=" text-3xl font-semibold tracking-tight text-blue-900 md:text-5xl">
            Discover your Credit Health for FREE
            </h1>
            <h1 className=" text-xl font-semibold tracking-tight text-blue-900 md:text-3xl">
           Check your Credit Score today
            </h1>
            <p className="mt-4 md:text-xl text-md text-gray-500">
            Get a better understanding of your financial health with a free Credit Score check today. Discover where you stand and take control of your Credit with ease!
            </p>
            <Link
               to="/Credit-score"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 mx-auto text-center font-medium text-white hover:bg-indigo-700"
              >
                Check Now
              </Link>
          </div>
          <div className='flex m-auto'>
            <div className="md:w-3/5 w-4/5 m-auto">
              {/* Decorative image grid */}
             <img src={Cibilg} className='' alt=''/>

           
            </div>
            
          </div>
        </div>
    </div>

    </>
  )
}

export default Cibilstr