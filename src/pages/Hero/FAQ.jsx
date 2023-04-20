import React, { useState } from "react";
import FAq from "../../assets/Images/FAQ.png"
import Slider from './Slider'
const FAQ = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    return (
        <div className="container mt-28 mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">


            <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-blue-900">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                    <p className="  text-xl leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p>
                </div>

             
            </div>
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-2">
                <div className=" md:w-5/12 lg:w-4/12 w-full ">
                    <img  src={FAq} alt="Img of Glass bottle" className=" w-max h-72  md:block hidden" />
                    <img src={FAq} alt="Img of Glass bottle" className="w-full md:hidden block " />
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Shipping Section --> */}
                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">What is a credit score & why is it important?</h3>
                            <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow(!show)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}> <span className="text-bold text-2xl">Advantages of a good credit score</span> <br/><br/>
<span className="mt-2 text-base">You can enjoy a range of benefits including better loan approval rates, lower interest rates, access to better credit card rewards, and even improved job opportunities. Keep up the good work by making timely payments and keeping your credit utilization low. Your financial health will thank you!
</span> <br/> <br/>
<span className="text-bold text-2xl">Does missing credit card bills lead to loan rejection?</span> <br/><br/>
<span className=" text-base">Missing credit card bills will not lead to loan rejection. The lender is looking for the history of payment habits and whether potential customers have the ability to consistently make their payments on time. Most lenders do accept partial payments on credit cards but if you miss three consecutive payments then you will be considered delinquent. If you continue with this behavior, your application for a loan or other type of financing may be declined or put on hold indefinitely until the problem has been resolved

</span> 

</p>

                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Returns Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">How can a credit card help improve your credit score?</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow2(!show2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>Did you know that using a credit card responsibly can actually help improve your credit score? By making timely payments, keeping your balance low, and avoiding maxing out your credit limit, you can demonstrate your financial responsibility to credit bureaus. This can lead to a better credit score, which in turn can improve your chances of being approved for loans, credit cards, and other financial products. So, next time you use your credit card, keep in mind that you're not only making a purchase, but also building a positive credit history.
</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Exchange Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Quick ways to improve your credit score
</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow3(!show3)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>Looking to boost your credit score quickly? Start by paying your bills on time, reducing your credit card balances, and disputing any errors on your credit report. These simple steps can help improve your credit score in a matter of weeks. Remember, building good credit takes time and effort, but with patience and discipline, you can achieve your financial goals and enjoy the benefits of a strong credit score.
</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* Tracking Section */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">What happens if I miss an EMI payment on my loan?</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow4(!show4)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>Missed an EMI payment on your loan? Unfortunately, this can have negative consequences on your credit score and financial health. Your lender may charge a late fee or penalty, and your credit score may be impacted. Moreover, missing multiple payments can lead to loan default, which can result in legal action, loss of collateral, or even bankruptcy. If you're struggling to make your EMI payments, it's important to contact your lender and discuss your options, such as restructuring your loan or extending the repayment period. Ignoring the problem will only make it worse. So, stay proactive and take steps to avoid missing EMI payments.
</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />
                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800"> How to change the mode of repayment for a loan?</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow5(!show5)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show5 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show5 ? "blcok" : "hidden")}>Need to change the mode of repayment for your loan? It's easy! Simply contact your lender and request the change. Depending on the lender's policy, you may be able to switch from one mode of repayment to another, such as from EMI to ECS or vice versa. Be prepared to provide your loan account number, new mode of repayment details, and any other necessary information. Once the change is made, be sure to monitor your loan account and ensure that payments are being deducted as per the new mode. Remember, timely payments are crucial for maintaining a good credit score and avoiding penalties. So, don't hesitate to make the change if it helps you manage your loan better.

</p>
                    </div>
                   

                    <hr className=" my-7 bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
