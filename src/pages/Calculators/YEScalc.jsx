import React from 'react'
import click from "../../assets/Images/cards/premia.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping, faGasPump, faMobile, faPlaneDeparture, faTrainSubway, faTrophy, faUtensils, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const SBIclick = () => {
    const [spending, setSpending] = useState('');
    const handleChange = event => {
      setSpending(event.target.value);
  
      console.log('value is:', event.target.value);
    };

    var fuel;
    if(spending>=400 && spending>=5000){
        fuel = spending*0.01;
    }
    else if(spending>5000){
        fuel= 50;
    }
    else{
        fuel=0
    }


    var annual;
    if(spending*12>=150000){
        annual = 999;
    }
window.scrollTo(0,0)

  return (
    <>
        <div className=" container grid md:grid-cols-2 grid-cols-1 mx-auto">
            <div className='bg-gradient-to-l from-blue-200 to-blue-300 md:py-16 space-y-8 items-center flex flex-col m-4 p-4 rounded-xl'>
                <h3 className='text-xl text-blue-900 font-semibold'>SimplyCLICK Credit Card - Value Calculator</h3>
                <p className='text-lg text-blue-900 font-normal'>Know the potential of your Card - Enter your estimated spends below:</p>
                <div className="grid grid-cols-1 mt-8">
                        <form class="w-full max-w-lg">
                            <p className='text-center mt-4 text-lg'>My Monthly Spends</p>
                        <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center font-bold text-xl focus:outline-none" type="text" placeholder="Monthly spending" aria-label="Full name" onChange={handleChange} value={spending}/>
                        </div>   
                    </form>
                    <form class="w-full max-w-lg">
                    <p className='text-center mt-4 text-lg'>My Annual Spends</p>
                        <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center font-bold text-xl focus:outline-none" type="text" placeholder="Annual spending" aria-label="Full name" value={(spending)*12}/>

                        </div>   
                    </form>
                    </div>
                    
                
            </div>
            <div className='bg-gradient-to-l from-gray-100 to-blue-200 p-8 space-y-8 m-4 p-4 rounded-xl'>
                <p className='text-md text-blue-900 font-normal text-center mt-8'>Your total annual benefits can be worth upto</p>
                <div className=" text-center flex justify-center  w-3/5 mx-auto">
                        <input className="appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl text-center text-xl font-bold text-blue-900 focus:outline-none" type="text" placeholder="" aria-label="Full name" value={(Math.round(((spending*0.5*6)/200)*12*0.25))+(Math.round(((spending*0.5*3)/200)*12*0.25))+(Math.round(((spending*0.5*6)/200)*12*0.25))+(Math.round((spending/2)*0.25)*12)+(Math.round(fuel*12))+(Math.round(((spending*0.5*6)/200)*12*0.25))+annual}
                        />
                        </div>     
                        <img src={click} alt="" className='mx-auto w-3/5 shadow-lg' />
                        <h3 className='text-lg text-blue-900 font-semibold m-8'>Click here to avail this card : <Link to="/Personal-Information" className='text-red-800'> Apply Now</Link></h3>
                    <p className='text-md text-blue-900 font-normal mx-8'>Here's how your spends on this Card are split and how the value you earn adds up</p>
            </div>
            <div className='md:col-span-2 bg-gray-200 grid md:grid-cols-2 grid-cols-1 md:space-y-12 space-y-8 p-8 m-4 bg-gradient-to-l from-gray-100 to-blue-300 rounded-xl'>
{/*                 
                <div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>At Merchant Outlets</h3>
                <p className='text-lg text-blue-900 font-normal'>3 Reward Point for every ₹100 spent</p>
                </div>
                <div className="mx-auto flex">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div> */}

<div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Grocery spends</h3>
                <p className='text-lg text-blue-900 font-normal'>6 Reward Point for every ₹200 spent</p>
                </div>
                <div className="mx-auto flex">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"  value={Math.round(((spending*0.5)*6)/200)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending*0.5*6)/200)*12*0.25)}/>
                </div>


                <div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Other Retail spends</h3>
                <p className='text-lg text-blue-900 font-normal'>3 Reward Point for every ₹200 spent</p>
                </div>
                <div className="mx-auto flex">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"  value={Math.round(((spending*0.5)*3)/200)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending*0.5*3)/200)*12*0.25)}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online Rewards</h3>
                <p className='text-lg text-blue-900 font-normal'>6 Reward Point for every ₹200 spent</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(((spending*0.5)*6)/200)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending*0.5*6)/200)*12*0.25)}/>
                </div>


                <div className="ml-10">
                <FontAwesomeIcon icon={faVideo} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Movie</h3>
                <p className='text-lg text-blue-900 font-normal'>25% off on movie tickets through BMS.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round((spending/2)*0.25)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round((spending/2)*0.25)*12}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faGasPump} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Fuel</h3>
                <p className='text-lg text-blue-900 font-normal'>1% Fuel Surcharge waiver between ₹400 to ₹5,000 per month</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(fuel)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(fuel*12)}/>
                </div>

                {/* <div className="ml-10">
                <FontAwesomeIcon icon={faTrainSubway} size='2xl' className='m-4'/>
                <FontAwesomeIcon icon={faPlaneDeparture} size='2xl' className='my-4'/>

                <h3 className='text-xl text-blue-900 font-semibold'>Travel</h3>
                <p className='text-lg text-blue-900 font-normal'>Maximum discount upto 12% on minimum spend of ₹5,000</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" />
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div> */}

                <div className="ml-10">
                <FontAwesomeIcon icon={faUtensils} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Dining</h3>
                <p className='text-lg text-blue-900 font-normal'>Get 6 reward points on every ₹200</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(((spending*0.5)*6)/200)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending*0.5*6)/200)*12*0.25)}/>
                </div>

                {/* <div className="ml-10">
                <FontAwesomeIcon icon={faTrophy} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Milestone Benefits</h3>
                <p className='text-lg text-blue-900 font-normal'>E-voucher worth ₹2,000 on annual online spends of ₹2 Lakhs</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div> */}

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrophy} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Annual Fees Reversal Benefits</h3>
                <p className='text-lg text-blue-900 font-normal'>₹999 plus tax waived if ₹1,50,000 is spent in previous year.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={annual} />
                </div>
            </div>
        </div>
    </>
  )
}

export default SBIclick
