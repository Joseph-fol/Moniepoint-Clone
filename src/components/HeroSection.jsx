import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section class="px-10 bg-[#031335] max-h-full">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between space-y-10 md:space-y-0">
                    <div class="md:w-1/2 md:mt-20 py-10">
                        <p className='text-white rounded-4xl bg-[#3e588e] md:w-[420px] p-4'>Africa's fastest growing financial Institution 2023-2025</p>
                        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Simple solutions to <br class="hidden md:block" />
                            <span class="text-[#c4e9fd]">power your business</span>
                        </h1>
                        <p class="text-lg mb-8 md:w-125 text-gray-600 dark:text-gray-300">
                            Collect payments, access loans and manage operations with a business banking solution that meets all your needs.
                        </p>


                        <a href="#" class="bg-[#0357ee] hover:bg-[#073996] text-white font-semibold px-10 py-5 rounded-lg hover:scale-105 duration-200">
                            Open Account
                        </a>

                    </div>

                    <div class="md:w-1/2">
                        <img src="https://moniepoint.com/business/hero-sub.png" alt="Hero Image" class="rounded-lg shadow-lg w-[150%]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection