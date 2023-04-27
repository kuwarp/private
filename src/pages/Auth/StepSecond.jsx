import React from 'react'
import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import SideImg from "../../assets/Images/Cibil/creditlogin.png"
import { Link,useNavigate,useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";

// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

window.scrollTo(0,0)


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StepSecond = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate();
  // const back=useHistory();
  const onBack=(e)=>{
    e.preventDefault();
   navigate(-1)
  }
  const onSubmit = (data) => {
    navigate('/working-Information')
  }



  const [agreed, setAgreed] = useState(false)


 
  return (
    <>
       
     <div className="flex h-full   sm:flex-row  w-auto">
            <div className="flex lg:px-36 flex-col lg:flex-row w-full items-start  lg:items-center my-16">
                <div className="w-full lg:w-2/3 h-auto  dark:bg-gray-800">
<img src={SideImg} alt='sideImage' className='rounded-xl shadow-lg' />
                </div>
                <div >

                <form onSubmit={handleSubmit(onSubmit)}   className="mx-auto  ">
        <div className="grid grid-cols-1 px-8 gap-y-6 gap-x-8 sm:grid-cols-2">
        
        {/* First name  */}
          <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

            First Name
           
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("firstName", { required: true, maxLength: 10 })}  />
               {errors.firstName && <p className='text-red-900'>Please check the First Name</p>}
            </div>
            </label>
          </div>

 {/* Last name  */}
          <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

         Last Name
           
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("lastName", { required: true, maxLength: 10 })}  />
               {errors.lastName && <p className='text-red-900'>Please check the Last Name</p>}
            </div>
            </label>
          </div>

 {/*DOB  */}
          <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

           Date of Birth 
           
            <div className="mt-2.5">
              <input
                type="date"
                name="DOB"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("DOB", { required: true })}  />
               {errors.DOB && <p className='text-red-900'>Please provide Date of Birth</p>}
            </div>
            </label>
          </div>

{/* Pincode */}
  <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

           Pincode
            <div className="mt-2.5">
              <input
                type="number"
                name="pincode"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("pincode", { required: true, maxLength: 6 })}  />
               {errors.pincode && <p className='text-red-900'>Please check the First Name</p>}
            </div>
            </label>
          </div>


{/* PAN Number */}
          <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

           PAN Number
           
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("panNumber", { required: true, maxLength: 10 })}  />
               {errors.panNumber && <p className='text-red-900'>Invalid PAN Number</p>}
            </div>
            </label>
          </div>

{/* Email  */}
          <div>
            <label htmlFor="first-name"  
            className="block text-sm font-semibold leading-6 text-gray-900"
            >

          E-mail Address
           
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             aria-required
             {...register("email",
             {
                 required: true,
                 pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
             })} />
               {errors.email && <p className='text-red-900'>Please check the Email    </p>}
            </div>
            </label>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
              
                {/* <span className="sr-only">Agree to policies</span> */}
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <Link to="/Privacy-policies" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </Link>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10 grid grid-cols-2 justify-center ">
         
          <button type="button" onClick={onBack} className="block w-20 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
         Go Back</button>
         {/* <Link to="/Personal-Information">      </Link> */}
        
          <button   id="button"   type="submit" className="block w-20 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Next</button>
          {/* <Link to="/Working-Information"> </Link> onClick={() => setshow(true)}*/}
        </div>
      </form>
     
    
                </div>
            </div>
        </div>
  
    </>
  )
}

export default StepSecond