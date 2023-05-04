import React from 'react'
import au from "../assets/Images/auimg/aucalc.png"
import { Link } from 'react-router-dom'
import ccico from "../assets/Images/Icon/1.png"
import loico from "../assets/Images/Icon/2.png"
import calico from "../assets/Images/Icon/3.png"
import refico from "../assets/Images/Icon/4.png"
import refine from "../assets/Images/Icon/5.png"
// const people = [
//     {
//       name: 'Credit Cards',
//       role: 'Get your Credit card Instantly ',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     // {
//     //     name: 'Credit Cards',
//     //     role: 'Co-Founder / CEO',
//     //     imageUrl:
//     //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     //   },
//       {
//         name: 'Loans',
//         role: 'Personal Loan, Business Loan, Home Loan, much more',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Finance Calculators',
//         role: 'Calculate your emi or value of your Salary from Creditklick finance calculators ',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Check Cibil Score',
//         role: 'Check your cibil in just 2 min',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Credit Refine',
//         role: 'Low credit score affect your financial journey',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     // More people...
//   ]

const Product = () => {
window.scrollTo(0,0)

  return (
    <>
   
   <div className="container mx-auto">
      {/* <p className="md:text-5xl text-2xl text-center font-bold text-blue-900 mt-5 md:my-10 uppercase">our products</p> */}
 <div className="grid grid-cols-5 mx-6">
 <Link to="/Loans">
                   
  <div className=' w-3/5 md:w-2/5 mt-8 mb-3 h-auto  mx-auto    '>
    <img src={loico} alt="" className='w-full  h-auto mt-auto '/>
  </div>
    <p className='font-semibold hover:text-black m-auto text-center md:text-lg text-xs'>LOANS</p>
  </Link>
  <Link to="/Creditcards">
  <div className=' w-3/5 md:w-2/5 mt-8 mb-3 h-auto  mx-auto    '>
    <img src={ccico} alt="" className='w-full  h-auto mt-auto '/>

  </div>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'>CARDS</p>
  </Link>
  <Link to="/Refine">
  <div className=' w-3/5 md:w-2/5 mt-8 mb-3 h-auto  mx-auto    '>
    <img src={refine} alt="" className='w-full  h-auto mt-auto '/>

  </div>
    <p className='font-semibold hover:text-black  text-center md:text-lg text-xs'>CREDIT REFINE</p>
  </Link>

  <Link to="/Credit-score">
  <div className='  w-3/5 md:w-2/5 mt-8 mb-3 h-auto  mx-auto   '>
    <img src={refico} alt="" className='w-full h-auto  mt-auto '/>

  </div>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'> CREDIT SCORE</p>
  </Link>
  <Link to="/Calculators">
  <div className='  w-3/5 md:w-2/5 mt-8 mb-3 h-auto  mx-auto   '>
    <img src={calico} alt="" className='w-full h-auto  mt-auto '/>

  </div>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs p-1'>CALCULATORS</p>
  </Link>
 </div>
</div>

  

    </>
  )
}

export default Product