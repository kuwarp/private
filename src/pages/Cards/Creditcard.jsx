// import React,{useState} from 'react'
import ccmain from "../../assets/Images/cards/ccmain.png"
import ccmain2 from "../../assets/Images/cards/ccmain2.png"
import idfcm from "../../assets/Images/cards/idfcm.png";
import aum from "../../assets/Images/cards/aum.png";
import sbim from "../../assets/Images/cards/sbim.png";
import yesm from "../../assets/Images/cards/yesm.png";
import credittable from "./credittable";
import char from "./fees";
import StepFirst from "../Auth/StepFirst"
import { Link,Routes,Route } from "react-router-dom";
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
const Creditcard = () => {
window.scrollTo(0,0)

  return (
    <>
      <div>
        <div className="dark:bg-gray-900">
          {/* Hero Start */}
          <div className="lg:flex w-screen  lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1  ">
              <h2 className="text-blue-900 text-center rounded p-4 uppercase shadow-lg lg:mx-6 bg-gray-100 dark:text-white lg:text-4xl text-3xl font-semibold leading-9">
                Credit Card
              </h2>
            </div>
          </div>

          <div className="container mx-auto h-auto rounded-3xl">
      <div className=" w-auto h-auto p-4">
      <div className="md:flex">
        
        <div className="p-8 my-auto">
          <div className="uppercase text-3xl  font-semibold text-indigo-900 text-center ">Compare & Apply Credit Cards Online</div>
          <p className='text-semibold text-md text-blue-900 my-2 p-2'> At CreditKlick, you can search applications online for credit cards and choose the perfect one. By your eligibility, you can review pre-approved offers from top companies like YES Bank, IDFC Bank, AU Bank as well as others. You can also get immediate approval. </p>
          <p className='text-semibold text-md text-blue-900 my-2 p-2'> 
          Credit cards provide benefits in many categories, including fuel, shopping, and travel, with the help of rewards points, cashback and discounts. But you can reap the benefits offered by making an informed decision. Be aware that the most suitable choice for your credit score is one you select according to your habits and spending habits. To make it easier for you to choose the right one with this, we've covered essential details on credit card options on this webpage, you can also compare different benefits by various cards. Find out more about credit card options in India.
</p>
          <div className=' mt-6 mx-auto justify-center'>
          <Link to="/Personal-Information">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
            </Link></div>
        </div><div className="md:shrink-0 p-1 m-auto">
          <img className=" object-cover rounded-xl max-w-md" src={ccmain} alt="Modern building architecture"/>
        </div>
      </div>
      </div>
    </div>
          {/* Hero End */}
          {/* Applying Card  */}

          <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
            
            <div className="container mx-auto px-6 flex items-start justify-center">
                {/* Card is full width. Use in 12 col grid for best view. */}
             
                {/* Card code block start */}
                <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                    <Link to="/Aucards">
                    <div className="mb-3 w-54 rounded-2xl  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={aum} alt=" " />
                    </div>
                    <h2 className="text-blue-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      AU BANK CREDIT CARDS </h2>
                      <button class="bg-blue-400  hover:bg-blue-600 text-white font-semibold py-2 px-4 flex mx-auto rounded-2xl w-auto">
 Check Now
</button>
                   
                  
                    </Link>
                 
                  </div>

                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
               <Link to="/IdfcCards">
                    <div className="mb-3 w-54 rounded-full  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={idfcm} alt=" " />
                    </div>
                    <h2 className="text-blue-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      IDFC FIRST CREDIT CARDS
                    </h2>
                      <button class="bg-blue-400  hover:bg-blue-600 text-white font-semibold py-2 px-4 flex mx-auto rounded-2xl w-auto">
 Check Now
</button>
                  
                    </Link>
                   
                  </div>

                  <div className="w-full h-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                  <Link to="/Sbicards">
                    <div className="mb-3 w-54 rounded-full  flex  cursor-pointer text-indigo-700">
                      <img src={sbim} alt=" " />
                    </div>
                    <h2 className="text-blue-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      SBI CREDIT <br /> CARDS</h2>
                      <button class="bg-blue-400   hover:bg-blue-600 text-white font-semibold py-2 px-4 flex mx-auto rounded-2xl w-auto">
 Check Now
</button>
                    </Link>
                    
                    
                   
                  </div>
                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                 <Link to="/Yescards">
                    <div className="mb-3 w-54 rounded-full  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={yesm} alt=" " />
                    </div>
                    <h2 className="text-blue-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      YES BANK CREDIT CARDS </h2>
                      <button class="bg-blue-400  hover:bg-blue-600 text-white font-semibold py-2 px-4 flex mx-auto rounded-2xl w-auto">
 Check Now
</button>
                   
                  
                    </Link>
                   
                  </div>
                </div>
               
                {/* Card code block end */}
            </div>
          </div>

          {/* Applying Card End */}
          {/* <Link to="/aucards"> <h2>AUCARDS</h2></Link>

<Routes>


  <Route path="/aucards" element={<Aucard/>}/>
</Routes> */}















          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start shadow-xl items-start ">
              {/* <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
              </div> */}
            
              <div className="my-8 mx-auto w-full">
             <StepFirst/>
              </div>
              
              <div className=" flex justify-start items-start flex-col">
                <div className=" lg:mx-2 flex-col justify-start items-start">
                  {/* <div className="mt-2">
                    <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                      Another writing challenge can be to take the individual
                      sentences in the random paragraph and incorporate a single
                      sentence from that into a new paragraph to create a short
                      story. Unlike the random sentence generator, the sentences
                      from the random paragraph will have some connection to one
                      another so it will be a bit different. You also won't know
                      exactly how many sentences will appear in the random
                      paragraph.Another writing challenge can be to take the
                      individual sentences in the random paragraph and
                      incorporate a single sentence from that into a new
                      paragraph to create a short story. Unlike the random
                      sentence generator, the sentences from the random
                      paragraph will have some connection to one another so it
                      will be a bit different. You also won't know exactly how
                      many sentences will appear in the random paragraph.
                    </p>
                  </div> */}
                </div>
                {/* Credit card Table */}

                <div className="mt-8 mx-auto flex-col justify-start items-start">
                  <table class=" lg:mx-56 table:border  md:mx-32 bg-white border-collapse">
                    <tr>
                      <th class="bg-blue-100 border  px-8 py-4">Credit Card</th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        Category
                      </th>
                    </tr>
                    {credittable.map((item) => (
                      <tr key={item}>
                        <td class="border  text-left px-8 py-4">
                          {item.creditcard}
                        </td>
                        <td class="border text-left px-8 py-4">
                          {item.category}
                        </td>
                      </tr>
                    ))}
                    
                  </table>
                  <Link to="/Personal-Information">    
                   <button class="bg-blue-400 hover:bg-blue-600  mx-auto text-white font-semibold flex mt-8 py-2 px-4 rounded-2xl w-auto">
  Apply Now
</button></Link> 
                </div>

                <div className="mt-8 mx-8 justify-evenly items-start">
                  {/* <table    class=" lg:mx-48  md:mx-32 bg-white border-collapse">
           
           <tr>
             <th class="bg-blue-100 border  ">Interest Rate</th>
             <th class="bg-blue-100 border text-left px-8 py-4">Interest Charges</th>
           
           </tr>
           {char.map((item)=>(
           <tr key={item}>
             <td class="border text-left px-8 py-4">{item.rate}</td>
             <td class="border break-words font-semibold text-left px-8 py-4">{item.charge}</td>
           
           </tr>
           
           ))}
         </table> */}

                  <h3 className="text-3xl lg:mx-4 text-teal-800 md:text-start text-center font-semibold mt-4">
                    {" "}
                    Interest Rates and Charges
                  </h3>

                  {char.map((item) => (
                    <ul className="mx-4" key={item}>
                      <li
                        li
                        className="my-4  font-semibold text-gray-800 uppercase"
                      >
                        {item.rate}
                      </li>
                      <li className="lg:mx-4 mb-4 text-sm">{item.charge}</li>
                    </ul>
                  ))}
                </div>

                {/* Credit card Table End  */}
              </div>
            </div>
            {/* <div className="md:px-8  md:px-0 lg:px-1 mt-10 xl:mt-0 h-full xl:w-2/5  flex justify-center ">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start  my-10">
                <div className=" w-54 h-96">
                  {" "}
                  <img src={Card} alt="" />
                </div>

                <div>
                  <p className="md:text-2xl text-lg font-semibold  lg:text-right leading-normal ">
                    Related Articles
                  </p>
                </div>
                <div className="mt-8 ">
                  <p className="md:text-base lg:text-2xl text-lg  lg:text-left leading-normal ">
                    What is credit card?
                  </p>
                  <p className="md:text-base lg:text-2xl text-lg  lg:text-left leading-normal ">
                    What is credit card?
                  </p>
                </div>
                <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                  </div>
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Creditcard;



