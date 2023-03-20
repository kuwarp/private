// import React,{useState} from 'react'
import Card from "../../assets/img/IDFC3.png";
import Aucard from "./Aucard";
import credittable from "./credittable";
import char from "./fees";
import { Link, Route, Routes } from "react-router-dom";
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
const Creditcard = () => {
  return (
    <>
      <div>
        <div className="dark:bg-gray-900">
          {/* Hero Start */}
          <div className="lg:flex mx-5 lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1  ">
              <h2 className="text-teal-900 rounded p-4 uppercase shadow-lg lg:mx-6 bg-teal-300 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
                Credit Card
              </h2>
            </div>
          </div>

          <div className="mx-auto mt-6  container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              {/* <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">Creditklick</p>
              </div> */}
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
                  Compare & Apply Credit Cards Online
                </p>
              </div>
              <div className="md:mt-3">
                <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">
                  credit score cards provide you with the benefit of making
                  purchases, even when you don’t have the price range, not like
                  a debit card. additionally they allow you an interest-loose
                  duration, generally 15 to 50 days, to repay the dues.
                  additionally, credit score playing cards offer advantages
                  throughout classes like buying, fuel, tour, cashback, rewards
                  and extra. if you are seeking out a brand new credit card,
                  pick one that fits your spending behavior, so that you can get
                  the fine value through your purchases.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full " src={Card} alt="laptops" />
            </div>
          </div>
          {/* Hero End */}
          {/* Applying Card  */}

          <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-6 flex items-start justify-center">
              <div className="w-full">
                {/* Card is full width. Use in 12 col grid for best view. */}
               
                {/* Card code block start */}
                <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                    <Link to="/Aucards">
                    <div className="mb-3 w-54 rounded-2xl  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={Card} alt=" " />
                    </div>
                    <h2 className="text-blue-800 font-semibold dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      AU BANK CREDIT CARDS
                    </h2>
                    </Link>
                  </div>

                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
               <Link to="/IdfcCards">
                    <div className="mb-3 w-54 rounded-full  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={Card} alt=" " />
                    </div>
                    <h2 className="text-blue-800 font-semibold dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      IDFC FIRST CREDIT CARDS
                    </h2>
                    </Link>
                  </div>

                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                  <Link to="/Sbicards">
                    <div className="mb-3 w-54 rounded-full  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={Card} alt=" " />
                    </div>
                    <h2 className="text-blue-800 font-semibold dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      SBI CREDIT CARDS
                    </h2>
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/4 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                 <Link to="/Yescards">
                    <div className="mb-3 w-54 rounded-full  flex items-center justify-center cursor-pointer text-indigo-700">
                      <img src={Card} alt=" " />
                    </div>
                    <h2 className="text-blue-800 font-semibold dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                      YES BANK CREDIT CARDS
                    </h2>
                    </Link>
                  </div>
                </div>
               
                {/* Card code block end */}
              </div>
            </div>
          </div>

          {/* Applying Card End */}


{/* <Routes>
<Link to="/aucards"> <h2>AUCARDS</h2></Link>

  <Route path="/aucards" element={<Aucard/>}/>
</Routes> */}















          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start shadow-xl items-start xl:w-3/4">
              {/* <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
              </div> */}
              <div className="mt-1">
                <p className="text-gray-800 lg:mt-2  dark:text-white lg:text-base text-sm leading-normal">
                  that will help you evaluate and select the exceptional-suited
                  card, we've got listed down the exceptional 10 credit cards in
                  India for 2023 at the side of their features and blessings.
                  through Paisabazaar, you could get right of entry to precise
                  statistics around every credit score card, compare them on a
                  couple of parameters like functions, praise structure, costs
                  and so on. and also, practice for a credit card from our
                  associate Banks.
                </p>
              </div>
              <div className="mt-8 w-full">
                <img
                  className="w-full rounded shadow-2xl"
                  src={Card}
                  alt="office"
                />
              </div>
              <div className="mt-8  flex justify-start items-start flex-col">
                <div className="mt-8 lg:mx-2 flex-col justify-start items-start">
                  <div className="mt-2">
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
                  </div>
                </div>
                {/* Credit card Table */}

                <div className="mt-8  flex-col justify-start items-start">
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
                </div>

                <div className="mt-8  justify-evenly items-start">
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

                  <h3 className="text-2xl lg:mx-4 text-teal-800 font-semibold mt-4">
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
                      <li className="lg:mx-4 text-sm">{item.charge}</li>
                    </ul>
                  ))}
                </div>

                {/* Credit card Table End  */}
              </div>
            </div>
            <div className="md:px-8  md:px-0 lg:px-1 mt-10 xl:mt-0 h-full xl:w-2/5  flex justify-center ">
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
                {/* <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                  </div>
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creditcard;



