import React from 'react'
import vetta from "../../assets/Images/auimg/vetta.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGasPump, faMobile, faTrainSubway, faTrophy, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Aucalc = () => {


    const [spending, setSpending] = useState('');

    const handleChange = event => {
      setSpending(event.target.value);
  
      console.log('value is:', event.target.value);
    };


    var fuel;
    if(spending>=400 && spending<=5000){
        fuel= Math.round(spending/100);
    }
    else if(spending>5000){
        fuel= Math.round(5000/100)
    }
    else{
        fuel = 0
    }

  var qmilestone;
  if(spending>=16667 && spending<33334){
    qmilestone = 500
  }
  else if(spending>=33334){
    qmilestone = 1500
  }
  else{
    qmilestone=0
  }

  var amilestone;
  if(spending>=20834){
    amilestone = 1000
  }
  else{
    amilestone = 0
  }
    // const handleClick = event => {
    //   event.preventDefault();
  
    //   // 👇️ value of input field
    //   console.log('handleClick', spending);
    // };
window.scrollTo(0,0)

  return (
    <>
        <div className=" container grid md:grid-cols-2 grid-cols-1 mx-auto">
            <div className='bg-gradient-to-l from-blue-200 to-blue-300 md:py-16 space-y-12 items-center flex flex-col m-4 p-4 rounded-xl'>
                <h3 className='text-xl text-blue-900 font-semibold'>AU BANK Credit Card- Value Calculator</h3>
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
            <div className='bg-gradient-to-l from-gray-100 to-blue-200 p-8 space-y-8 m-4 p-4 rounded-xl'>
                <p className='text-xl text-blue-900 font-normal text-center mt-8'>Your total annual benefits can be worth upto</p>
                        <div class=" text-center  flex justify-center w-3/5 mx-auto">
                        <input class="appearance-none bg-transparent border-none text-gray-700 leading-tight text-xl text-center text-xl font-bold text-blue-900 focus:outline-none" type="text" placeholder="" aria-label="Full name" value={Math.round(((spending/25)*12*0.2)+(Math.round(fuel*12*0.20))+(qmilestone*4*0.2)+(amilestone*0.2))}/>
                        </div>   
                        <img src={vetta} alt="" className='mx-auto w-3/5 shadow-lg' />
                        <h3 className='text-lg text-blue-900 font-semibold m-8'>Click here to avail this card : <Link to="/Personal-Information" className='text-red-800'> Apply Now</Link></h3>
            </div>
            <p className='text-2xl text-blue-900 font-semibold m-8'>Here's how your spends on this Card are split and how the value you earn adds up</p>

            <div className='md:col-span-2 bg-gray-200 grid md:grid-cols-2 grid-cols-1 md:space-y-12 space-y-8 p-8 m-4 bg-gradient-to-l from-gray-100 to-blue-300 rounded-xl'>
                
                <div className="ml-10">
                <FontAwesomeIcon icon={faCartShopping} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>At Merchant Outlets</h3>
                <p className='text-lg text-blue-900 font-normal'>4 Reward Point for every ₹100 spent in a cycle</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={Math.round(spending/25)}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" value={Math.round((spending/25)*12*0.2)} aria-label="Full name"/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faMobile}  size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Online</h3>
                {/* <p className='text-lg text-blue-900 font-normal'>4 Reward Point for every ₹100 spent in a cycle</p> */}
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={0}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={0}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faVideo} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Movie</h3>
                {/* <p className='text-lg text-blue-900 font-normal'>4 Reward Point for every ₹100 spent in a cycle</p> */}
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={0}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={0}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faGasPump} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Fuel</h3>
                <p className='text-lg text-blue-900 font-normal'>1% Fuel Surcharge Waiver for fuel transactions done between INR 400 and INR 5,000, across all fuel stations in the country (Maximum INR 250 per statement cycle).</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" 
                 value={fuel}/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(Math.round(fuel*12*0.20))}/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrainSubway} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Train</h3>
                <p className='text-lg text-blue-900 font-normal'>Railway Lounge access - 2 per quarter</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name"/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name"/>
                </div>

                <div className="ml-10">
                <FontAwesomeIcon icon={faTrophy} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Quarterly Milestone Benefits</h3>
                <p className='text-lg text-blue-900 font-normal'>500 Bonus Reward Points on INR 50,000 retail spends* done per calendar quarter and get additional 1,000 Bonus Reward Points on reaching INR 1 lakh retail spends* per calendar quarter.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={qmilestone*4
                }/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(qmilestone*4*0.2)}/>
                </div>


                <div className="ml-10">
                <FontAwesomeIcon icon={faTrophy} size='2xl' className='m-4'/>
                <h3 className='text-xl text-blue-900 font-semibold'>Annual Milestone Benefits</h3>
                <p className='text-lg text-blue-900 font-normal'>Get INR 1,000 worth vouchers on minimum INR 2.50 lakh retail spends done in a card anniversary year. Choose your vouchers from a bouquet of top brands.</p>
                </div>
                <div className="mx-auto flex items-end">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Points" aria-label="Full name" value={amilestone
                }/>
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Benefits" aria-label="Full name" value={(amilestone*0.2)}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aucalc
