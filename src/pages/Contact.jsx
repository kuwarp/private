import React,{useState} from 'react'
import { Parallax } from "react-parallax";
const insideStyles = {
    // background: "black",
    padding: 20,
    position: "absolute",
    top: "40%",
    left: "10%",
  };
const Contact = () => {
    const [show, setshow] = useState(false);

window.scrollTo(0,0)

  return (
    <>
     <div className="relative  isolate overflow-hidden pb-10">
       
       <Parallax blur={{ min: -3, max:5 }} className="parallaxdiv">
           <div className="parallaxdiv">
               <div style={insideStyles}>
                   <h2 className="text-4xl font-bold text-center tracking-tight text-teal-800 sm:text-6xl">Contact Us </h2>
                  
               </div>
           </div>
       </Parallax>    
     </div>

<div className='lg:flex mx-auto justify-center  sm:flex-col lg:flex-row md:flex-col xs:flex-col '>
     <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Locate Us</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

                </p>
               
                <p className="mt-6 text-sm leading-5 text-gray-600">
                1st floor, Plot 112, Udyog Vihar phase 1 Gurgaon Haryana <br/> 122002 <br/>
Registered Office -: C 125/1, sector 2 Noida 201001
                </p>
              </div>
            </div>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Mail Box</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
</svg>

                </p>
               
                <p className="mt-6 text-sm leading-5 text-gray-600">
                Drop your Valuable Mail In our Mail Box <br/> we will reach soon.
                </p>
                <a
                  href="mailto:support@creditklick.com"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Drop here!
                </a>
              </div>
            </div>
          </div>


          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">HelpLine</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">+91 8800367367</span>
                
                </p>
               
                <p className="mt-6 text-sm leading-5 text-gray-600">
                 Our Team Here to assist You <br/> <br/>
                </p>

                <a
                  href="tel:8800367367"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Call us!
                </a>
              </div>
            </div>
          </div>
          </div>


          {/* Form Start */}

          <div className="w-full flex items-center justify-center my-12">
                <div className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-2xl font-semibold leading-7 text-center text-gray-700">Submit Your Query</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Pin Code</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Subject</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Your Query</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                 
                    <div id="button" className={`${show ? "hidden" : "flex"}  container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                        <button onClick={() => setshow(true)} className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>

          {/* From End */}

          {/* Modal Start */}
 
          <div id="modal" className={`${show ? "flex" : "hidden"} container  mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                   
                    <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">Welcome to the Creditklick family </h1>
                    <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">A confirmation email has been sent to your account, johndoe@gmail.com.</p>
                    <div className="mt-12 md:mt-14 w-full flex justify-center">
                        <button onClick={() => setshow(false)} className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">
                           Homepage
                        </button>
                    </div>
                </div>
            </div>

          {/* Modal End */}

    </>
  )
}

export default Contact