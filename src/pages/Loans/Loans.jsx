import React from 'react'
import BL from "../../assets/Images/Loans/BL2.png"
import PL from "../../assets/Images/Loans/PL1.png"
import HL from "../../assets/Images/Loans/HL1.png"
import './Loans.css'
import { useState } from 'react'
import {Link} from "react-router-dom"

const loandetails=[
  {
    heading: "One Stop Shop for Multiple Products",
    content: "CreditKlick provides an array of loan solutions tailored to meet your individual needs. Whether it's a personal loan, home loan or car loan, CreditKlick has multiple reliable choices in each case."
  },
  {
    heading: "Lowest interest rates",
    content:"CreditKlick partners with industrial giants to offer you the lowest interest rates on personal, car or home loans. This translates into savings over time in the form of lower monthly payments for you" 
  },
  {
    heading: "Ease of use",
    content: "CreditKlick.com has been designed with ease of use in mind; all you have to do is select your loan option and answer a series of straightforward questions. Afterward, you will be presented with various loan options available to you; compare interest rates, repayment tenures and other parameters to find the ideal fit for you."
  },
  {
    heading: "Simple online comparison",
    content: "CreditKlick uses various parameters when assessing loans for suitability - rate of interest, EMIs, processing fees, customer feedback. With CreditKlick you never end up with an option that hasn't been thoroughly and thoroughly scrutinized"
  },
  {
    heading: "Transparency",
    content: "Transparency is paramount when it comes to loans. CreditKlick.com ensures all loan options presented to you are open and have no hidden charges. The website provides relevant details like interest rates, processing fees, and other costs up front so it's easier for you to compare loans and make an informed decision."
  },
  {
    heading: "Privacy & Trust",
    content:" CreditKlick takes your privacy seriously. Any personal information provided to us is solely shared with your chosen lender and never shared with a third party for any reason whatsoever. Top banks such as HDFC and Axis Bank have put their faith in CreditKlick, their reliable online technology having been adopted by these lenders to offer their customers the best loan experience on their websites."
  }
]

const loansteps = [
  {
    heading:"step 1",
    content: "Go to CreditKlick's website and select the LOANS menu option on the top navigation bar. Choose which type of loan you need from options such as Personal Loan, Home Loan, Car Loan, Used Car Loan or Education Loan. After selecting your loan type, you'll be presented with a list of popular lending banks along with Get Quote and Explore buttons; click either button to continue."
  },
  {
    heading:"step 2",
    content: "Enter all required information such as loan amount, preferred tenure, income and employment details. CreditKlick provides an intuitive wizard to guide you through this process. After providing all required data, CreditKlick will present you with a list of loan options based on your eligibility. Compare them and pick one that best meets your needs."
  },
  {
    heading:"step 3",
    content: "Once you've selected a loan option, you can begin the application process. CreditKlick will require some additional details like your personal and contact info before approving your application."
  },
  {
    heading:"step 4",
    content: "Once you submit your application to CreditKlick, you will instantly receive an e-approval. Your loan application will then be transferred to the lender of your choice and a customer support executive will contact you within a short period of time. In the meantime, you can track the status of your application through SMS alerts and emails. CreditKlick provides you with multiple loan options from various lenders, so you can compare them and pick the one best suited to your needs. CreditKlick has competitive interest rates and flexible repayment plans. Furthermore, CreditKlick guarantees complete privacy and security of your personal information. Finally, CreditKlick makes getting a loan in India an effortless and intuitive process. Not only will you save time, effort and money but you'll also gain access to some of the best loan options available on the market. With CreditKlick you won't waste any time or energy searching for options - making it the ideal one-stop shop!"
  },
]


const Loans = () => {
  const [list, setList] = useState(loandetails);
  const [step, setStep] = useState(loansteps);
  return (
    <>
    <div className="">
    {/* strip start */}
    <div id ="two" className='shadow-lg bg-blue-400 mb-8  font-bold'>
        <p className=' text-white'>WE PROVIDE</p>
        <div className="box">   
        <ul className='loanslider  text-white'>
            <li className="item-1">PERSONAL LOAN</li>
            <li className="item-2">HOME LOAN</li>
            <li className="item-3">BUSINESS LOAN</li>
        </ul>  
        </div>
    </div>

{/* Loans' card area start */}
<div className="w-4/5 mx-auto h-auto mt-4 pt-3 rounded-lg text-center font-semibold uppercase bg-gradient-to-b from-gray-200 to-gray-100">
        <p className='text-blue-900 text-lg'>we are here to help you. <br /> choose the kind of loan</p>
    </div>
<div className="bg-gray-100 rounded-lg mx-auto w-4/5">
    
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-6 px-8">
    <div className=" m-4 grid ">
   <Link to="/Personalloan">
        <img src={PL} alt=""  className='rounded-xl flex justify-center text-6xl  shadow-lg'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>PERSONAL LOAN</p>
        <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl flex mx-auto mt-3 w-auto">
  Apply Now
</button>  
    </Link>
    </div>
    <div className="m-4 grid">
      <Link to="/Homeloan">
        <img src={HL} alt=""  className='rounded-xl flex justify-center text-6xl shadow-lg'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>HOME LOAN</p>
        <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl flex mx-auto mt-3 w-auto">
  Apply Now
</button>
        </Link>
    </div>
    <div className="m-4 grid">
    <Link to="/Businessloan">
        <img src={BL} alt=""  className='rounded-xl flex justify-center text-6xl shadow-lg'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>BUSINESS LOAN</p>
        <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl flex mx-auto mt-3 w-auto">
  Apply Now
</button>
        </Link>
    </div>
  </div>
</div>
{/* Loans' card area ends */}


{/* apply button area starts */}

{/* Apply button area ends */} 

{/* loan content start */}


<div className="container mx-auto lg:w-4/5 h-auto px-6">
<h3 className='text-2xl text-gray-700 my-4 font-semibold'>The Importance of Choosing the Right Loan in India.</h3>

<p>
Loans have become an essential component of modern society, especially in India. As the middle class has become the primary target market for consumer products, credit is a necessary tool for many to meet their financial obligations. From buying a house, to car repairs, to education or personal emergencies, there is a loan for everyone!
Banks have categorised loans into different types to meet people's varying needs. <br /> A personal loan is an amount of money that the borrower can use for any personal need, while home and auto loans are for the purchase of a home or vehicle, respectively. Education loans help students afford higher education costs. These loan products have become sought-after items in the portfolios of private and public banks, which compete fiercely for customers.
With so many loan offerings, it can be difficult to choose the right one. That's where CreditKlick.com comes in - a user-friendly online platform that makes it easy for people to compare different loans and find one that best suits their needs. Here are some reasons why CreditKlick.com is such a good choice:

</p>
    
<h3 className='text-2xl text-gray-700 my-4 font-semibold'>Why Apply for a Loan at CreditKlick?</h3>

<p>CreditKlick is one loan comparison website that can assist you in making an informed decision. Their user-friendly interface outlines both the pros and cons of each associated loan plan for you to review. Here are some reasons why applying for a loan at CreditKlick might be worth your while:</p>

{
  list.map((item)=>(
    <ul className='mx-4' key={item}>
      <li >
        <h6 className='text-lg text-gray-600 mt-4 font-semibold'>{item.heading}</h6>
        <p>{item.content}</p>
      </li>
    </ul>
  ))
}
<div className='flex flex-col  items-center my-6'>
<Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto lg:mx-96 text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link> 
</div>
<h3 className='text-2xl text-gray-700 font-semibold mt-4'>How to get a Loan in India through CreditKlick?</h3>

<p>Loans have become a widely used financial tool in India, whether for buying a home, car, education or personal expenses. But choosing the right loan option can be daunting with so many loan options available on the market. That's where CreditKlick comes into play - an online platform that simplifies loan applications and assists users in making informed decisions.</p> 
<p className='text-lg text-teal-600 mt-3'> Here's how you can get a loan through CreditKlick:</p>


{
step.map((items)=>(
  <ul className='mx-4' key={items}>
    <li>
      <p className='my-4 font-base text-gray-800 uppercase'>{items.heading}</p>
      <p className='text-sm'>{items.content}</p>
    </li>
  </ul>
))
}




</div>

{/* loan content end */}
<div className='flex flex-col  items-center my-6'>
<Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 items-center  mx-auto lg:mx-96 text-white font-semibold  mt-8 py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link> 
</div>
</div>
    </>
  )
}

export default Loans