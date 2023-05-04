import React,{useState, Fragment} from 'react'
import score from "../../assets/Images/score/scores.jpg"
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import graph from "../../assets/Images/score/graph.png"


const CibilHero = () => {

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

window.scrollTo(0,0)
  
  return (
    <>
    
    <div className="mx-auto container shadow-lg bg-white rounded-lg">
    <div class=" overflow-hidden ">
  <div class="md:grid grid-cols-2 mx-auto">
    <div class="p-8 mx-6">
      <div class="text-3xl text-blue-900 font-semibold">Purushottam, Your Experian credit score is 350 650 700 850</div>
      <p class="mt-2 text-xl text-blue-800">Your Credit Score is inductive of your past repayment behaviour.</p>
      <p class="mt-2 text-blue-800">It seems your profile is BAD FAIR GOOD EXCELLENT</p>
      <p class="mt-2 text-blue-800">Nice, You are financially  strong. Ensure all payments are made on time and you will be in the top score bracket soon enough!</p>
      <p class="mt-2 text-blue-800">You seem to have a damaged credit history. This might be due to multiple late payments or a loan/card default. Ensure all payments are made on time.</p>

      
      <div className="mx-auto flex flex-cols-2 justify-start mt-2">
        <p className='space-y-5'>Talk with our team</p>
        <button class="bg-white hover:bg-blue-100 text-gray-800 font-semibold -my-1 py-2 px-4 border border-blue-400 rounded shadow mx-4" type="button" onClick={openModal}>
 Click Here
</button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-60"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom=" { }"
            leaveTo="opacity-100"
            animate={{
              mount:{scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-around p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-3/5  transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                    <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
               Log In  <svg
                  onClick={() => setIsOpen(false)}
                  className="md:block cursor-pointer right-4 top-4 absolute"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />


                </svg>
               
              </div>
                  </Dialog.Title>
                  <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex mx-auto w-md block justify-center">
              
              <div className="bg-none text-white text-center flex flex-col justify-center items-center">
               <img className='rounded shadow-2xl' src={score} alt=''/>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] bg-white lg:px-8 px-4 pt-5 md:pb-6 pb-4 relative">
            
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Registered Mobile Number
                </p>
               
                <div className="text-center pt-8 w-full">
                  <input
                    type="Email"
                    name
                    id
                    placeholder="Enter Phone here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div>
                <div className="text-center pt-4 w-full">
                  <button className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                   GET OTP
                  </button>
                </div>
               
                <p className="text-gray-600 text-center lg:pt-12 md:pt-10 pt-12">
                  Be the first here to hear about your needs. 
                </p>
              </div>
            </div>
          </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
    <div class="md:shrink-0 ">
      <img class=" object-contain rounded-xl max-w-xs mx-auto md:p-12" src={score} alt="Modern building architecture"/>
    </div>
  </div>
</div>
</div>

{/* monthly trend area starts */}

<div className="mx-auto container shadow-lg bg-white rounded-lg mt-24">
    <div class=" overflow-hidden ">
  <div class="md:grid grid-cols-2 mx-auto">
            <div class="md:shrink-0 ">
              <img class=" object-contain rounded-xl md:max-w-md max-w-xs mx-auto md:p-12" src={graph} alt="Modern building architecture"/>
            </div>
    <div class="p-8 my-auto">
      <div class="text-3xl text-blue-900 uppercase font-semibold">your credit score monthly trend</div>
      <p class="mt-2 text-blue-800">It seems your profile is BAD FAIR GOOD EXCELLENT</p>
      <p class="mt-2 text-blue-800">This shows the development of your creditworthiness over the months</p> 

      
      <div className="mx-auto flex flex-cols-2 justify-start mt-8">
        <p className='space-y-5'>Talk with our team</p>
        <button class="bg-white hover:bg-blue-100 text-gray-800 font-semibold -my-1 py-2 px-4 border border-blue-400 rounded shadow mx-4" type="button" onClick={openModal}>
 Click Here
</button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-60"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom=" { }"
            leaveTo="opacity-100"
            animate={{
              mount:{scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-around p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-3/5  transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                    <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
               Log In  <svg
                  onClick={() => setIsOpen(false)}
                  className="md:block cursor-pointer right-4 top-4 absolute"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />


                </svg>
               
              </div>
                  </Dialog.Title>
                  <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex mx-auto w-md block justify-center">
              
              <div className="bg-none text-white text-center flex flex-col justify-center items-center">
               <img className='rounded shadow-2xl' src={score} alt=''/>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] bg-white lg:px-8 px-4 pt-5 md:pb-6 pb-4 relative">
            
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Registered Mobile Number
                </p>
               
                <div className="text-center pt-8 w-full">
                  <input
                    type="Email"
                    name
                    id
                    placeholder="Enter Phone here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div>
                <div className="text-center pt-4 w-full">
                  <button className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                   GET OTP
                  </button>
                </div>
               
                <p className="text-gray-600 text-center lg:pt-12 md:pt-10 pt-12">
                  Be the first here to hear about your needs. 
                </p>
              </div>
            </div>
          </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  </div>
</div>
</div>
{/* monthly trend area closed */}



{/* total account area starts */}

<div className="mx-auto container shadow-lg bg-white rounded-lg my-16">
    <div class=" overflow-hidden ">
  <div class="md:grid grid-cols-2 mx-auto my-8">
              <div className="grid grid-rows-3 justify-center">
              <div className="my-auto align-bottom"> <p>9 Accounts</p> </div>
                <div className="grid grid-cols-2">
                  <button className='w-16 h-16 rounded-full bg-blue-300 my-4'>6</button>
                  <p className='my-auto mx-3'>Active</p>
                </div>
                <div className="grid grid-cols-2">
                  <button className='w-16 h-16 rounded-full bg-red-300 my-4'>6</button>
                  <p className='my-auto mx-3'>Closed</p>
                </div>
                <div className="grid grid-cols-2">
                  <button className='w-16 h-16 rounded-full bg-yellow-300 my-4'>6</button>
                  <p className='my-auto mx-3'>Delayed</p>
                </div>
                
        <button class="bg-white hover:bg-blue-100 text-gray-800 font-semibold uppercase py-2 px-4 border border-blue-400 rounded shadow font-md mx-4" type="button" onClick={openModal}>
Know More
</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-60"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom=" { }"
            leaveTo="opacity-100"
            animate={{
              mount:{scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-around p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-3/5  transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                    <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
               Log In  <svg
                  onClick={() => setIsOpen(false)}
                  className="md:block cursor-pointer right-4 top-4 absolute"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />


                </svg>
               
              </div>
                  </Dialog.Title>
                  <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex mx-auto w-md block justify-center">
              
              <div className="bg-none text-white text-center flex flex-col justify-center items-center">
               <img className='rounded shadow-2xl' src={score} alt=''/>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] bg-white lg:px-8 px-4 pt-5 md:pb-6 pb-4 relative">
            
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Registered Mobile Number
                </p>
               
                <div className="text-center pt-8 w-full">
                  <input
                    type="Email"
                    name
                    id
                    placeholder="Enter Phone here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div>
                <div className="text-center pt-4 w-full">
                  <button className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                   GET OTP
                  </button>
                </div>
               
                <p className="text-gray-600 text-center lg:pt-12 md:pt-10 pt-12">
                  Be the first here to hear about your needs. 
                </p>
              </div>
            </div>
          </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            </div>
    <div class="p-8 my-auto">
      <div class="text-3xl text-blue-900 uppercase font-semibold">total account</div>
      <p class="mt-2 text-blue-800">Total open and closed loans and credit cards. A healthy mix of unsecured(credit cards, personal loans) and secured lines of credit(mortgages, auto loans) shows that the lender trusts you.</p>

      
      <div className="mx-auto flex flex-cols-2 justify-start mt-8">
        <p className='space-y-5'>Talk with our team</p>
        <button class="bg-white hover:bg-blue-100 text-gray-800 font-semibold -my-1 py-2 px-4 border border-blue-400 rounded shadow mx-4" type="button" onClick={openModal}>
Click Here
</button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-60"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom=" { }"
            leaveTo="opacity-100"
            animate={{
              mount:{scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-around p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-3/5  transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                    <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
               Total  <svg
                  onClick={() => setIsOpen(false)}
                  className="md:block cursor-pointer right-4 top-4 absolute"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />


                </svg>
               
              </div>
                  </Dialog.Title>
                  <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex mx-auto w-md block justify-center">
              
              <div className="bg-none text-white text-center flex flex-col justify-center items-center">
               <img className='rounded shadow-2xl' src={score} alt=''/>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] bg-white lg:px-8 px-4 pt-5 md:pb-6 pb-4 relative">
            
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Registered Mobile Number
                </p>
               
                <div className="text-center pt-8 w-full">
                  <input
                    type="Email"
                    name
                    id
                    placeholder="Enter Phone here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div>
                <div className="text-center pt-4 w-full">
                  <button className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                   GET OTP
                  </button>
                </div>
               
                <p className="text-gray-600 text-center lg:pt-12 md:pt-10 pt-12">
                  Be the first here to hear about your needs. 
                </p>
              </div>
            </div>
          </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  </div>
</div>
</div>

{/* total account area ends */}
    </>
  )
}

export default CibilHero