import React from 'react'
import bsloan from "../../assets/Images/businessloan.png"
import { useState } from 'react'
// import eligibility from './loaneligibility'
import rupee from "../../assets/Images/bloan/rupee.png"
import approved from "../../assets/Images/bloan/approved.png"
import percentage from "../../assets/Images/bloan/percentage.png"
import time from "../../assets/Images/bloan/time.png"
import Loanform from "./Loanform"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import HowtoApply from './HowtoApply'
import eligibility from './loaneligibility'
import fees from "./feesandcharges"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import ListBulletIcon from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

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

const topUploan=[{
  type:"Interest Rate Type",
  topUp:"Floating"
},
{
  type:"For Salaried Applicants",
  topUp:"8.65%* to 15.00%*"
},
{
  type:"For self-Employed Applicants",
  topUp:"8.85%* to 15.00%*"
}]

const Bloan = () => {
  // const [loantype, setLoantype] = useState(currentLoaninterest);
  // const [tuLoan, setTuLoan] = useState(topUploan);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);
window.scrollTo(0,0)

  return (
  

    <>
{/* title area starts  */}
<div className="mx-2 mt-10">
    <div className="mx-auto container shadow-md bg-blue-100 rounded-lg">
    <div class=" overflow-hidden ">
  <div class="md:flex">
  
    <div class="p-8 my-auto">
      <div class="uppercase text-xl font-semibold text-blue-900">business loan</div>
      <p className='text-semibold text-base text-blue-900 my-2'>Small businesses and entrepreneurs can get business loans to meet their capital needs. Over 20 financial institutions offer tailored business loans at attractive rates to meet your financial needs.</p>
      <div className='flex flex-col  my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
    </div>
    <div class="md:shrink-0 p-5 mx-auto">
      <img class=" object-cover rounded-xl max-w-xs p-2" src={bsloan} alt="Modern building architecture"/>
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
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 bs-gray-100 mx-auto">
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={time} alt="" className='w-20' />
    <p className="text-semibold text-lg text-purple-600 my-2">Apply in just 5 minutes</p>
    <p>Now a days, it is not difficult to apply for a loan in 5 minutes. Since money lending and loan applications started online, applying for instant loans became easy</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={approved} alt="" className='w-20'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Get approved within 72 hours</p>
    <p>The path to achieving your life goals may be often hindered by financial hurdles that may seem too steep to skip. Now with 72 hours Loans you can avail instant offers for a range of uses</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={rupee} alt="" className='w-20' />
    <p className="text-semibold text-lg text-purple-600 my-2">Get loans up to Rs. 50 lakhs</p>
    <p>Avail Business Loan of up to Rs.50 Lakh at attractive interest rates to meet personal urgencies that can crop up anytime in life.</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl' > 
    <img src={percentage} alt="" className='w-20'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Competitive interest rates</p>
    <p>Interest for loans with similar terms charged by private lending institutions in the same area to borrowers of equivalent creditworthiness and access to alternative credit.</p>
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

{/* eligibility area starts */}

<div className="mx-2 p-2">
<div className="container mx-auto text-center space-y-4">
  <p className='text-xl font-semibold text-indigo-800'>Business Loan Eligibility Criteria</p>
  <p  className='text-teal-800 mt-1'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a Business loan:</p>
 
  <table className='table-auto mx-auto'  >
    <thead className='border bg-blue-200 text-blue-900'>
      <tr>
        <th className='border p-3'>Criteria</th>
        <th className='border p-3'>Salaried</th>
        <th className='p-3'>Self-Employed</th>
      </tr>
    </thead>
    {eligibility.map((itemcr)=>(
    <tbody className='border'
     key={itemcr}>
    <tr>
      <td className='border p-3'>{itemcr.criteria}</td>
      <td className='border p-3'>{itemcr.salaried}</td>
      <td className='border p-3'>{itemcr.selfemployed}</td>
    </tr>
  </tbody>
     ))
    }
  </table> 
  <div className="text-justify md:mx-8 mt-4">
  <li className='mx-5 my-1 text-md'>Self-employed professionals and self-employed non-professionals can apply for the loan</li>
  <li className='mx-5 my-1 text-md'>Self-employed professionals include chartered accountants, chartered accountants and company secretaries. Only those applicants who can show proof of their qualifications and are also practising their profession are eligible to apply.</li>
  <li className='mx-5 my-1 text-md'>Non-professional traders and manufacturers are examples of self-employed professionals.</li>
  <li className='mx-5 my-1 text-md'>These entities include partnerships, limited liability partnerships and private limited companies.</li>
  <li className='mx-5 my-1 text-md'>A minimum turnover of Rs.40 Lakh may be required for the business.</li>
  <li className='mx-5 my-1 text-md'>A minimum of three years of experience is required in your current business.</li>
  <li className='mx-5 my-1 text-md'>You must have at least five years' experience in the business.</li>
  <li className='mx-5 my-1 text-md'>For the past two years, the business should have made a profit.</li>
  <li className='mx-5 my-1 text-md'>A minimum annual income (ITR) is required to be Rs. 1.5 lakh per annum.</li>
  <li className='mx-5 my-1 text-md'>The applicants should be between 25 and 55 years old.</li>
  <li className='mx-5 my-1 text-md'>You should have filed the IT returns for the past year.</li>
  <li className='mx-5 my-1 text-md'>Lenders might only offer loans for businesses in certain areas.</li>
  </div>

  {/* <div className='flex flex-col items-center   my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div> */}
</div>
   <div className='container mx-auto my-8 bg-gray-100 p-4'>
  <p className='text-xl font-semibold text-indigo-800 text-center'>Document required for a Business Loan</p>
  <p  className='text-teal-800 my-3 mx-4 text-md'>Keep the following documents on hand when filling the online application form</p>
   
  <li className='mx-5 list-disc my-1 text-md'> Duly filled application form along with passport size photograph</li>
      <li className='mx-5 list-disc my-1 text-md'>KYC documents of the applicant including PAN card, Passport, Aadhar Card, Driving License, Voter ID card, Utility Bills ( Water/Electricity Bills ) 

      </li>
      <li className='mx-5 list-disc my-1 text-md'>Last 1 years' bank statement</li>
 <li className='mx-5 list-disc my-1 text-md'> Copy of Non-Collateral Overdraft, if any</li>
 <li className='mx-5 list-disc my-1 text-md'>
 Copy of Business Incorporation
 </li>
 <li className='mx-5 list-disc my-1 text-md'>
 Any other document required by the lender
 </li>
 
  </div>
</div>

{/* eligibility area ends */}



          {/* how  to apply starts */}
          <HowtoApply />
          {/* how to apply ends */}
          <div className='flex flex-col items-center   my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
{/* extras accordion starts */}
    <div className=" mx-auto mb-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left  font-medium text-md text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>There are many reasons to take a business loan.</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg p-4">
                  <p className="text-blue-800 font-semibold mx-4 text-sm">You can apply for a loan for your business for many reasons. This scheme should only be used when the following conditions are met.</p>
                  <li className='mx-5 list-disc my-1 text-md'>A strong business plan is essential </li>
                  <li className='mx-5 list-disc my-1 text-md'> The business will generate a good amount of cash flow in the long term.</li>
                  <li className='mx-5 list-disc my-1 text-md'> Your business's capital return is higher than the interest on the loan you borrowed</li>

                  <p className=" font-semibold mx-4 text-sm text-blue-800">The following are the conditions under which you may be eligible for a loan to finance your financial needs:</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>When starting a new business</li>
                  <p className='mx-6'>A business loan is available to entrepreneurs who have a business idea and want to make it a profitable venture. To ensure that your loan application is approved, proving that your business idea can generate significant profits to repay the loan interest is essential. Also, ensure that overhead costs are not too high to harm the business's profitability.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>To expand your business</li>
                  <p className="mx-6">A business loan can be a great way to arrange the funds needed to expand an organisation. A business expansion could include opening a new department, launching a product, or upgrading an existing one. It can also be used to expand into new markets or areas. A proven track record indicates that a business can be approved for a loan.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>To buy machinery and equipment</li>
                  <p className="mx-6">A business needs to have a steady supply of a product that is in high demand. The organisation may need to invest in new technology and equipment to increase production. A company may also need to purchase equipment as part of an expansion. In such cases, business loans can be a great option to cover your credit needs.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>To manage cash flows within an organisation</li>
                  <p className="mx-6">Small businesses often have difficulty ensuring that there is sufficient cash flow. A business may struggle to meet its working capital requirements, such as rent, utility bills, overhead salaries, inventory management, rent, and rent. This problem can be solved by a business owner who takes out a loan to address the temporary financial crisis of their company.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>Working capital required for business</li>
                  <p className="mx-6">It is hard to pay regular expenses like salaries, supplies and raw materials when cash flow is low in an organisation due to factors such as market booms and increased operating cycles. An entrepreneur may take out a loan to help keep the business afloat and recover from a financial crisis.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>Turn business losses into profits.</li>
                  <p className="mx-6">A business loan can be used. Even though many lenders are sceptical when funding a less successful/unsuccessful business, corporate applicants with a practical plan that includes significant changes in business operations or introducing a new product might convince them to do so.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>To repay previous debts</li>
                  <p className="mx-6">It is a good idea to repay several small debts with a large loan to avoid hefty interest payments. Businessmen can also do the same thing by taking out a business loan.</p>
                  <li className='mx-5 list-disc my-1 text-md text-blue-900'>Running a seasonal business</li>
                  <p className="mx-6">It might be difficult to manage expenses when your business is only in high demand during certain times of the year. You can get a short-term loan for your business to provide uninterrupted service to customers. The loan can be repaid using the profits from peak seasons.</p>

                  

          
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        


        <Disclosure >
          {({ open }) => (
            <>
               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left text-md font-medium text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>Things to consider when applying for a business loan</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg p-4">

                <p className="text-blue-800 font-semibold mx-4 text-md">Here are some things you need to consider before applying for a loan for your business:</p>

                <p className='mx-5 mt-3 text-md'> <b >Calculate how much your business requires:  </b>
                Lenders often offer large loans to self-employed and business owners. Evaluating your financing needs and finding a loan that can help you finance your business is essential. You should not borrow more than you need as the repayments may be difficult.</p>

                 <p className='mx-5 mt-3 text-md'> <b >Learn more about the types of loans available to businesses:</b>Many banks and lenders offer multiple business loans as part of their product range. There are many options for repayment, including loan terms, loan amounts, tenures and repayment options. Additionally, some business loans are tailored to specific segments or sectors of society. It allows individuals in these groups to get lower interest rates or better terms. Make sure you research the different types of Indian business loans available and then make the right choice.
                </p>
                <p className='mx-5 mt-3 text-md'> <b >Your credit score is a measure of your creditworthiness.</b>A person with good credit is less likely to default on their payments. Before approving a loan, lenders will usually inspect your credit score. A credit score of at least 750 is recommended to increase your chances of getting approved for a loan with an affordable interest rate. Check your credit score before applying for a loan for business. If necessary, take steps to improve it.
                </p>
                <p className='mx-5 mt-3 text-md'> <b >Learn the repayment terms: </b>
                For business loans, the amount borrowed is usually repaid using Equated Monthly Installments. Lenders will usually consider your ability to repay the loan and determine an affordable term and monthly EMI. You must ensure you are familiar with your lender's repayment terms as an applicant. It would be best not to default on EMI payments as it could cause credit scores to drop.
                </p>
                <p className='mx-5 mt-3 text-md'> <b >Review the charges: </b>
                The charges for business loans include interest rate, preclosure fee and documentation fees, as well as processing fee, preclosure fee and documentation fee. There may also be a part-payment fee or default fee. Check the fees charged by different lenders to understand their impact on the loan cost.
                </p>
                
                <p className='mt-3'> <b>These are just a few things you need to consider when applying for a loan. It is a good idea to compare different lenders' offers before choosing one that best suits your needs.</b> </p>
                
        
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>



             </div>
    </div>
{/* extras accordion ends */}


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
                            <div class="flex items-center justify-between cursor-pointer " onClick={() => setBox1(!box1)}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">What security do I need to provide to obtain a loan for my business?</h2>
                                </div>
                                <button  class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">A business loan does not require collateral or security. However, a careful review of your documents will confirm this. To find out what the terms and conditions of your lender requirements are, you can review them.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q2 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between cursor-pointer" onClick={() => {
                                        setBox2(!box2);
                                    }}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">I am a physician and have been practicing for ten years. To start my own practice, can I get a loan for a business?</h2>
                                </div>
                                <button
                                    
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">All practicing professionals are eligible for business loans, provided they can provide proof of their qualifications.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q3 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between cursor-pointer"  onClick={() => {
                                        setBox3(!box3);
                                    }}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">Do I need to give my personal information to use the EMI calculator and calculate EMIs for my business loan?</h2>
                                </div>
                                <button
                                   
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">You will not be asked to provide personal information when calculating your expected EMI. The EMI calculator requires only the amount of the loan you are applying for, the term of the loan and the interest rate.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q4 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between cursor-pointer" onClick={() => setBox4(!box4)}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">What are the purposes of a business loan?</h2>
                                </div>
                                <button  data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">A business loan can be applied for the following purposes or similar.</p>
                                        <li className='list-disc mx-6 text-gray-600'>Small business financing</li>
                                        <li className='list-disc mx-6 text-gray-600'>Working Capital Finance</li>
                                        <li className='list-disc mx-6 text-gray-600'>Renovation of your home</li>
                                        <li className='list-disc mx-6 text-gray-600'>Finance for business expansion</li>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q5 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between cursor-pointer" onClick={() => setBox5(!box5)}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">How much liquidity is the Reserve Bank of India (RBI) under the AtmarnirbharBharat Abhiyan plan?</h2>
                                </div>
                                <button  data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
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
                                        <p className="text-base leading-normal text-gray-600 mt-4 ">The RBI will inject Rs.3.74 million crores, of which Targeted Long Term Repo Operations will be worth Rs.1 crore. One hundred basis points will cut the Cash Reserve Ratio to 3% net demand and time liabilities of Rs.1.37 million crores. Marginal Standing Facility accommodation was increased from 2% to 3% Rs.1.37 crore.</p>
                                        <p className="text-base leading-normal text-gray-600 mt-4 ">The RBI will also inject liquidity equal to 0.5% of GDP. NABARD, SIDBI and SHB for the second phase will reserve Rs.50,000 crore.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q6 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between cursor-pointer" onClick={() => setBox6(!box6)}>
                                <div>
                                    <h2 class="text-base md:text-xl font-semibold leading-none text-gray-800">Does the government have a moratorium on the payment of loans to businesses?</h2>
                                </div>
                                <button  data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">Yes, you will receive a repayment term of 4 years with a one-year moratorium.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}
<div className='flex flex-col items-center  my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>
    </>
  )
}

export default Bloan