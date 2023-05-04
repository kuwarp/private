import * as React from 'react'
import formpic from "../../assets/Images/pers.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  
  const Stepfirst = () => {
      
      const [phone, setPhone]= useState('');
      const navigate = useNavigate();
      const Submithandle=()=>{
          
          const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;
          if (phoneRegex.test(phone)) {
              navigate('/Adress')
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
    
    <div className="container w-full my-6 mx-auto">
        <div className=" flex flex-cols md:flex-cols-1 lg:flex-rows-3">
            <div className='tempPic m-auto p-5 '>
                <img src={formpic} alt="" />
            </div>
            <div className='text-center grid grid-cols lg:grid-cols-3 mx-auto '>
                <p className='my-auto font-bold text-indigo-900' >APPLY HERE & GET BEST LOAN OFFERS</p>
                <div className='my-auto justify-between mx-4'>
                    <form noValidate class="w-full max-w-lg">
                        <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="number" placeholder="Your mobile number"
                        onChange={e=>setPhone(e.target.value)}
                        
                        aria-label="Full name"/>
                        </div>   
                        <div className="flex flex-cols-2 my-4">
                        <span>
                            <input type="radio" />
                            <label htmlFor="salaried" className='text-base font-semibold mx-3'>SALARIED</label>
                        </span>
                        <span>
                            <input type="radio" />
                            <label htmlFor="salaried" className='text-base font-semibold mx-3'>SELF EMPLOYED</label>
                        </span>
                    </div>
                    </form>
                 
                </div>
            <div className='my-auto mx-5'>
                
                <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl w-auto uppercase"
                onClick={Submithandle}
                >apply now</button>
       {/* <Link to="/Adress">     </Link> */}
            </div>
            
            </div>
            <ToastContainer />
        </div>
            {/* <div className="bg-red-300 w-80 border-l-4  border-red-800 mx-auto text-center text-red-800 p-3"> Error - Please fill all fields</div> */}
    </div>
    
    </>
  )
}

export default Stepfirst