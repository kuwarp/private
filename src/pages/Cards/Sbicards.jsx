import React from 'react'
import CCpic from "../../assets/Images/cards/sbim.png"
import save from "../../assets/Images/sbiimg/save.png"
import click from "../../assets/Images/sbiimg/click.png"
import prime from "../../assets/Images/sbiimg/prime.png"
import pulse from "../../assets/Images/sbiimg/pulse.png"
import elite from "../../assets/Images/sbiimg/elite.png"
// import lit from "../../assets/Images/auimg/litcard.jpg"
import Product from '../Product'
import { Link } from 'react-router-dom'
const Sbicards = () => {
window.scrollTo(0,0)

  return (
    <>
    <div className="container mx-auto h-auto rounded-3xl shadow-lg bg-blue-100">
      <div className="bg-gradient-to-l rounded-3xl from-gray-300 w-auto h-auto border border-1 border-gray-100 p-4">
      <div className="md:flex">
        <div className="md:shrink-0 p-5 m-auto">
          <img className=" object-cover rounded-xl max-w-xs" src={CCpic} alt="Modern building architecture"/>
        </div>
        <div className="p-8 my-auto ">
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-center ">SBI CREDIT CARDS</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>SBI Credit Cards are a great option for individuals looking for financial products that offer convenience and rewards. SBI offers a wide range of credit cards designed to cater to diverse spending habits and lifestyles. SBI Credit Cards provide customers with numerous benefits, such as rewards on travel, shopping, dining, and cashback on specific transactions. With low-interest rates, easy payment options, and balance transfer facilities, SBI Credit Cards are an ideal solution for those looking for financial flexibility. Take a look at the various features and benefits of SBI Credit Cards to choose the one that meets your financial needs.</p>
          <div className=' mt-6 mx-auto justify-center'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link> </div>
        </div>
      </div>
      </div>
    </div>

{/* types of cards start */}
{/* Grid 1 */}
<div className="container mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 p-2">
  <div className=" grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3">
      <img className="h-auto w-full rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={save} alt="Modern building architecture"/>
    </div>
    <div className="p-4 mt-4 mx-auto">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">SBI SIMPLY SAVE</div>
      <li className="list-disc p-1">Enjoy 10X reward points on dining, grocery & movie spends</li>
      <li className="list-disc p-1">2,000 bonus reward points on spends of Rs.2000 in first 60 days</li>
      <li className="list-disc p-1">1% fuel surcharge waiver across all petrol pumps</li>
      <li className="list-disc p-1">Annual fees reversal on spends of Rs. 1,00,000 and above</li>
      <li className="list-disc p-1">Earn 1 Reward Point on every Rs. 150 that you spend using the SimplySAVE SBI Card</li>
      <li className="list-disc p-1">You can use your SimplySAVE SBI Card in over 24 million outlets across the globe, including 3,25,000 outlets in India</li>
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
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={click} alt="Modern building architecture"/>
    </div>
    <div className="p-4  mx-auto">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">SBI SIMPLY Click</div>
      <li className="list-disc p-1">Earn 10X rewards on online spends with exclusive partners - Amazon/ Apollo24X7 / BookMyShow / Cleartrip / Dineout / Lenskart / Netmeds</li>

      <li className="list-disc p-1">Earn 5X rewards on all other online spends</li>

      <li className="list-disc p-1">E-voucher worth Rs.2,000 each on annual online spends of Rs.1 Lakh</li>
      <li className="list-disc p-1">Annual fee reversal on annual spends of Rs.1 lakh</li>

      <li className="list-disc p-1">1% fuel surcharge waiver for each transaction between Rs 500 & Rs 3000 (exclusive of GST, wherever applicable, & all other charges)</li>
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


      <div className="grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={pulse} alt="Modern building architecture"/>
    </div>
    <div className="p-4  mx-auto">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">SBI PULSE</div>
      <li className="list-disc p-1">Enjoy 1 year complimentary FITPASS PRO Membership, to be received every year, on card renewal</li>
      <li className="list-disc p-1">Annual Fee (one-time):Rs. 1,499 + Taxes</li>
      <li className="list-disc p-1">Enjoy 10 Reward Points per Rs. 100 spent on Chemist, Pharmacy, Dining and Movies spend</li>
      <li className="list-disc p-1">Avail Fraud Liability Insurance Cover of Rs. 1 lakh</li>
      <li className="list-disc p-1">Complimentary Priority Pass Membership worth US Rs.8118 for first two years of cardholder membership</li>
      <li className="list-disc p-1">Fast & convenient: No need to hand over your card or look for cash / coins for everyday small ticket purchases</li>
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

{/* </div> */}
{/* Grid1 End */}
{/* Grid 2  */}
{/* <div className="container mx-auto overflow-hidden grid grid-cols-1   md:grid-cols-2 lg:mt-16 p-2"> */}
  <div className=" grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3">
      <img className="h-auto w-full rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={prime} alt="Modern building architecture"/>
    </div>
    <div className="p-4  mx-auto">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">SBI PRIME</div>
      <li className="list-disc p-1">Welcome gift worth Rs. 3,000</li>
      <li className="list-disc p-1">Get 10 Reward Points per Rs.100 spent on Dining, Groceries, Departmental stores and Movies</li>
      <li className="list-disc p-1">8 complimentary visits per calendar year to Domestic Lounges in India  (max. 2 visits per quarter)</li>
      <li className="list-disc p-1">4 complimentary visits per calendar year to International Priority Pass Lounges, outside India (max. 2 visits per quarter)</li>
      <li className="list-disc p-1">E-Gift Voucher worth Rs. 7,000 from Yatra.com/Pantaloons on achieving annual spends of Rs. 5 Lakhs</li>
      <div className="grid grid-cols-1">
        <div className='mx-auto p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>  
    </div>
 
  </div>

  <div className=" grid-rows-2 mt-3 rounded-xl ">
    <div className="md:shrink-0 my-3">
      <img className="h-auto w-full object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={elite} alt="Modern building architecture"/>
    </div>
    <div className="p-4 mx-auto">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">SBI ELITE</div>
      <li className="list-disc p-1"> Welcome e- Gift Voucher worth Rs. 5,000.</li>

      <li className="list-disc p-1"> Enjoy 2 complimentary Domestic Airport Lounge visits every quarter in India </li>

      <li className="list-disc p-1">Free Movie Tickets worth Rs. 6,000 every year </li>
      <li className="list-disc p-1">Earn upto 50,000 Bonus Reward Points worth Rs. 12,500/ year </li>

      <li className="list-disc p-1"> Annual Fee (one-time):Rs.4,999 + Taxes </li>
      <li  className="list-disc p-1">Get a 1% fuel surcharge waiver, on every transaction between Rs. 500 to Rs. 4,000, at any petrol pump across the country. Purchase fuel worth Rs. 500 to Rs. 4,000, to avail this benefit</li>
      <div className="grid grid-cols-1">
        <div className='mx-auto p-2'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link>
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
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

export default Sbicards