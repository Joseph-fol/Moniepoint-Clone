import React from 'react'

const HeroSection = () => {
    return (
        <>
            <style>{`
                @keyframes scrollAnimation {
                    0% { transform: translateX(0px); }
                    100% { transform: translateX(-1500px); }
                }
                .scroll-animate {
                    animation: scrollAnimation 30s linear infinite;
                }
            `}</style>
            
            <section className="px-10 pt-16 md:pt-20 bg-[#031335] max-h-full">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between space-y-10 md:space-y-0">
                    <div className="md:w-1/2 md:mt-20 py-10">
                        <p className='text-white rounded-4xl w-auto bg-[#3e588e] md:max-w-md p-4'>Africa's fastest growing financial Institution 2023-2025</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Simple solutions to <br className="hidden md:block" />
                            <span className="text-[#c4e9fd]">power your business</span>
                        </h1>
                        <p className="text-lg mb-8 md:max-w-lg text-gray-600 dark:text-gray-300">
                            Collect payments, access loans and manage operations with a business banking solution that meets all your needs.
                        </p>

                        <a href="#" className="bg-[#0357ee] hover:bg-[#073996] text-white font-semibold px-10 py-5 rounded-lg hover:scale-105 duration-200">
                            Open Account
                        </a>
                    </div>

                    <div className="md:w-1/2">
                        <img src="https://moniepoint.com/business/hero-sub.png" alt="Hero Image" className="hidden md:block rounded-lg w-[150%]" />
                    </div>
                </div>
            </section>

            <div className="relative w-full bg-[#f8fafd] overflow-hidden min-h-screen">
                <div className="absolute top-0 -left-[25%] w-[150%] h-[150px] bg-[#031335] rounded-b-[50%]"></div>

                <div className="relative z-10 max-w-8xl mx-auto pt-18 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-4xl shadow-sm w-full  p-8">
                        <div className="flex flex-col md:flex-row gap-4 md:justify-between">
                            <div className='flex flex-col gap-3'>
                                <h3 className="text-xl md:text-2xl font-bold text-[#031335]">Businesses that Count On Us</h3>
                                <p className="text-sm md:text-base text-gray-500 tracking-tighter md:font-medium max-w-xs md:max-w-sm">Join <span className='text-[#0357ee]'>5 million</span> business owners on the Moniepoint platform</p>
                            </div>

                            <div className='hidden md:flex items-center'>
                                <p className='text-6xl md:text-8xl font-extrabold text-transparent tracking-tighter [-webkit-text-stroke:1px_#3b82f6]'>5m+</p>
                            </div>
                        </div>

                        <div className="overflow-hidden w-full py-4">
                            <div className='scroll-animate flex gap-5'>
                                <div className='h-40 w-56 md:h-40 md:w-80 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-1.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-2.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-3.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-4.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-5.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-6.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-7.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-8.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-80 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-1.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-2.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-3.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-4.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-5.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-6.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-7.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>

                                <div className='h-40 w-56 md:h-40 md:w-56 border rounded-md border-gray-300 my-4 items-center justify-center flex shrink-0'>
                                    <img src="https://moniepoint.com/ng/biz-8.png" alt="" className='h-24 w-40 md:h-24 md:w-40 object-contain' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='text-center mt-10 flex justify-center items-center'>
                    <p className='text-xl p-5 md:text-4xl font-bold max-w-2xl text-[#1b3363]'>All the tools you need to run your business with ease</p>
                </section>
            </div>

        </>
    )
}

export default HeroSection