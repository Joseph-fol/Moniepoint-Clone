import React from 'react'

const BusinessSavings = () => {
    return (
        <>
            <section className="px-5 pt-5 md:pt-20 md:px-18 bg-[#f8fafd] max-h-full">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between space-y-10 md:space-y-0">
                    <div className="md:w-1/2 block md:hidden">
                        <img src="https://moniepoint.com/business/tool6.png" alt="Business Saving" className=" rounded-lg w-[150%]" />
                    </div>
                    <div className="">
                        <div className='bg-[#ebf2fd] rounded-4xl text-center w-auto inline-block px-4 py-2'>
                            <p className='text-[#1b3363]'>Business Savings</p>
                        </div>

                        <h1 className="text-2xl my-4 md:text-[38px] font-bold text-[#162f61] mb-6 md:leading-10 max-w-sm">
                            Save for your dreams
                        </h1>
                        <p className="text-base md:text-lg mb-8 text-[#1b3363] max-w-lg">
                            Whether you dream of traveling abroad, buying a house or owning a house you can create a savings plan for your goals and earn up to 16% interest p.a. as a reward for saving.
                        </p>

                        <div className='flex items-center gap-5'>
                            <p className="bg-[#0357ee] hover:bg-[#073996] text-white font-semibold px-6 py-3 rounded-lg hover:scale-95 duration-200 cursor-pointer text-sm">
                                Open an Account
                            </p>
                            <p className='bg-white text-sm text-[#0357ee] rounded-lg w-auto p-4 hover:bg-gray-100 hover:scale-95 duration-200 cursor-pointer'>Learn more</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://moniepoint.com/business/tool6.png" alt="Business Saving" className="hidden md:block rounded-lg w-[150%]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessSavings