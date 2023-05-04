import React from 'react'
import millenia from "../../assets/Images/idfcimg/idfcmillenia.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGasPump, faMobile, faPlaneDeparture, faTrainSubway, faTrophy, faUtensils, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const IDFCcalc = () => {

    const [spending, setSpending] = useState('');

    const handleChange = event => {
      setSpending(event.target.value);
  
      console.log('value is:', event.target.value);
    };


    var movie;
    if((spending*0.25)<=100){
        movie= spending*0.25
    }
    else if((spending*0.25)>100){
        movie = 100
    }

    var fuel;
    if(spending>=200 && spending<=5000){
        fuel= Math.round(spending/100);
    }
    else if(spending>5000){
        fuel= Math.round(5000/100)
    }
    else{
        fuel = 0
    }

  var milestone;
  if(spending>=12500 && spending<=150000){
    milestone = 50
  }
  else{
    milestone=0 
  }

window.scrollTo(0,0)
 
  return (
    <>
        <div className=" container grid md:grid-cols-2 grid-cols-1 mx-auto">
        <div className='bg-gradient-to-l from-blue-200 to-blue-300 md:py-16 space-y-12 items-center flex flex-col m-4 p-4 rounded-xl'>
                <h3 className='text-xl text-blue-900 font-semibold'>IDFC Credit Card- Value Calculator</h3>
                <p className='text-xl text-blue-900 font-normal p-2'>Know the potential of your Card - Enter your estimated spends below:</p>
                <div className="grid grid-cols-1 mt-8 space-y-8">
                        <form className="w-full max-w-lg">
                            <p className='text-center mt-4 text-lg'>My Monthly Spends</p>
                        <div className="flex items-center border-b border-teal-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center font-bold text-xl focus:outline-none" type="text" placeholder="Monthly spending" aria-label="Full name" onChange={handleChange} value={spending}/>
                        </div>   
                        {/* <button className='p-2 rounded-lg mt-4 flex mx-auto bg-teal-900 text-teal-100 text-sm' >Calculate</button> */}
                    </form>
                    <form class="w-full max-w-lg">
                    <p className='text-center mt-4 text-lg'>My Annual Spends</p>
                        <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center font-bold text-xl focus:outline-none" type="text" placeholder="Annual spending" aria-label="Full name" value={(spending)*12}/>

                        </div>   
                    </form>
                    </div>
                    
                
            </div>
            <div className='bg-gradient-to-l from-gray-100 to-blue-200 p-8 space-y-12 m-4 p-4 rounded-xl'>
                <p className='text-md text-blue-900 font-normal text-center mt-8'>Your total annual benefits can be worth upto</p>
                        <div class="text-center flex justify-center w-3/5 mx-auto">
                        {/* <input class="mx-auto appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl font-semibold text-center focus:outline-none" type="text" placeholder="" aria-label="Full name" value={Math.round(((spending*0.03)*12*0.2)+((spending*0.1)*12*0.2)+(movie*12)+(fuel*12*0.2)+(spending*12*0.2))}/> */}
                        <input class="appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl text-center text-xl font-bold text-blue-900 focus:outline-none" type="text" placeholder="" aria-label="Full name"  value={Math.round((((spending/2)*0.03)*12*0.25)+(((spending/2)*0.06)*12*0.25)+(movie*12)+(fuel*12*0.25)+(spending*12*0.25))}/>
                        </div>   
                        <img src={millenia} alt="" className='mx-auto w-3/5' />
                        <h3 className='text-lg text-blue-900 font-semibold m-8 text-center'>Click here to avail this card : <Link to="/Personal-Information" className='text-red-800'> Apply Now</Link></h3>
            </div>
            <p className='text-2xl font-semibold text-blue-900 font-normal m-8'>Here's how your spends on this Card are split and how the value you earn adds up</p>

            <div className='md:col-span-2 bg-gray-200 grid md:grid-cols-2 grid-cols-1 md:space-y-12 space-y-8 p-8 m-4 bg-gradient-to-l from-gray-100 to-blue-300 rounded-xl'>
                
                <div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>At Merchant Outlets</h3>
                <p className='text-lg text-blue-900 font-normal'>3 Reward Point for every ₹100 spent</p>
                </div>
                <div className="mx-auto flex">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"  value={Math.round((spending/2)*0.03)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending/2)*0.03)*12*0.25)}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online</h3>
                <p className='text-lg text-blue-900 font-normal'>6 Reward Point upto ₹20,000</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round((spending/2)*0.06)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(((spending/2)*0.06)*12*0.25)}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faVideo} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Movie</h3>
                <p className='text-lg text-blue-900 font-normal'>Get 25% the price of movie tickets or ₹100 (whichever is lesser) as an Instant discount</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(movie)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={movie*12}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faGasPump} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Fuel</h3>
                <p className='text-lg text-blue-900 font-normal'>Fuel Surcharge waiver up to ₹300 per month</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={fuel}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={Math.round(fuel*12*0.25)}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrainSubway} size='2xl' className='m-4'/>
                <FontAwesomeIcon icon={faPlaneDeparture} size='2xl' className='my-4'/>

                <h3 className='text-xl text-blue-900 font-semibold'>Travel</h3>
                <p className='text-lg text-blue-900 font-normal'>Domestic Airport and Railway Lounge access - 4 per quarter</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={0}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={0}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faUtensils} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Dining</h3>
                <p className='text-lg text-blue-900 font-normal'>Dining discount of up to 20% across 1,500 restaurants</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={0}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={spending*12*0.25}/>
                </div>

                {/* <div className="ml-10">
                <FontAwesomeIcon icon={faTrophy} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Milestone Benefits</h3>
                <p className='text-lg text-blue-900 font-normal'>600 worth vouchers on spending 1,50,000 within 12 Months.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default IDFCcalc
