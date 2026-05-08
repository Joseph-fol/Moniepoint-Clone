import React from 'react'

const BusinessAccount = () => {
    return (
        <>
            <section className='text-center pt-10 bg-[#f8fafd] flex justify-center items-center'>
                <p className='text-xl p-5 md:text-4xl font-bold max-w-2xl text-[#1b3363]'>All the tools you need to run your business with ease</p>
            </section>

            <section className="sticky top-20 z-40 hidden md:block bg-[#f8fafd] py-6 px-25">
                <div className='flex gap-5 items-center justify-center bg-white rounded-4xl py-7 '>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer active'>Business Account</button>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer'>Point of Sales Terminal</button>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer'>Expense Card</button>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer'>Working Capital Loans</button>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer'>Business Savings</button>
                    <button className='text-[#98a4bd] font-medium py-3 px-3 rounded-full border border-[#f8fafd] focus:bg-[#c4e9fd] focus:text-[#1b3363] text-[17px] cursor-pointer'>Moniebook</button>
                </div>
            </section>

            <section className="px-5 pt-5 md:pt-20 md:px-18 bg-[#f8fafd] max-h-full">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between space-y-10 md:space-y-0">
                    <div className="md:w-1/2 block md:hidden">
                        <img src="https://moniepoint.com/business/tool1.png" alt="Business Account" className="rounded-lg w-[150%]" />
                    </div>

                    <div className="">
                        <div className='bg-[#ebf2fd] rounded-4xl text-center w-auto inline-block px-4 py-2'>
                            <p className='text-[#1b3363]'>Business Account</p>
                        </div>

                        <h1 className="text-2xl my-4 md:text-[38px] font-bold text-[#162f61] mb-6 md:leading-10 max-w-sm">
                            A free bank account to power your business
                        </h1>
                        <p className="text-base md:text-lg mb-8 text-[#1b3363] max-w-lg">
                            Open a free bank account in your business name, in minutes. Access round the clock support, with no hidden fees and complete control over your account.
                        </p>

                        <div className='flex items-center gap-5'>
                            <p className="bg-[#0357ee] hover:bg-[#073996] text-white font-semibold px-6 py-3 rounded-lg hover:scale-95 duration-200 cursor-pointer text-sm">
                                Open an Account
                            </p>

                            <p className='bg-white text-sm text-[#0357ee] rounded-lg w-auto p-4 hover:bg-gray-100 hover:scale-95 duration-200 cursor-pointer'>Learn more</p>

                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <img src="https://moniepoint.com/business/tool1.png" alt="Business Account" className="hidden md:block rounded-lg w-[150%]" />
                    </div>
                </div>
            </section>


        </>
    )
}

export default BusinessAccount