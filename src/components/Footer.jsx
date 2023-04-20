import React from "react";
import "../index.css";
import Logo from "../assets/img/ck.jpg"
import {Link}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div>
      <hr/>
      <footer className="sticky z-10 bg-white  ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 grid-cols-2  mx-auto p-2 justify-evenly">
            <div className="w-3/5 md:w-full m-auto md:-ml-3 hidden md:block">
                <a href="  " className="mb-2 inline-block max-w-[160px]">
                  <img
                    // src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                   src={Logo}
                    alt="logo"
                    className="w-28 my-auto"
                  />
                </a>
            </div>
              <div className="my-5  md:-ml-4 w-full">
                <h4 className="text-dark mb-2 text-lg font-semibold">
                  Quick Links
                </h4>
                <ul className="text-gray-600 ">
                  {/* <li>Help</li> */}
                  {/* <li > DSA LOGIN</li> */}
                  <Link to="/Calculators">
                  <li className="list-disc">EMI Calculator</li>
                  </Link>
                  <Link to="/Calculators">
                  <li className="list-disc">AU VALUE Calculator</li>
                  </Link>
                  <Link to="/Calculators">
                  <li className="list-disc">IDFC FIRST VALUE Calculator</li>
                  </Link>
                  <Link to="/Calculators">
                  <li className="list-disc">SBI SCLICK VALUE Calculator</li>
                  </Link>
                  <Link to="/Calculators">
                  <li className="list-disc">YES BANK VALUE Calculator</li>
                  </Link>
                  {/* <li>Gst Calulator</li> */}
                </ul>
              </div>
      
              <div className="my-5  w-full">
                <h4 className="text-dark mb-2 mx-auto  text-lg font-semibold">
                  Company
                </h4>
                <ul className="text-gray-600 mx-auto  ">
                  <Link to="/CreditklickFamily">
                  <li className="list-disc">About us</li></Link>
                  <li className="list-disc">Careers</li>
                 <Link to='/connectwithus'><li className="list-disc">Contact us</li></Link> 
                  {/* <li>Terms of Use</li> */}
            <Link to="/Privacy-policies">    <li className="list-disc">Privacy Policy</li></Link>  
                  {/* <li>Investors</li>
                   */}
           <Link to="/Blogs">     <li className="list-disc">Blogs</li></Link>
                </ul>
              </div>
              <div className="my-5 w-full">
                <h4 className="text-dark mb-2 text-lg font-semibold">
                  Resources
                </h4>
                <ul className="text-gray-600">
                  <li className="md:list-disc">Credit Score</li>
                  <li className="list-disc lg:list-disc-none">Credit Card</li>
                  <li className="list-disc lg:list-disc-none">Credit Refine</li>
                  <li className="list-disc lg:list-disc-none">Personal Loan</li>
                  <li className="list-disc lg:list-disc-none">Buiness Loan</li>
                  <li className="list-disc lg:list-disc-none">Home Loan</li>
                </ul>
              </div>
         
            <div className="w-full">
              <div className="my-5  md:mx-auto space-y-6">
                  <h4 className="text-dark mb-1 text-lg font-semibold">
                  Follow Us On
                </h4>
                <div className="mb-2 flex items-center">
                  <a
                    href="  "
                    className="text-dark  mr-3 flex h-8 w-7 items-center justify-center sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                  </a>
                  <a
                    href="  "
                    className="text-dark  mr-3 flex h-8 w-7 items-center justify-center sm:mr-4 lg:mr-3 xl:mr-4"
                  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                  </a>
                  <a
                    href="  "
                    className="text-dark  mr-3 flex h-8 w-7 items-center justify-center sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                  </a>
                  <a
                    href="  "
                    className="text-dark  mr-3 flex h-8 w-7 items-center justify-center sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  </a>
                  <a
                    href="  "
                    className="text-dark  mr-3 flex h-8 w-7 items-center justify-center sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  </a>
                </div>
                <p className="text-body-color font-semibold text-base">
                  &copy; 2022-2023 CREDITKLICK
                </p>
               
              </div>
            </div>
          </div>
        </div>
             <p className="text-red-800 mb-7 text-lg"> <marquee behavior="scroll" direction="left">
                CreditKlick does not sell any loans on our own and do not charge any fee from any customers/viewers. We advise customers/viewers to choose from best offers from Banks and its advertisers. We do not guarantee any loans as loan sanction is as per Banks and Nbfcs. We suggest all users to never pay any upfront amount for any loan disbursal and if any person who call you as representative of CreditKlick and ask for any amount report the incident immediately via putting us a mail at <a href="mailto:support@creditklick.com">support@creditklick.com</a>
                </marquee>  </p>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]">
            <svg
              width="217"
              height="229"
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1="281"
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" stop-opacity="0.08" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-10 right-10 z-[-1]">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2="75"
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#13C296" stop-opacity="0.31" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
