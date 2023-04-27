import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  window.scrollTo(0,0)


const StepThird = () => {
  const [show, setshow] = useState(true);
  const [text, setText] = useState("Worst");
  const getText = (value) => {
    setText(value);
  };

  const [otp, setotp]= useState('');
    const navigate = useNavigate();
    const Submithandle=()=>{
    
    if (otp.length!==6) {
      toast.error('Invalid otp', {
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
      // else if(otp.length!==setotp){
      //   toast.warn('Check otp once!', {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //     });
      // }
      else {
        navigate('/report-analysis')
      }
    }
  return (
    <>



 

  
      <div className="bg-gray-800">
        <div className="py-12 px-4">
          <div
            id="button"
            className={`${
              show ? "hidden" : "flex"
            } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
          >
            <div className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20 relative">
              <button
                onClick={() => setshow(true)}
                className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
              >
                Open Modal
              </button>
            </div>
            <ToastContainer/>
          </div>
          <div
            id="modal"
            className={`${
              show ? "" : "hidden"
            } lg:max-w-[842px] md:max-w-[744px] max-w-[375px] w-full mx-auto bg-white lg:px-[109px] md:px-12 px-3 py-20 relative`}
          >
            <div>
              <svg
                onClick={() => setshow(false)}
                className="cursor-pointer absolute right-4 top-4 z-10"
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
                  fill="#373737"
                />
              </svg>
            
            </div>
           
            <div className="h-auto  py-20 px-3">
    <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
                <div className="bg-white h-64 py-3 rounded text-center">
                      <h1 className="text-2xl font-bold">OTP Verification</h1>
                      <div className="flex flex-col mt-4">
                          <span>Enter the OTP you received at</span>
                          <span className="font-bold">+91 ******876</span>
                      </div>
                      
                      <div id="otp"   className="flex flex-row justify-center text-center px-2 mt-5">
            <input className="m-2 border h-10 w-auto border-bottom-0 text-center form-control rounded" onChange={(event) => setotp(event.target.value)} type="text" id="first" maxlength="6" /> 
           
                      </div>
                      
                      <div className="flex justify-center text-center mt-5">
                          <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a>
                      </div>


                      <div className="flex justify-center text-center mt-5">  
                      {/* <Link to="/report-analysis"> */}
                          <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer" onClick={Submithandle}><span className="font-bold">CONTINUE</span><i className='bx bx-caret-right ml-1'></i></a>
                          {/* </Link> */}
                    
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>




          </div>
        </div>
      </div>
    </>
 
  )
}

export default StepThird