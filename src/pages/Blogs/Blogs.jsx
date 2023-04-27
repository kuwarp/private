import React from "react";
import { Link } from "react-router-dom";
import CCblogs from "../../assets/Images/blogs/ccblog.png"
import Blogsl from "../../assets/Images/blogs/lblogs.png"
import Side1 from  "../../assets/Images/blogs/ccblogl.png"
import Side2 from  "../../assets/Images/blogs/ccblogs.png"


window.scrollTo(0,0)

const Blogs = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                {/* <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">This Week Blogs</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                </div> */}
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                     
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                       
                          {/* Art1 */}
                            <div className="sm:w-1/2 relative">
                            <Link to="/"> 
                                <div>
                                 
                                     
                                    <div className="absolute bottom-0  left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-gray-800 font-bold">About Credit Refine</h2>
                                        <p className="text-base leading-4 text-white font-extrabold mx-4 mt-2">Blogs</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            {/* <p className="pr-2 text-sm font-medium leading-none bg-white rounded text-black">Read More</p> */}
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                  
                                </div>
                                <img src={Side1} className="w-full" alt="chair" />
                                </Link>
                            </div>
                            {/* Art1 End */}
                           
                          {/* Art2  */}
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                            <Link to="/">
                                <div>
                                 
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white font-extrabold">All About Need Credit Cards</h2>
                                        <p className="text-base leading-4 text-white mt-2">Blogs</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src={Side2} className="w-full" alt="wall design" />
                                </Link>
                            </div>
                            {/* Art2 End */}
                        </div>
                         {/* Art3 */}
                        <div className="relative">
                         
                        <Link to="/All-about-Cards-Blogs">
                            <div>
                             
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold 5 font-extrabold text-dark">Credit Cards Blog</h2>
                                    <p className="text-base leading-4 text-white mt-2">Blogs</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src={CCblogs} alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                            <img className="w-full mt-4 sm:hidden" src={CCblogs} alt="sitting place" />
                            </Link>
                        </div>
   {/* Art3 End*/}
                    </div>
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                      {/* Art4 */}
                        <div className="relative">
                            <Link to="/All-about-Loans-Blogs">
                            <div>
                             
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl   5 font-extrabold text-dark">All Loans Blogs</h2>
                                    <p className="text-base leading-4 text-white mt-2">Blogs</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src={Blogsl} alt="sitting place" className="w-full sm:block hidden" />
                            <img className="w-full sm:hidden"src={Blogsl} alt="sitting place" />
                            </Link>
                        </div>
                        {/* Art4 End */}

                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                       {/* Art5 */}
                            <div className="relative w-full">
                            <Link to="/">
                                <div>
                                 
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">All About Banking</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                                </Link>
                            </div>
{/* Art5 End */}


{/* Art6 */}
                            <div className="relative w-full sm:mt-0 mt-4">
                            {/* <Link to="/">
                                <div>
                                 
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                                </Link> */}
                            </div>
                            {/* Art6 End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
