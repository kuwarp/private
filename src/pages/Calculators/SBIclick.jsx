import React from 'react'
import click from "../../assets/Images/sbiimg/click.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGasPump, faMobile, faPlaneDeparture, faTrainSubway, faTrophy, faUtensils, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const SBIclick = () => {
    const [spending, setSpending] = useState('');
    const handleChange = event => {
      setSpending(event.target.value);
  
      console.log('value is:', event.target.value);
    };

    var onlineOthers;
    if (spending<=10000){
        onlineOthers = Math.round(spending/20);
    }
    else if(spending>10000){
        onlineOthers = Math.round(spending/100);
    }

    var fuel;
    if (spending>=500 && spending <=3000){
        fuel =spending*0.01;
    }
    else if(spending>3000){
        fuel = 3000*0.01;
    }
    else{
        fuel=0;
    }

    var travel;
    if(spending>=5000){
        travel = Math.round(spending*0.12);
    }else if(spending>16667){
        travel = 2000;
    }
    else{
        travel=0;
    }

    var milestone;
    if ((spending*12)>=100000){
        milestone = 500;
    } else{
        milestone = 0;
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
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center font-bold text-xl focus:outline-none" type="text" placeholder="Annual spending" aria-label="Full name" value={spending*12}/>

                        </div>   
                    </form>
                    </div>
                    
                
            </div>
            <div className='bg-gradient-to-l from-gray-100 to-blue-200 p-8 space-y-8 m-4 p-4 rounded-xl'>
                <p className='text-md text-blue-900 font-normal text-center mt-8'>Your total annual benefits can be worth upto</p>
                <div className=" text-center flex justify-center  w-3/5 mx-auto">
                        <input className="appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl text-center text-xl font-bold text-blue-900 focus:outline-none" type="text" placeholder="" aria-label="Full name" value={((spending/10)*12*0.25)+((onlineOthers)*12*0.25)+(fuel*12)+(travel*12)+(Math.round((spending*0.15)*12))+(milestone)}
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
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online Rewards for exclusive partners: Apollo24X7, BookMyShow, Cleartrip, Eazydiner & Netmeds</h3>
                <p className='text-lg text-blue-900 font-normal'>10 Reward Points for every ₹100 spent</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={spending/10}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(spending/10)*12*0.25}/>
                </div>


                <div className="ml-10">
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online Rewards for other online spends</h3>
                <p className='text-lg text-blue-900 font-normal'>5 Reward Points for every ₹100 spent till 10,000 points. After that, 1 point for every ₹100</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={onlineOthers}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(onlineOthers)*12*0.25}/>
                </div>


                {/* <div className="ml-10">
                <FontAwesomeIcon icon={faVideo} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Movie</h3>
                <p className='text-lg text-blue-900 font-normal'>Buy 1 Get 1 movie ticket up to ₹250 (twice per month)</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div> */}

                <div className="ml-10">
                <FontAwesomeIcon icon={faGasPump} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Fuel</h3>
                <p className='text-lg text-blue-900 font-normal'>1% Fuel Surcharge waiver between ₹500 to ₹3,000 per month</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={fuel}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={fuel*12}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrainSubway} size='2xl' className='m-4'/>
                <FontAwesomeIcon icon={faPlaneDeparture} size='2xl' className='my-4'/>

                <h3 className='text-xl text-blue-900 font-semibold'>Travel</h3>
                <p className='text-lg text-blue-900 font-normal'>Maximum discount upto 12% on minimum spend of ₹5,000</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={travel}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={travel*12} />
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faUtensils} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Dining</h3>
                <p className='text-lg text-blue-900 font-normal'>Get minimum 15% discount on selected restaurants.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(spending*0.15)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round((spending*0.15)*12)}/>
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
                <p className='text-lg text-blue-900 font-normal'>Fee reversal on spending ₹1,00,000 or more on your SimplySAVE SBI Card in the previous year</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={milestone}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SBIclick
