import React from 'react'
import save from "../../assets/Images/sbiimg/save.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGasPump, faMobile, faPlaneDeparture, faTrainSubway, faTrophy, faUtensils, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const SBIsave = () => {
    const [spending, setSpending] = useState('');
    const handleChange = event => {
      setSpending(event.target.value);
  
      console.log('value is:', event.target.value);
    };

    var value2 = Math.trunc((spending)/150)

    var fuel;
    if(spending >=500 && spending<=3000){
        fuel = Math.round(spending/100);
    }
    else if(spending>3000){
        fuel = 3000/100;
    }
    else{
        fuel= 0;
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
                <h3 className='text-xl text-blue-900 font-semibold'>SimplySAVE Credit Card- Value Calculator</h3>
                <p className='text-xl text-blue-900 font-normal p-2'>Know the potential of your Card - Enter your estimated spends below:</p>
                <div className="grid grid-cols-1 mt-8 space-y-8">
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
                        <input className="appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl text-center text-xl font-bold text-blue-900 focus:outline-none" type="text" placeholder="" aria-label="Full name" value={((value2*10)*12*0.25)+((value2*10)*12*0.25)+((fuel)*12*0.25)+((value2*10)*12*0.25)+(milestone)}/>
                        </div>   
                        <img src={save} alt="" className='mx-auto w-3/5 shadow-lg' />
                        <h3 className='text-lg text-blue-900 font-semibold m-8'>Click here to avail this card : <Link to="/Personal-Information" className='text-red-800'> Apply Now</Link></h3>
            </div>
                    <p className='text-2xl font-semibold text-blue-900 font-normal m-8'>Here's how your spends on this Card are split and how the value you earn adds up</p>
            <div className='md:col-span-2 bg-gray-200 grid md:grid-cols-2 grid-cols-1 md:space-y-12 space-y-8 p-8 m-4 bg-gradient-to-l from-gray-100 to-blue-300 rounded-xl'>
                
                <div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>At Departmental and Grocery stores</h3>
                <p className='text-lg text-blue-900 font-normal'>Enjoy 10 Reward Points per ₹150 spent.</p>
                </div>
                <div className="mx-auto flex">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={value2*10}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(value2*10)*12*0.25}/>
                </div>

                {/* <div className="ml-10">
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online</h3>
                <p className='text-lg text-blue-900 font-normal'>Enjoy 10 Reward Points per ₹150 spent.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={value*10}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"  value={(value*10)*12*0.25}/>
                </div> */}

                <div className="ml-10">
                <FontAwesomeIcon icon={faVideo} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Movie</h3>
                <p className='text-lg text-blue-900 font-normal'>Enjoy 10 Reward Points per ₹150 spent on movies</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={value2*10}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(value2*10)*12*0.25}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faGasPump} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Fuel</h3>
                <p className='text-lg text-blue-900 font-normal'>1% fuel surcharge at any petrol pump (Transact an amount between Rs. 500 to Rs. 3,000 at any petrol pump in India to avail this)</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={fuel}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(fuel)*12*0.25}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrainSubway} size='2xl' className='m-4'/>
                <FontAwesomeIcon icon={faPlaneDeparture} size='2xl' className='my-4'/>

                <h3 className='text-xl text-blue-900 font-semibold'>Travel</h3>
                <p className='text-lg text-blue-900 font-normal'>Domestic Airport and Railway Lounge access</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={0}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={0}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faUtensils} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Dining</h3>
                <p className='text-lg text-blue-900 font-normal'>Enjoy 10 Reward Points per ₹150 spent on dining</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={value2*10}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(value2*10)*12*0.25}/>
                </div>

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

export default SBIsave
