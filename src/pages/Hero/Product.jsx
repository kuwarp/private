import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ccico from "../../assets/Images/Icon/1.png"
import loico from "../../assets/Images/Icon/2.png"
import calico from "../../assets/Images/Icon/3.png"
import refico from "../../assets/Images/Icon/4.png"
import scico from "../../assets/Images/Icon/5.png"
const people = [
    {
      name: 'Credit Cards',
      role: 'Get your Credit card Instantly',
      imageUrl:ccico,
       path:"/Creditcards"
      },
    // {
    //     name: 'Credit Cards',
    //     role: 'Co-Founder / CEO',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //   },
      {
        name: 'Loans',
        role: 'Personal Loan, Business Loan, Home Loan, much more',
        imageUrl:loico,
          path:"/Loans",
        },
      {
        name: 'Finance Calculators',
        role: 'Calculate your emi or value of your Salary from Creditklick finance calculators ',
        imageUrl:
        calico,
           path:"/Calculators"
        },
      {
        name: 'Check Credit Score',
        role: 'Check your cibil in just 2 min',
        imageUrl:
         scico,
          path:"/Credit-score"
        },
      {
        name: 'Credit Refine',
        role: 'Low credit score affect your financial journey',
        imageUrl:
         refico,
          path:"/refine"
        },
    // More people...
  ]
const Product = () => {
window.scrollTo(0,0)

  return (
    <>
   


    <div className="bg-white p-4  ">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl lg:my-36">
          <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-5xl">Our Products</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           Creditklick helps You to find your best Credit card or which Loan you want to.
           we also helps you to rebuild yor cibil score
          </p>
        </div>
        <ul  className="grid bg-white  gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <Link to={person.path}>
              <div className="flex shadow-xl h-36 p-2 rounded-xl bg-white-900 items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              
                </div>
                
              </div>
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
    </div>

    </>
  )
}

export default Product