import React from 'react'
import EMI from "../../assets/Images/calci/EMIcalc.png"
import Au from "../../assets/Images/calci/AUcalc.png"
import Idfc from "../../assets/Images/calci/IBcalc.png"
import Save from "../../assets/Images/calci/SScalc.png"
import Clicks from "../../assets/Images/calci/SCLcalc.png"
import YesB from "../../assets/Images/calci/YBcalc.png"
// import Aucalc from './Aucalc'


import { Link } from 'react-router-dom'
const Calculators = () => {
window.scrollTo(0,0)

  return (
    <>

    {/* Calculators hero */}


   


    {/* Calculators hero ends */}
     <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div role="article" className="bg-gray-100  md:px-8">
                        <div className="px-4 xl:px-0 py-8">
                            <div className="flex flex-col lg:flex-row flex-wrap">
                                <div className="mx-auto lg:my-4 lg:text-center lg:mt-0 lg:w-3/5">
                                    <div>
                                        <h1 className="text-3xl uppercase lg:ml-0 lg:text-4xl font-semibold text-blue-900 tracking-normal lg:w-11/12">Finance Calculators</h1>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="px-6 xl:px-0">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                         <Link to="/emi-calculator">
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white  hover:shadow-lg p-5 rounded-md relative h-full w-full">
                                        {/*className="shadow-lg w-28  p-2 mb-5 rounded-full" class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span >
                                            <img className='w-36' src={EMI} alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">EMI Calculators</h1>
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md text-indigo-700 md:font-semibold cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </Link> 
                                <Link to="/au-calculator">

                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white  hover:shadow-lg p-5 rounded-md relative h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="w-36" src={Au} alt="pricetags-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">au value Calculator</h1>
                                      
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md md:font-semibold text-indigo-700  cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div></Link>

                                <Link to="/idfc-calculator">

                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white  hover:shadow-lg p-5 rounded-md relative h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="w-36" src={Idfc} alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">idfc first value Calculator</h1>
                                       
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md md:font-semibold text-indigo-700  cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div></Link>

                                <Link to="/sbisave-calculator">

                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white  hover:shadow-lg p-5 rounded-md  h-full relative w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="w-36" src={Save} alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">sbi simply save value Calculator</h1>
                                      
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md md:font-semibold text-indigo-700  cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div></Link>

                                <Link to="/sbiclick-calculator">

                                <div role="cell" className="bg-gray-100">
                                    <div className="relative  hover:shadow-lg bg-white p-5 rounded-md  h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="w-36" src={Clicks} alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">Sbi simply click value Calculator</h1>
                                    
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md md:font-semibold text-indigo-700  cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div></Link>

                                <Link to="/yes-calculator">

                                <div role="cell" className="bg-gray-100">
                                    <div className="relative hover:shadow-lg bg-white p-5 rounded-md  h-full  w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="w-36 rounded" src={YesB} alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-xl uppercase font-semibold">yes bank value Calculator</h1>
                                     
                                        <a className="hover:text-indigo-500 -my-4 hover:underline absolute bottom-5 text-md md:font-semibold text-indigo-700  cursor-pointer flex items-center" href=" ">
                                            <p>Calculate Now</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Calculators