import React from 'react'
import applypic from "../../assets/Images/images.png"
import { useState } from 'react'

const stepstoapply =[
    {
        heading:"STEP 1",
        content: "Click on APPLY NOW"
    },
    {
        heading:"STEP 2",
        content: "Enter your mobile no. and click on 'I have read & agreed to the terms and conditions'."
    },
    {
        heading:"STEP 3",
        content: "Click on VERIFY"
    },
    {
        heading:"STEP 4",
        content: "Please enter OTP sent to your mobile no. and click NEXT"
    },
    {
        heading:"STEP 5",
        content: "Please enter First Name, Last Name, Email Address, City and click on CONTINUE"
    },
    {
        heading:"STEP 6",
        content: "Facility to check your Loan status on the go"
    },

]

const HowtoApply = () => {
    const [apply, setApply] = useState(stepstoapply);
window.scrollTo(0,0)

  return (
    <>

    <div className="mx-auto container my-8 p-1 bg-gray-100 rounded-md  ">
<p className="text-xl font-semibold text-indigo-900 text-center mt-8">HOW TO APPLY</p>
        <div className="mx-6 id grid lg:grid-cols-3 sm:grid-cols-2 gap-6 text-center p-3 ">
            {apply.map((appitem)=>(
                <div key={appitem} className="bg-white m-2 p-3 h-auto hover:shadow-lg rounded-xl ">
                    <p className='text-xl text-red-300 font-semibold my-3'>{appitem.heading}</p>
                    <p className='lg:text-lg md:text-md  sm:text-sm text-red-800 mt-6'>{appitem.content}</p>

                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default HowtoApply