import { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Route, Link,useNavigate ,Routes} from 'react-router-dom'
import './header.css';

  import 'react-toastify/dist/ReactToastify.css';
import "../index.css"
import Logo from "../assets/Images/cklogo.png"
import Login from "../assets/Images/creditlogin.png"
// import { Route,Link, Routes } from 'react-router-dom'
// import AU from "../pages/Cards/Creditcard"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  // ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  
} from '@heroicons/react/24/outline'
import {BsBookHalf} from "react-icons/bs"
import { ChevronDownIcon,  PlayCircleIcon } from '@heroicons/react/20/solid'
// import Example from './testing'
import Loans from '../pages/Loans/Loans'
// import Creditcard from '../pages/Cards/Creditcard'
// import Hero from '../pages/Hero/Hero'



const products = [
  { name: 'AU Bank Credit Card', description: 'Get a better credit card', path:"/Aucards",  icon: ChartPieIcon },
  { name: 'IDFC First Credit Card', description: 'Speak directly to your customers',  path:"/IDFCcards", icon: CursorArrowRaysIcon },
  { name: 'SBI Credit Cards', description: 'Your customers’ data will be safe and secure',  path:"/Sbicards", icon: FingerPrintIcon },
  { name: 'YES Bank Credit Cards', description: 'Connect with third-party tools',  path:"/yescards", icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: ' ', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Connect Youtube', href: ' ', icon: PlayCircleIcon },
  { name: 'Read Blogs',path:'All-about-Cards-Blogs', icon: BsBookHalf },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const  Header=()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
//   const notify = () =>{ 

//   toast.warn('Check Your Mobile number', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//     });
//     toast.success('Login Succesfull', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       });
//       toast.error('OTP INVALID', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         });
//         toast.info('OTP SENT', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           });
// };

const [phone, setPhone]= useState('');
    const navigate = useNavigate();
    const Submithandle=()=>{
    const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;
    if (phoneRegex.test(phone)) {
       navigate('/working-information')
      } else {
        toast.warn('Check Your Mobile number', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      }
    }
  window.scrollTo(0,0)

  return (
    <>
    <header className="bg-gray-100 bg-opacity-100 h-20 navsticky">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-mx-1.5 p-1.5 my-2">
            <span className="sr-only ">Creditklick</span>
            <img className="h-12 p-1" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center   gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              Credit Cards
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              mouse="transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              MouseFrom="opacity-100 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen p-1 group-hover peer-hover:flex hover:flex max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            {/* <Router > */}
                <div className="p-4">
                 
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group  relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                     
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.path} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                      {/* </Link> */}
                    </div>
                  ))}
                 
                </div>
                {/* </Router> */}
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          
<Link to ="/Loans">
          <div href="  " className="text-lg font-semibold leading-6 text-gray-900">
            Loans
          </div>
          </Link>
          <Link to="/Credit-score"  className="text-lg animate-bounce font-semibold leading-6 text-red-700">
             Check Credit Score 
          </Link>
          <Link to="/Refine" className="text-lg font-semibold leading-6 text-blue-800">
            Credit Refine
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button  type="button"
          onClick={openModal}  className="text-lg font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

{/* Login Modal */}

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
            <div className="flex min-h-full items-center justify-evenly p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-3/5    transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                    <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
               Log In  <svg
                  onClick={() => setIsOpen(false)}
                  className="md:block  cursor-pointer right-4 top-4 absolute"
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
                  <div className="lg:px-5  md:px-6 px-4 py-5">
            <div className="md:flex mx-auto w-md block justify-center">
              
              <div className=" w-auto mx-16  text-center flex flex-col justify-center items-center max-w-md ">
               <img className='h-52 w-auto' src={Login} alt=''/>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] lg:mt-16 w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
            
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Registered Mobile Number
                </p>
               
                <div className="text-center pt-8 w-full">
                  <input
                    type="number"
                    name
                    id
                    placeholder="Enter Phone here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[40px] w-full lg:w-96 px-4 py-3"
                onChange={event=>setPhone (event.target.value)}
                />
                </div>
                <div className="text-center pt-4 w-full">
                  <button onClick={Submithandle} className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full lg:w-96 py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
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
      {/* Close Modal */}
    
      </nav>

      {/* Mobile View */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href=" " className="">
              <span className="sr-only">Creditklick</span>
              <img
                className="h-10 w-auto"
                src={Logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open=!open }) => (
                    <>
                      <Disclosure.Button className="flex  peer w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Credit Cards
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link to="/Loans"
                  
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900  hover:bg-gray-50"
                >
                  Loans
                </Link>
                <Link
                  to="/CibilScore "
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Check Cibil Score
                </Link>
                <Link
                  to="/Refine "
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                Credit Refine
                </Link>
              </div>
              <div className="py-6">
                <button
                 type="button"
                 onClick={openModal}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

{/* Mobile View End */}
      
    </header>

    <Routes>
   
      <Route path='/Loans' element={<Loans/>}/>
    </Routes>



    {/* <ToastContainer /> */}
   
    </>
    // <>
    // <Example/>
    // </>
  )
}
export default Header
