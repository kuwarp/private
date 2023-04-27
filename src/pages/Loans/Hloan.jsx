import React from 'react'
import random from "../../assets/Images/authloan.png"
// import leftpic from "../../assets/Images/ploan.png"
import { useState } from 'react'
import eligibility from './loaneligibility'
import Loanform from './Loanform'
import HowtoApply from './HowtoApply'
import database from "../../assets/Images/bloan/database.png"
import simple from "../../assets/Images/bloan/simple.png"
import track from "../../assets/Images/bloan/track.png"
import percentage from "../../assets/Images/bloan/percentage.png"
import { Link } from 'react-router-dom'


const Hloan = () => {
  // const [eligible, setEligible] = useState(eligibility);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);

  window.scrollTo(0,0)

  return (
  

    <>
    {/* starting tile area starts  */}
    <div className="mx-2 mt-10">
        <div className="mx-auto container shadow-md bg-indigo-100 rounded-lg">
        <div class=" overflow-hidden ">
      <div class="md:flex">
        <div class="p-10 space-y-6">
          <div class="uppercase text-xl text-blue-00 font-semibold text-blue-900">home loan</div>
          <p class="mt-2 text-blue-800">Banks and Housing Finance Companies (HFCs) offer housing loans ranging from 75% to 90% of the value of the property, depending on the creditworthiness of the borrower, subject to lending limits set by banks and the RBI. The term of a home loan can be up to 30 years and is based on the age of the borrower and their ability to repay the loan. At CreditKlick.com, we help you evaluate home loan interest rates and other services offered by leading banks and HFCs. You can also apply online to get the best option for your credit report.</p>
      
          <div className='flex flex-col   my-6'>
  <Link to="/Personal-Information">    
                     <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto  text-white font-semibold py-2 px-4 rounded-2xl w-auto">
    Apply Now
  </button></Link> 
  </div>

        </div>
        <div class="md:shrink-0  p-5 mx-auto">
          <img class=" object-contain rounded-xl max-w-xs mx-auto p-2" src={random} alt="Modern building architecture"/>
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
    <img src={percentage} alt="" className='w-20' />
    <p className="text-semibold text-lg text-purple-600 my-2">Low EMI</p>
    <p>Apply for higher loan amount with an extended tenure of 30 years to enjoy low EMIs</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={database} alt="" className='w-20'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Vast database of CreditKlick approved projects</p>
    <p>Enjoy faster loan disbursement in projects approved by us</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={track} alt="" className='w-20' />
    <p className="text-semibold text-lg text-purple-600 my-2">Trackmyloan</p>
    <p>Facility to check your Home Loan status on the go</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl' > 
    <img src={simple} alt="" className='w-20'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Simplified Disbursement</p>
    <p>Hassle-free disbursement with minimal documentation</p>
  </div>
</div>
</div>

<div className='flex flex-col  items-center my-6'>
<Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto lg:mx-96 text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link> 
</div>
{/* features area ends */}

    
    <div className="mx-2 p-2">
    <div className="container mx-auto text-center space-y-4">
      <p className='text-lg font-semibold text-indigo-800'>Home Loan Eligibility Criteria</p>
      <p  className='text-teal-800'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a home loan:</p>
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
    </div>
    <div className='container mx-auto my-8 bg-gray-100 p-4'>
  <p className='text-xl font-semibold text-indigo-800 text-center'>Document required for a Home Loan</p>
  <p  className='text-teal-800 my-3 mx-4 text-md'>Housing loans provided by banks and NBFCs are secured loans and are provided for a long term, taking into account the amount of the loan and the income of the individual. Different lenders or financiers have different criteria for credit worthiness which include age, income, business, job stability etc.</p>
  <h2 className='text-lg font-semibold text-teal-800 my-3 mx-4'>Home Loan Income Eligibility and criteria for Salaried Individuals</h2>
  <li className='mx-5 list-disc my-1 text-md'> <b >Age - </b>
  The minimum age to apply for a home loan is 21 years, and the maximum age is 58 years or retirement age, whichever is earlier. A home loan should be repaid before the borrower exceeds the age limit set by the Internal Revenue Service.</li>
      <li className='mx-5 list-disc my-1 text-md'> <b >Income -</b>
      The minimum net income required for a salaried individual is Rs. 20.00 thousand per month
      </li>
      <li className='mx-5 list-disc my-1 text-md'> <b >Work experience and job stability - </b>The applicant should have at least 2 years of work experience in a full time job.</li>
 
 <li className='mx-5 list-disc my-1 text-md'> <b >Repayment history for all loans -</b>
 A salaried person applying for a home loan should have a clear repayment history for all existing and closed loans and credit cards.
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Type of Residence -</b>
      A loan applicant must reside at the current residence for at least the last 6 months, or it should be an owned or parental property.
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Credit score -</b>
      Employees applying for a home loan should have a CIBIL score (credit score) of at least 700. The CIBIL score depends on your repayment history on bank transactions, loans and credit cards. A good CIBIL score depends on your clear repayment behavior on loans and credit cards. Cases with a CIBIL score of less than 700 will be referred to the bank's policy and risk team for a deviation from loan approval. If you have never availed a loan or credit card from a bank or NBFC, your CIBIL score should be minus one (-1); in such cases, banks will take a variance to approve the home loan for employees. <br />
      Under the Employee Housing Loan Scheme, employees of Indian private companies, public sector companies, multinational companies (with branches in India), employees of banks, schools/colleges and local companies can apply for a housing loan.

      </li>

      <h2 className='text-lg font-semibold text-teal-800 my-3 mx-4'>Income requirements and criteria for self-employed entrepreneurs for a housing loan</h2>

      <p  className='text-teal-800 my-3 mx-4 text-md'>An independent contractor must be a resident of India and have valid KYC (know your customer) and financial statements, as well as a regular and stable monthly business income to repay the loan.</p>

      <li className='mx-5 list-disc my-1 text-md'> <b >Age -</b>
      The minimum age to apply for a home loan is 21 years and the maximum age is 65 years. A home loan should be repaid before the borrower exceeds the age limit set by the lender.
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Income -</b>
      The minimum net income required for a self-employed person is Rs. 2.50 lacs per annum. 
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Work experience and professional stability -</b>
      The loan applicant must have been in business for at least 3 years at the time of applying for the loan.

      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Repayment history of all loans -</b>
      A self-employed person applying for a home loan should have a clear repayment history for all existing and closed loans and credit cards taken in the name of the business or individual.
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Type of Residence -</b>
      A loan applicant must reside at the current residence for at least the last 6 months or it should be owned or parental property.
      </li>

      <li className='mx-5 list-disc my-1 text-md'> <b >Credit Bureau Score -</b>
      Self-employed individuals applying for a home loan must have a CIBIL score (credit bureau score) of at least 700. The CIBIL score depends on your repayment history on bank transactions, loans and credit cards. A good CIBIL score depends on your clear repayment behavior on loans and credit cards. Cases with a CIBIL score of less than 700 will be referred to the bank's policy and risk team for a deviation from credit approval. If you have never availed a loan or credit card from a bank or NBFC, your CIBIL score should be minus one (-1). In this case, banks will take a deviation from the guideline to approve the housing loan for an independent contractor.

      </li>

        <p className='font-semibold'>To be eligible to apply for housing loan under self-employed scheme, the loan applicant should be running his own business and may be engaged in trade, manufacturing, service, consultancy or professional practice like CA, CS, doctor etc. He should pay income tax and other taxes required by law on time.</p>

      <p className="text-red-800 my-4">NOTE: Apart from the parameters mentioned above, in addition to the above parameters, your credit eligibility for a mortgage also depends on the type of property you're purchasing and the area in which the home is situated.</p>
  </div>
    </div>


    {/* how to apply area starts */}

    <HowtoApply />

    {/* how to apply area ends */}

    <div className='flex flex-col  items-center my-6'>
<Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto lg:mx-96 text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
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
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">Do I qualify for a home loan to cover the home's value?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">No, you can't get a mortgage to the total value of your property because the Reserve Bank of India (RBI) has put a cap on the loan-to-value (LTV) proportion of loans for housing. According to the RBI guidelines, the LTV ratio could be increased to 90 per cent of the property's value for loans up to Rs 30 lakh. For loans of more than 30 lakhs and up to 75 lakhs in the case of Rs 75 lakh, the LTV ratio is limited to 80 per cent of the property's value. Likewise, for loans exceeding 75 lakhs in value, the LTV ratio could go up to 75 per cent of the property's value. It means that at least 10 per cent of the remaining value has to be paid by the lender as a down amount.
Based on the caps set in the RBI on LTV ratios, banks/HFCs also determine the LTV ratio according to the credit profile and risk assessment of the loanee. Creditworthy applicants with lower credit scores tend to be offered a lower LTV ratio.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q2 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">How can lenders determine the EMI creditworthiness of their mortgage applicants?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">Lenders consider the ability to repay homeowners when assessing their loan application and amount admissibility. House loan lenders generally prefer to lend to home loan applicants with the total EMIs, which includes the EMI of the home loan, which is less than 50-60 per cent of their monthly income. Therefore, home loan applicants can use the online mortgage EMI calculator to determine the best amount of a house loan and length, depending on their capacity to repay.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q3 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">What credit score do I need to be eligible for a mortgage for my home?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">Lenders prefer sanctioning mortgages for homeowners with a score of 750 or over since good credit scores indicate good credit habits and reduce the risk of credit for lenders. It is why lenders often provide lower interest rates for those with high credit scores. However, some lenders offer loans to homeowners with poor credit scores at higher interest rates. It is why one should be sure to check the credit score of their clients regularly. Anyone with no or low credit scores may be able to improve or improve their credit score through secured credit cards, such as the CreditKlick Step-Up credit card.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q4 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">Who can co-sign on a home loan?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">The spouse of your blood relatives, like your mother, father and siblings, can co-sign on a home loan with you. In addition, all co-owners of the property are required to be co-applicants on mortgages for housing.</p>
                                    </li>
                                </ul>
                            )}
                        </div>

                      {/* q5 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">Are there any charges for prepayments for a home loan?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">. In the case of home loans with floating rates, lenders do not apply a prepayment penalty by RBI guidelines. However, lenders can impose a penalty for early payment in the case of prepayment for mortgages with fixed rates.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                      
                      {/* q6 */}
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold  md:text-xl leading-none text-gray-800">Can I get two loans for my home simultaneously?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 ">Yes, suppose the creditor of the second loan to you has confidence in your capacity to pay, your credit profile, and the specifics of the pledged property and the property you are pledging. In that case, you may be eligible for another loan to buy another property.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}
<div className='flex flex-col  items-center mb-6'>
<Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto lg:mx-96 text-white font-semibold py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link> 
</div>

        </>
  )
}

export default Hloan