import React from "react"
import "../../index.css"
import "../../styles.css"
// import about1 from "../../assets/img/bg-map.png"
import { Parallax } from "react-parallax";
import about2 from "../../assets/img/about1.jpg"
import Newsletter from "./Newsletter";
// import aboutx from "../../assets/img/about1.jpg"


// const links = [
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
//   ]
const insideStyles = {
    // background: "black",
    padding: 20,
    position: "absolute",
    top: "40%",
    left: "10%",
  };
  
  
  export default function About() {
    window.scrollTo(0,0)
    return (
        <>
      <div className="relative isolate overflow-hidden pb-10">
       
        <Parallax blur={{ min: -3, max:5 }} className="parallaxdiv">
            <div className="parallaxdiv">
                <div style={insideStyles}>
                    <h2 className="text-4xl font-bold tracking-tight text-teal-800 sm:text-6xl">ABOUT US</h2>
                    <p className="mt-6 text-2xl leading-8 text-indigo-600">THE CREDITKLICK STORY</p>
                </div>
            </div>
        </Parallax>
        
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">   ABOUT US</h2>
           
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div> */}

      
      </div>


    {/* <div className="flex flex-row mx-auto ">
        <div className="mx-auto ">
            <p className="text-rose-700 font-semibold"> WE MAKE PERSONAL FINANCE EASY, CONVENIENT & TRANSPARENT</p><br></br>
            <p className="text-5xl font-semi-bold text-blue-800">WELCOME TO CREDITKLICK</p> <br></br>
            <p className="text-sky-700 text-clip mr-11">Using data and technology innovations, we help you choose the most-suited financial products. Our algorithm-based technology platform provides you with access to multiple personal credit offers, ease of comparison of multiple offers available and unbiased advice. From application to disbursal, CreditKlick will accompany you at each step, till the disbursal of loan or issuance of credit card</p>
        </div>
        <div className=" ">
            <img src={about2} alt=""  />
        </div>
    </div>

     */}


<div className="max-lg p-5 bg-white rounded-xl overflow-hidden lg:max-2xl">
  <div className="lg:flex">
    
    <div className="space-y-8 container my-auto">
    <p className="text-pink-400 text-xl  font-semibold"> WE MAKE FINANCE EASY, CONVENIENT & TRANSPARENT</p>
    <p className="text-4xl font-semi-bold text-blue-800">WELCOME TO CREDITKLICK</p>
      {/* <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a> */}
      <p className="text-sky-700 text-lg">Using data and technology innovations, we help you choose the most-suited financial products. Our algorithm-based technology platform provides you with access to multiple personal credit offers, ease of comparison of multiple offers available and unbiased advice. From application to disbursal, CreditKlick will accompany you at each step, till the disbursal of loan or issuance of credit card</p>
    </div>
    <div className="lg:shrink-0">
      <img className="max-w-lg w-full object-cover  rounded-lg" src={about2} alt="About"/>
    </div>
  </div>
</div>

    <div className="bg-gradient-to-r from-gray-200 to-blue-400 	w-full h-auto my-8 text-center shadow-lg" >
      <p className="text-4xl uppercase pt-16 text-slate-800">Ready to talk ?</p>
      <p className="text-xl uppercase p-4 text-slate-800">Our team is here to answer your question about CreditKlick</p>
      <p className="text-xl uppercase pb-4 text-slate-800">More that 1.5 million businesses and organizations use CreditKlick</p>
    <button className="bg-blue-400 text-slate-800 hover:bg-blue-900 font-semibold hover:text-gray-200 rounded-lg shadow-xl p-2 mb-8">CONTACT US</button>
    </div>

    <Newsletter/>
</>
    )
  }
  