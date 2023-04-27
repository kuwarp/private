import React,{useState} from 'react'
import Exp from "../../assets/Images/expert.gif"
// import Cnt from "../../assets/Images/cnt.jpg"
import Analyse from "../../assets/Images/Refine/analyise.png"
import Educate from "../../assets/Images/Refine/educate.png"
import Karma from "../../assets/Images/Refine/karma.png"
import Karma1 from "../../assets/Images/Refine/karma1.png"
import login from "../../assets/Images/Refine/login.png"
import form from "../../assets/Images/Refine/form.png"
import navi from "../../assets/Images/Refine/navi.png"
import rupees from "../../assets/Images/bloan/rupees.png"
import approved from "../../assets/Images/bloan/approved.jpg"
import time from "../../assets/Images/bloan/time.png"
import redrefine from "../../assets/Images/Icon/redrefine.png"
import emirefine from "../../assets/Images/Icon/emirefine.png"
import eyerefine from "../../assets/Images/Icon/eyerefine.png"
import iderefine from "../../assets/Images/Icon/iderefine.png"


import { Link } from 'react-router-dom'
const Refine = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
window.scrollTo(0,0)

  return (
    <>

{/* Hero Start */}

<div className="container mx-auto h-auto rounded-3xl shadow-lg">
      <div className="bg-gradient-to-l rounded-3xl from-blue-300 to-gray-100 w-auto h-auto border border-1  p-4">
      <div className="md:flex">
       
        <div className="p-4 my-auto space-y-8">
          <div className="uppercase text-4xl  font-semibold text-indigo-900 text-left ">How Credit Refine can boost your financial future!</div>
          <p className='text-semibold text-2xl text-blue-900 my-2 p-2'>Credit refine improves your credit score, which leads to better financial products and services, and ultimatey financial stability and wealth building opportunities.
</p>
<div className="uppercase text-3xl  font-semibold text-indigo-900 text-left ">Talk to an <span className='text-red-500'>Expert </span> </div>

<Link to="/queries">
          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">Connect Now</button>
            </div>
            </Link>
        </div>
     

        <div className="md:shrink-0 sm:shrink-0 p-5 lg:mx-15  mx-auto">
          <img className=" object-cover  rounded-xl lg:max-w-xl" src={Exp} alt="Modern building architecture"/>
        </div>
      </div>
      </div>
    </div>

{/* Hero End */}



{/* Our Process Starts bigScreen */}


<div classname="overflow-y-hidden bg-gray-100 ">
    <div className="mx-auto container hidden  lg:block f-f-p px-4 xl:px-0 py-24">
      <h1 className="focus:outline-none text-center text-4xl font-semibold lg:leading-9 tracking-wider text-gray-900">How We Works?</h1>
      <div className="md:mt-12 f-f-p">
         

      <div className="  md:flex justify-center w-full">
          <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
            <div aria-label="sign up" role="img" className='w-40'>
              <img className="focus:outline-none mt-10" src={login} alt="how it work" />
            </div>
            <div aria-label={2} role="img">
              <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
            </div>
            <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Raise Your Application</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Book a slot to navigate your importance  </h2>
            </div>
            <div aria-label="transactions" role="img" className='w-40'>
              <img className="focus:outline-none mt-24" src={navi} alt />
            </div>
            <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
          </div>


       
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
           
              {/* Setp1 */}
            <div aria-label={1} role="img" className='mt-10'>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">SignUp for an Account</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Log In to our website or Register yourself  . </h2>
            </div>

               {/* Setp1 End */}
            <div aria-label="wallet" role="img" className='w-40  mt-28'>
              <img className="focus:outline-none" src={form} alt />
            </div>
            <div aria-label={3} role="img" className='mt-24'>
              <img className="focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt=" " />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Connect with Consultant</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Our Professional Consultant assist you as soon as possible. Know your importance in details.</h2>
            </div>

              <div className=' lg:h-48' aria-label={2} role="img">
             
            </div>
          </div>
          
        </div>
        <img className='flex  col my-8  justify-center items-center w-2/5 mx-auto ' src={Karma1} alt="" srcset="" />



        {/* <div className="md:hidden flex flex-col items-center w-full">
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
            <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
          <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
          <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
          </div>
        </div> */}
      </div>
    </div>
  </div>


{/* Our Process Ends bigScreen*/}


{/* smallScreen how we works starts */}

<div className="grid grid-cols-1 lg:hidden ">
<h1 className="focus:outline-none text-center text-4xl font-semibold lg:leading-9 tracking-wider text-gray-900">How We Works?</h1>
    
    <div aria-label="sign up" role="img" className='w-28 mx-auto'>
        <img className="focus:outline-none mt-10" src={login} alt="login" />
    </div>
    <div>
        <div aria-label={1} role="img" className='mt-8'>
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" className='mx-auto' alt />

        </div>
        <div className="flex mt-6 flex-col items-center ">
            <h1 className="focus:outline-none text-xl text-center font-semibold leading-5">SignUp for an Account</h1>
            <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Log In to our website or Register yourself  . </h2>
        </div>
    </div>
    <div aria-label="transactions" role="img" className='w-28 mx-auto'>
              <img className="focus:outline-none mt-10" src={navi} alt="Raise your application" />
            </div>
    <div> 
        <div aria-label={2} role="img" className='mt-8'>
            <img className="mx-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
        </div>
        <div className="flex mt-6 flex-col items-center">
            <h1 className="focus:outline-none text-xl text-center font-semibold leading-5">Raise Your Application</h1>
            <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Book a slot to navigate your importance  </h2>
        </div>
    </div>
    <div aria-label="transactions" role="img" className='w-28 mx-auto'>
              <img className="focus:outline-none mt-10" src={form} alt="Raise your application" />
            </div>
    <div>
    <div aria-label={2} role="img" className='mt-8'>
            <img className="mx-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
        </div>
        <div className="flex mt-6 flex-col items-center ">
              <h1 className="focus:outline-none text-xl text-center  font-semibold leading-5">Connect with Consultant</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Our Professional Consultant assist you as soon as possible. Know your importance in details.</h2>
            </div>
    </div>
  <img className='flex  col my-8  justify-center items-center w-2/5 mx-auto ' src={Karma1} alt="" srcset="" />

</div>

{/* smallScreen how we works ends */}



{/* Contact Us Start  */}

< div className = "  2xl:mx-auto 2xl:container md:px-20 px-4 " > 
                    {/* < img src = {Cnt} alt = " city view " className = "opacity-30 w-full h-full rounded-md object-center object-fill absolute sm:block hidden " />    
                    < img src = " https://i.ibb.co/LQpxBsc/mobile.png " alt = " city view " className = " opacity-20 w-full h-full rounded-md absolute object-center object-fill sm:hidden " />     */}
                    < div className = " text-xl relative z-20 bg-gradient-to-r from-blue-500 to-blue-100 md:flex flex-row-2 w-full top-0  md:p-16 p-8 justify-between rounded-md ring-1 ring-blue-100" > 
                        <div className='space-y-8'> 
                            <h1 className = "md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white w-auto" >Book a Call with Expert  </h1> 
                            <p className = "text-xl font-semibold text-blue-900 leading-6 w-auto mt-4" >Need personalized guidance to solve your question? Don't worry!<br/> Call a trained credit professional to make an appointment. </p> 
                        </div> 
                                                < div className = "flex my-auto md:pt-0 pt-8" > 
                                                <Link to="/queries">
                            < button className = " text-base  font-medium text-white bg-gradient-to-r h-12 px-4 from-blue-500 to-blue-300 w-auto rounded  hover:bg-gray-100  mx-auto " > TALK TO TEAM </ button > 
                            </Link>
                        </div> 
                                            </div> 
                                    </div> 





                                    <div className="mx-auto container mt-8">
                                        <p className="text-center font-semibold md:text-4xl text-3xl text-blue-900 my-8">EXCLUSIVE FEATURES</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 bs-gray-100 mx-auto">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">An Individual Credit Coach</p>
        <p className='text-lg font-semibold text-gray-700'>Expert Guidance with our Credit Coach</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">Credit Health Reports</p>
        <p className='text-lg font-semibold text-gray-700'>Get personalised Credit Report.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">Free Account Dispute Service</p>
        <p className='text-lg font-semibold text-gray-700'>One time free account dispute can be filed with the Experian Bureau.</p>
      </div>
    </div>
    </div>




{/* Contact us End */}

{/* Our Vision Start*/}


<div className="2xl:container 2xl:mx-auto  lg:px-20 py-4 px-4">
            
                {/* Educate Starts */}
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12 my-auto">
                    <h2 className="w-full font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9">We Educate & Analyse</h2>
                    <p className="font-normal text-xl leading-6 text-gray-600 mt-6">We educate you on the best ways to improve your credit score, so that you can take steps towards a better financial future. We analyse information from all of your accounts and give you an holistic view of what not only affects your credit score but also how much you have in total debt.
</p>
                </div>
                <div className="w-full lg:w-6/12 p-8">
                    <img className="lg:block hidden  w-full" src={Educate} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src={Educate} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src={Educate} alt="people discussing on board" />
                </div>
            </div>
              {/* Educate Ends */}
            
                {/* Cordination Starts */}
            <div className="flex lg:flex-row  flex-col lg:gap-8 sm:gap-10 gap-12">

            <div className="w-full lg:w-6/12 md:p-8">
                    <img className="lg:block  hidden my-auto w-full" src={Analyse} alt="people discussing on board" />
                    {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" /> */}
                    {/* <img className="sm:hidden  block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" /> */}
                </div>


                <div className="w-full  lg:w-6/12 my-auto">
                    <h2 className="w-full font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9">We Coordinate & Resolve</h2>
                    <p className="font-normal text-xl leading-6 text-gray-600 mt-6">Our team of experts coordinate the best available solutions to resolve your consumer credit issues. We take a holistic approach to understanding the problems, the current trends and what can be done to make things better. Our services include: credit repair, debt management and consolidation.

</p>
                </div>
                <div className="w-full lg:hidden sm:block lg:w-6/12">
                    {/* <img className="lg:block  hidden lg:-mt-32 w-full" src={Exp} alt="people discussing on board" /> */}
                    <img className="lg:hidden sm:block hidden w-full" src={Analyse} alt="people discussing on board" />
                    <img className="sm:hidden  block w-full" src={Analyse} alt="people discussing on board" />
                </div>
            </div>

{/* Cordination Ends */}

<div className="mx-auto  my-16">
    <p className="text-center font-semibold text-4xl text-blue-900 my-10">WHY USE CREDIT REFINE</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 bg-gray-100 mx-auto py-4 rounded-xl">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={emirefine} alt="" className='w-28 mx-auto rounded-full shadow-lg'/>
        <p className="font-semibold text-xl text-blue-800 ">To achieve a credit score above 800</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={redrefine} alt="" className='w-28 mx-auto rounded-full shadow-lg'/>
        <p className="font-semibold text-xl text-blue-800 ">Reduce the monthly cost of EMI.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={eyerefine} alt="" className='w-28 mx-auto rounded-full shadow-lg' />
        <p className="font-semibold text-xl text-blue-800 ">You can keep an eye on your Credit Profile</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={iderefine} alt="" className='w-28 mx-auto rounded-full shadow-lg' />
        <p className="font-semibold text-xl text-blue-800 ">Identify accounts that affects your Credit Score.</p>
      </div>
    </div>
    </div>

            {/* <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">50M montly enrichments</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="sm:block hidden">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div> */}

           
        </div>










{/* Our Vision End */}

{/* FAQ STARTS */}


<div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
                    <div class="md:py-36 py-20">
                        <h1 role="heading" class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        <div class="bg-white shadow rounded p-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">What is a credit refine service?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Our credit refine service is a program designed to help individuals improve their credit scores. We work with clients to identify areas for improvement and develop a personalized plan to help them achieve their credit goals.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">How does the credit refine service work?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Our credit refine service starts with a free consultation to assess your current credit situation and identify areas for improvement. We then develop a personalized plan that may include strategies such as disputing inaccuracies on your credit report, negotiating with creditors, and providing guidance on how to improve your credit utilization and payment history. We provide ongoing support throughout the process to help you achieve your credit goals
.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">What are the benefits of using a credit refine service?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Using our credit refine service can help you improve your credit score, which can lead to lower interest rates and better loan terms. It can also help you qualify for credit cards and loans that you may not have been eligible for before.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">How long does it take to see results with a credit refine service?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">The amount of time it takes to see results with our credit refine service varies depending on your individual credit situation. Some clients may see results within a few months, while others may take longer. However, we work with you to develop a personalized plan and provide ongoing support to help you achieve your credit goals as quickly as possible.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">Is using a credit refine service worth the investment?</h2>
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
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Using a credit refine service can be a worthwhile investment if you're struggling with a low credit score and want to improve your creditworthiness. The cost of our service is reasonable, and the benefits of improving your credit score can save you money in the long run by qualifying you for better loan terms and interest rates.
<br/><br/>
When answering these questions, it's important to provide clear and concise answers that directly address the question. Additionally, using bullet points or numbered lists can help make the information more digestible and easier to read.

</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}





    </>
  )
}

export default Refine