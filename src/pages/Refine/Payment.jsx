import React from 'react'
import { Link } from 'react-router-dom'
import Exp from "../../assets/Images/expert.gif"
import Compare from './Compare'
import char from "./challanges"
const Payment = () => {
window.scrollTo(0,0)

  return (
    <>
    {/* Hero Start */}

<div className="container mx-auto h-auto rounded-3xl shadow-lg">
      <div className="bg-gradient-to-l  rounded-3xl from-blue-300 to-gray-100 w-auto h-auto border border-1  p-4">
      <div className="md:flex">
       
        <div className="p-4 mx-auto md:space-y-12 space-y-4 my-auto">
          <div className="uppercase md:text-2xl text-xl  font-semibold text-indigo-900 text-left ">Take advantage of Credit Refine's program to build your score and qualify for the best loan/credit card offers</div>
          {/* <p className='text-semibold text-lg text-blue-900 my-2 p-2'>We analyse your credit report to understand  the impact of negative accounts on your credit score.
</p> */}
<div className="uppercase md:text-2xl text-xl font-semibold text-indigo-900 text-left ">Available @ just <span className=" text-3xl text-blue-700  "> ₹ 99</span></div>

<Link to="/queries">
          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white text-xl font-semibold px-4 py-2 rounded-2xl uppercase">Pay Now </button>
            </div>
            </Link>
        </div>
     

        <div className="md:shrink-0 sm:shrink-0 md:p-5 lg:mx-15  mx-auto">
          <img className=" object-cover  rounded-xl lg:max-w-xl" src={Exp} alt="Modern building architecture"/>
        </div>
      </div>

      </div>
    </div>

{/* Hero End */}
    
<div className="bg-gray-50   py-20 flex flex-col items-center justify-center">
            <div className="xl:w-1/2 space-y-12 w-11/12">
              <h1  className="md:text-4xl text-3xl font-semibold  leading-2 text-center text-gray-800">Revolutionize Your Credit Score  <br/> with Our Expert Credit Refinement Service!
</h1>
                <p  className="text-2xl font-semibold  leading-2 text-center text-gray-600">
                    What we provides as compare to others
                </p>
                <div className="mt-8  flex-col justify-start items-start">
                  <table class="table:border lg:w-full bg-white border-collapse">
                    <tr>
                    <th class="bg-blue-100 font-normal border py-4">Contents</th>
                      <th class="bg-blue-100 border py-4">Creditklick <span className='text-teal-700'> @99 </span> INR</th>
                      <th class="bg-blue-100 border text-center ">
                        Others <span className='text-red-800'>@1297 </span>  INR
                      </th>
                    </tr>
                    {Compare.map((item) => (
                      <tr key={item}>
                        <td class="border text-md text-left px-8 py-4">
                          {item.content}
                        </td>
                       
                        <td class="border  text-center px-8 py-4">
                          {item.CreditKlick}
                        </td>
                        <td class="border text-center px-8 py-4">
                          {item.others}
                        </td>
                      </tr>
                    ))}
                    
                  </table>
                  <Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 w-auto  mx-auto text-white font-semibold flex mt-8 py-2 px-4 rounded-2xl">
 Pay Now
</button></Link> 
                </div>
            </div>
            </div>

            {/* Challanges */}
            <div className="mt-8 space-y-8 container mx-auto justify-evenly items-start">
           
           <h1 className="md:text-4xl text-2xl font-semibold  leading-2 text-center text-gray-800">Boost Your Credit Score
</h1>
<p  className="md:text-2xl text-xl font-semibold  p-2  leading-2 text-center text-gray-600">CreditKlick is the perfect way to improve your credit score, while learning more about debt management. With our easy-to-use platform, you can be on top of your credit score in no time.
</p>
                  <h3 className="text-2xl text-teal-800 md:ml-0 ml-6 font-semibold ">
                    {" "}
                    Features section:

                  </h3>

                  {char.map((item) => (
                    <ul className="mx-4" key={item}>
                      <li className="my-2 md:text-xl text-lg font-semibold text-gray-800 uppercase"
                      >
                        {item.rate}
                      </li>
                      <li className="lg:mx-4 mb-4 md:text-lg text-md">{item.charge}</li>
                    </ul>
                  ))}
                </div>
    </>
  )
}

export default Payment