import {React,useState} from 'react'
import CCpic from "../../assets/Images/cards/aum.png"
import altura from "../../assets/Images/auimg/alt.png"
import alturaplus from "../../assets/Images/auimg/plus.png"
import lit from "../../assets/Images/auimg/lit.png"
import zenith from "../../assets/Images/auimg/zenth.png"
import vetta from "../../assets/Images/auimg/vetta.png"
import Product from '../Product'
import { Link } from 'react-router-dom'
import HoverDropdown from '../Auth/Hover'

const Aucard = () => {
  // const [open, setOpen] = useState(false);
window.scrollTo(0,0)

  return (
    <>
    <div className="container mx-auto h-auto rounded-3xl shadow-lg bg-blue-100">
      <div className="bg-gradient-to-l rounded-3xl from-gray-300 w-auto h-auto border border-1 border-gray-100 p-4">
      <div className="md:flex">
        <div className="md:shrink-0 p-5 m-auto">
          <img className=" object-cover rounded-xl max-w-xs" src={CCpic} alt="Modern building architecture"/>
        </div>
        <div className="p-8 my-auto">
          <div className="uppercase text-2xl font-semibold text-indigo-900 text-center">AU BANK CREDIT CARDS</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>AU Bank Credit Cards are designed to cater to the diverse spending habits and lifestyles of customers. With a range of credit cards to choose from, you can select the one that best suits your financial needs. AU Bank Credit Cards offer benefits such as rewards on dining, travel, and entertainment expenses, airport lounge access, travel insurance, and concierge services. They also come with features like fuel surcharge waivers, low-interest rates, higher credit limits, expense management tools, and customized reporting.</p>
          <div className=' mt-6 mx-auto justify-center'>
          <Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-autotext-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link>     </div>
        </div>
      </div>
      </div>
    </div>


    {/* <div className="flex justify-center mt-20">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2 bg-white border rounded-md"
        >
          <span className="mr-2 text-black">Dropdown Button</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
    </div> */}

{/* types of cards start */}
{/* Grid 1 */}
    <div className="container mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 p-2">
  <div className="grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3">
      <img className="h-auto w-full rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={altura} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">ALTURA</div>
      <li className="list-disc p-1">Save Big. Upto 7% Cashback as an introductory offer</li>
      <li className="list-disc p-1">Attractive Monthly Milestone Benefits</li>
      <li className="list-disc p-1">Complimentary Railway Lounge access</li>
      <li className="list-disc p-1">Complimentary Lost Card Liability cover</li>
      <li className="list-disc p-1">₹ 2,000+ Yearly Benefits on just ₹ 10,000 monthly spends!</li>
      
       
  
    <div className="grid grid-cols-1 md:mt-6 lg:mt-auto">
        <div className='lg:mx-22 mx-auto md:mx-auto  p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>  </div>
 
  <div className="grid-rows-2 mt-3 rounded-xl ">
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={alturaplus} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">ALTURA PLUS</div>
      <li className="list-disc p-1"> Double the Delight. Earn both Cashback & Reward Points.</li>

      <li className="list-disc p-1"> Attractive Welcome Benefit & Monthly Milestone Benefits </li>

      <li className="list-disc p-1"> Complimentary Railway Lounge access </li>
      <li className="list-disc p-1"> Complimentary Lost Card Liability cover </li>

      <li className="list-disc p-1"> ₹ 25,000+ Yearly Benefits on just ₹ 35,000 monthly spends! </li>
      <div className="grid grid-cols-1">
        <div className='lg:mx-22 mx-auto  p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>  
    </div>
   
  </div>


  <div className="grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={lit} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">LIT CREDIT CARD</div>
      <li className="list-disc p-1">Get 5% cashback on grocery and travel spends</li>
      <li className="list-disc p-1">Get additional 2%-5% cashback on all spends</li>
      <li className="list-disc p-1">Fly comfortably with domestic airport lounge access</li>
      <li className="list-disc p-1">Enjoy exciting memberships</li>
      <li className="list-disc p-1">Get 5X-10X rewards on online and offline spends</li>
      </div>
      <div className="grid grid-cols-1">
        <div className=' mx-auto  p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div> 
    
   
  </div>

{/* </div> */}
{/* Grid1 End */}
{/* Grid 2  */}
{/* <div className="container mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2  p-2"> */}
  <div className="grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3">
      <img className="h-auto w-full rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={zenith} alt="Modern building architecture"/>
    </div>
    <div className="p-4 ">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">ZENITH AU CREDIT CARD</div>
      <li className="list-disc p-1">10,000 Bonus Reward Points on completing retail spends* worth INR 1 Lakh</li>
      <li className="list-disc p-1">Complimentary Epicure Membership on minimum of INR 8 lakh retail spends in a card anniversary year.</li>
      <li className="list-disc p-1">For 1st year fee waiver : INR 1,25,000 retail spends done within 90 days of card set up.</li>
      <li className="list-disc p-1">For 2nd year onwards fee waiver : INR 5,00,000 retail spends done in previous card anniversary year.</li>
      <li className="list-disc p-1">INR 1,000 vouchers on minimum INR 2 lakh retail spends done per calendar quarter.</li></div>
      <div className="grid grid-cols-1">
        <div className='mx-auto  p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>  
    
 
  </div>

  <div className="grid-rows-2 mt-3 rounded-xl ">
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={vetta} alt="Modern building architecture"/>
    </div>
    <div className="p-4 ">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">VETTA  AU CREDIT CARD</div>
      <li className="list-disc p-1"> Vouchers worth INR 2000 on minimum INR 30,000 retail spends done within 60 days of card setup.</li>

      <li className="list-disc p-1"> earn up to 1,500 Bonus Reward Points in every calendar quarter with INR 1 lakh retail spends*. </li>

      <li className="list-disc p-1"> 1% Fuel Surcharge Waiver for fuel transactions done between INR 400 and INR 5,000, across all fuel stations in the country  </li>
      <li className="list-disc p-1"> Annual Card Membership fee Rs. 2,999 + applicable taxes </li>

      <li className="list-disc p-1"> 4 Reward Points per INR 100 retail spends* done on Grocery & Departmental store and Utility bill payments. </li>
    <li className='list-disc p-1'>2 Reward Points per INR 100 retail spends* done across all other merchant categories.</li></div>
      <div className="grid grid-cols-1">
        <div className=' mx-auto  p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div> 
    
   
  </div>


 

</div>
{/* Grid 2 End */}

{/* types of cards ends */}

{/* our product area starts */}

<Product />

{/* our product area ends */}
    
    </>
  )
}

export default Aucard