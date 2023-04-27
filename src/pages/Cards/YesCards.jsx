import React from 'react'
import CCpic from "../../assets/Images/cards/yesm.png"
import plus from "../../assets/Images/cards/prosp.png"
import edge from "../../assets/Images/cards/edge.png"
import Premia from "../../assets/Images/cards/premia.png"
import Product from '../Product'
import { Link } from 'react-router-dom'

const YesCards = () => {
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
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-center ">YES BANK CREDIT CARDS</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>YES Bank Credit Cards are a great financial product that offers a range of benefits to its customers. With YES Bank Credit Cards, you can enjoy cashback, rewards, low processing fees, and interest rates. Every time you swipe your YES Bank Credit Card for dining or shopping expenses, you can save money or get rewarded. <br/>
In addition to these benefits, YES Bank Credit Cards also offer lifestyle benefits and special offers. You can access airport lounges, earn rewards on your dining expenses, and more.
</p>
          <div className=' mt-6 mx-auto justify-center'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>   </div>
        </div>
      </div>
      </div>
    </div>

{/* types of cards start */}

    <div className="container mx-auto overflow-hidden grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 p-2">
  <div className="grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-auto">
      <img className="h-auto w-full rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={plus} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">Yes Rewards Plus Credit Card</div>
      <li className="list-disc p-1">4 Reward Points for every INR 200 on all categories other than ‘Select categories’</li>
      <li className="list-disc p-1">2 Reward Points for every INR 200 on Select categories</li>
      <li className="list-disc p-1">Annual Bonus of 12,000 Reward Points on spends of ₹3,60,000 in an anniversary year</li>
      <li className="list-disc p-1">Accumulated Reward Points never expire</li>
      <li className="list-disc p-1">Fuel Surcharge waiver across all fuel stations in India</li>

    </div>
    <div className="grid grid-cols-1">
        <div className='mx-auto p-2'>
        <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>

  <div className=" grid-rows-2 mt-3 rounded-xl ">
    <div className="md:shrink-0 my-auto">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={edge} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">YES Prosperity Edge Credit Card</div>
      <li className="list-disc p-1">Annual Bonus of 15,000 Reward Points on spends of ₹6,00,000 in an anniversary year</li>

      <li className="list-disc p-1"> 4 Reward Points for every INR 200 on all categories other than ‘Select categories’</li>

      <li className="list-disc p-1">2 Reward Points for every INR 200 on Select categories</li>
      <li className="list-disc p-1"> 1 complimentary Airport Lounge access per calendar quarter at airports in India for Primary cardmembers</li>

      <li className="list-disc p-1">Accumulated Reward Points never expire</li>
      <li className="list-disc p-1">Fuel Surcharge waiver across all fuel stations in India</li>


    </div>
    <div className="grid grid-cols-1">
        <div className='p-2 mx-auto'>
        <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>


  <div className=" grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-auto">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={Premia} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">YES Bank Premia Card</div>
      <li className="list-disc p-1">Accelerated Reward points of 12 RP on spend of each Rs 200 on travel and dining categories</li>
      <li className="list-disc p-1">1% fuel surcharge waiver at all fuel stations across India for transactions between Rs. 400 to Rs. 5,000.</li>
      <li className="list-disc p-1">5X reward points on first 3 transactions of the billers registered on YES PayNow.</li>
      <li className="list-disc p-1">Include a 25% discount on booking movie tickets on BookMyShow website or mobile app.</li>
      <li className="list-disc p-1">Accelerated Reward Points on select transactions through.</li>


    </div>
    <div className="grid grid-cols-1 ">
        <div className='p-2 mx-auto'>
        <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>

</div>

{/* types of cards ends */}

{/* our product area starts */}

<Product />

{/* our product area ends */}


</>
  )
}

export default YesCards


