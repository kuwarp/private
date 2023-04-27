import React from 'react'
import { Link } from 'react-router-dom'
import ein from "../../assets/Images/media/ein.png"
import fox from "../../assets/Images/media/fox.png"
import ksnt from "../../assets/Images/media/ksnt.png"
import local from "../../assets/Images/media/local.png"
import menafn from "../../assets/Images/media/menafn.png"
import todayin from "../../assets/Images/media/todayin.png"


const Contactstr = () => {
  return (
    <>  <main>
    <div className="mx-auto max-w-7xl mt-16">

      <div className="mx-auto bg-gradient-to-l p-6 py-10 from-blue-100 to-gray-100 shadow-lg rounded-xl max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:text-center space-y-10">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="md:text-4xl text-2xl font-semibold tracking-tight text-blue-900">
          Being a Customer-Centric, we focus on client's needs before offering a solution
          </p>
          <p className=" text-xl leading-8 text-teal-800">
          We achieve such numbers, because you are more than a number to us.
          </p>

          <div className="flex items-center justify-center ">
                <Link
                  to="/connectwithus"
                  className="rounded-md px-3 py-2 text-lg w-auto bg-teal-600 text-center font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                 Contact Us 
                </Link>
              
              </div>
        </div>
       
      </div>

    </div>

<div className="mx-auto my-16  container">
  <p className='text-center text-teal-800 font-semibold text-3xl my-8'>OUR MEDIA COVER</p>
    <div className="grid lg:grid-cols-6 md:grid-cols-3  sm:grid-cols-2">
      <a href="https://www.einpresswire.com/article/622077441/incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry
" target='_blank' className='p-2'>
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto' src={ein} alt=""  />
      </div>
      </a>
      <a href="https://fox59.com/business/press-releases/ein-presswire/622077441/incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry/" target='_blank' className='p-2'>
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto ' src={fox} alt="" />
      </div>
      </a>
      <a href="https://www.ksnt.com/business/press-releases/ein-presswire/622077441/incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry/" target='_blank' className='p-2' >
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto ' src={ksnt} alt="" />
      </div>
      </a>
      <a href="https://www.fox21news.com/business/press-releases/ein-presswire/622077441/incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry/" target='_blank' className='p-2'>
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto ' src={local} alt="" />
      </div>
      </a>
      <a href="https://menafn.com/1105781494/Incredible-Management-Service-Pvt-Ltd-Launches-New-Subsidiary-Creditklick-To-Revolutionize-The-Credit-Industry
" target='_blank' className='p-2'>
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto ' src={menafn} alt="" />
      </div>
      </a>
      <a href="https://www.todayinbanking.com/article/622077441-incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry" target='_blank' className='p-2'>
      <div className="md:my-4 border-2  border-blue-200 shadow-lg mx-auto">
        <img className='md:w-full w-3/5 mx-auto ' src={todayin} alt="" />
      </div>
      </a>
    </div>
    </div>
  </main>
  </>
  )
}

export default Contactstr