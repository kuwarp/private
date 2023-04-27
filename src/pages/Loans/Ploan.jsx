import React from 'react'
import random from "../../assets/Images/pers.png"
import { Link } from 'react-router-dom'
import rupee from "../../assets/Images/bloan/rupee.png"
import approved from "../../assets/Images/bloan/approved.png"
import time from "../../assets/Images/bloan/time.png"
import { useState } from 'react'

import eligibility from './loaneligibility'
import Loanform from "./Loanform"
import HowtoApply from './HowtoApply'

const currentLoaninterest=[{
  Ltype:"Interest Rate Type",
   BLoan:"Floating",
   
 },
 {
  Ltype:"For Salaried Applicants",
   BLoan:"7.70%* to 14.00%*"
 },
 {
  Ltype:"For Self-Employed applicants",
   BLoan:"7.70%* to 14.00%*"
 }]


const Ploan = () => {
  const [loantype, setLoantype] = useState(currentLoaninterest);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);
window.scrollTo(0,0)

  return (
  

    <>
    {/*title area starts  */}
    <div className="mx-2 mt-10">
        <div className="mx-auto container shadow-md bg-indigo-100 rounded-lg">
        <div class=" overflow-hidden ">
      <div class="md:flex">
        <div class="p-10 space-y-6">
          <div class="uppercase text-xl  text-blue-900 font-semibold">PERSONAL LOAN</div>
          <p class="mt-2 text-blue-800">CreditKlick offers personal loans from more than 30 banks and non-bank financial institutions suitable for different consumer segments. Consumers can compare key loan features from the best lenders and apply for the best loan option. We have also formed unique partnerships with multiple banks and NBFCs to offer pre-approved/pre-qualified personal loans with end-to-end digital processing and instant disbursement.</p>
          <div className='flex flex-col my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
        </div>
        <div class="md:shrink-0 p-5 mx-auto ">
          <img class=" object-contain rounded-xl max-w-xs p-2" src={random} alt="Modern building architecture"/>
        </div>
      </div>
    </div>
    </div>
    </div>
    {/* tile area ends */}
    
    
    {/* apply here starts */}
    
    <Loanform />
    
    {/* apply here ends */}
    
    
    
    {/* features area starts */}
    
    
    <div className="mx-auto container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 bs-gray-100 mx-auto">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={time} alt="" className='w-20' />
        <p className="text-semibold text-lg text-purple-600 my-2">Minimal Documentation</p>
        <p>The Personal Loan Documentation process at CreditKlick varies from individual to individual. The requirements are based on your profession, income and loan ...</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={approved} alt="" className='w-20'/>
        <p className="text-semibold text-lg text-purple-600 my-2">Balance Transfer</p>
        <p>Balance Transfer Facility to all existing Personal Loan holders running a successful Personal Loan with an external Bank: with the transfer of the Loan the applicant will benefit.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={rupee} alt="" className='w-20' />
        <p className="text-semibold text-lg text-purple-600 my-2">Minimum Rs50,000 Loan Amount</p>
        <p>The best personal loan banks in India for a ₹ 50,000 loans as they offer personal loan at lowest rate of 10.49%.</p>
      </div>
    </div>
    </div>
    
    <div className='flex flex-col items-center  my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
    {/* features area ends */}
    
    {/* eligibility starts */}
    <div className="mx-2 p-2">
    <div className="container mx-auto text-center space-y-4">
      <p className='text-lg font-semibold text-indigo-800'>Personal Loan Eligibility Criteria</p>
      <p className='text-teal-800'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a personal loan:</p>
      <table className='table-auto mx-auto' >
        <thead  className='border bg-blue-200 text-blue-900' >
          <tr>
            <th className='border p-3'>Criteria</th>
            <th className=' border p-3'>Salaried</th>
            <th className='p-3'>Self-Employed</th>
          </tr>
        </thead>
        {eligibility.map((itemcr)=>(
        <tbody className='border' key={itemcr}>
          <tr>
            <td className='border p-2'>{itemcr.criteria}</td>
            <td className='border p-2'>{itemcr.salaried}</td>
            <td className='border p-2'>{itemcr.selfemployed}</td>
          </tr>
        </tbody>
         ))
        }
      </table>
      <div className="text-justify md:mx-8 mt-4">
      <li className='mx-5 my-1 text-md'>Employment stability: Minimum two years of work experience in the same job for salaried.</li>
      <li className='mx-5 my-1 text-md'>Employment TypeSalaried workers work with reputable organisations, MNCs and private and public limited companies, and the government. Organisations, PSUs and large enterprises</li>
      <li className='mx-5 my-1 text-md'>Credit Score Preferably 750 or higher as higher credit scores increase loan approval chances</li>
      <li className='mx-5 my-1 text-md'>Salary: At minimum Rs. For salaried customers, 15,000 per month</li>
      <li className='mx-5 my-1 text-md'>Self-employed professionals must ensure their business operations can continue without interruption for a minimum of two years.</li>
      <li className='mx-5 my-1 text-md'>Income: At minimum Rs. 5 lahks per annum For self-employed customers</li>
      </div>
    </div>
    </div>
    
    <div className='container mx-auto my-8 bg-gray-100 p-4'>
      <p className='text-xl font-semibold text-indigo-800 text-center'>Document required for a Personal Loan</p>
      <p  className='text-teal-800 my-3 mx-4 text-md'>Keep the following documents on hand when filling the online application form</p>
       
      <li className='mx-5 list-disc my-1 text-md'> <b >KYC Documents - </b>
      Aadhar card, PAN card, voter ID card, driving licence or any other government-approved KYC document</li>
          <li className='mx-5 list-disc my-1 text-md'> <b >Address Proof - </b>
          Documents such as your electricity bill, rent agreement, or passport may be used as proof of address
          </li>
          <li className='mx-5 list-disc my-1 text-md'> <b >Financial Documents - </b>
          Bank account statement and other financial documents</li>
     <li className='mx-5 list-disc my-1 text-md'> <b >Employee ID Card </b>
     </li>
     

     <p className='text-red-600'>Note- Latest Salary Slip or Form 16, Bank account statement of the last 6 months</p>
      </div>
    
    {/* eligibility ends */}
    
      <HowtoApply/>

      <div className='flex flex-col items-center   my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center mx-auto text-white font-semibold mt-8 py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>

      {/* FAQ STARTS */}


<div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-10">
                    <div class="md:py-36 py-20">
                        <h1 role="heading" class="xl:text-6xl md:text-5xl text-xl font-semibold leading-10 text-white">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                      {/* q1 */}
                        <div class="bg-white shadow rounded p-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">What credit score is required to obtain a personal loan?</h2>
                                </div>
                                <button onClick={() => setBox1(!box1)} class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box1 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {box1 && (
                                <ul class="">
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4">It all depends on the eligibility criteria that the lender has set. Lenders don't usually require a minimum credit score to get a personal loan. Although some lenders will lend to applicants with lower credit scores (less than 750), the interest rate is generally higher.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q2 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">Can I cancel a personal mortgage after the loan amount has been paid?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox2(!box2);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box2 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box2 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4">You may cancel a personal loan at any time after disbursal, subject to the lender's terms. Cancellation fees and cancellation charges will apply to loans. All banks prohibit loan cancellation after the amount has been paid. You can prepay the loan amount according to the bank's terms and conditions and save the interest.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q3 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">Is there a minimum income required to obtain a personal loan?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox3(!box3);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box3 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box3 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4">. Personal loans are available to those with a minimum monthly income. On varies from one lender to the next. For large lenders, such as public and private sector banks, the minimum income eligibility for personal loans is Rs. 15,000 per month or more</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q4 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">Can I get personal loans if I am a pensioner and have a pension account at one of the top banks in India?</h2>
                                </div>
                                <button onClick={() => setBox4(!box4)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box4 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box4 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4">You can get a personal mortgage even if you are a retired person if your pension account is with one of the top banks. You should check that your bank offers personal loans to pensioners.</p>
                                       
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q5 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">What is the process for applying for a personal loan for a student?</h2>
                                </div>
                                <button onClick={() => setBox5(!box5)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box5 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box5 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 mt-4">Students are generally not eligible for personal loans as they must have a steady source of income and good credit. A personal loan is possible if you have a steady monthly income and meet the other eligibility requirements.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q6 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">What personal loans can I get for my marriage?</h2>
                                </div>
                                <button onClick={() => setBox6(!box6)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box6 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box6 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4">You can get a personal loan to cover wedding-related expenses. Personal loans have flexible repayment terms. Many lenders offer personal loans specifically designated as marriage/wedding loans.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}
<div className='flex flex-col items-center  mb-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
        </>
  )
}

export default Ploan