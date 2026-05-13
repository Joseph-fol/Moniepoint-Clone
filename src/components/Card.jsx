import React from 'react'
import CardProps from './CardProps'

const Card = () => {
  return (
    <>
        <div className='bg-white md:mx-8 md:px-2 md:mt-20 mb-10'>
            <div className='flex flex-wrap md:gap-50 py-5'>
                <div className='text-[#031335] font-bold text-3xl'>
                    What more?
                </div>

                <div className='md:text-xl font-medium md:max-w-80 text-[#031335]'>
                    Explore more ways to take your business to the next level.
                </div>
            </div>

            <div className='flex gap-5 flex-row-3 flex-wrap py-10 mx-auto'>
                <CardProps cardImage={<img src='https://moniepoint.com/benefits/manage.svg' alt='card-image'/>} cardTitle="Manage Multiple Business" cardDescriptions="Easily handle multiple businesses in one place"  />

                <CardProps cardImage={<img src='https://moniepoint.com/benefits/performance.svg' alt='card-image'/>} cardTitle="Business Performance" cardDescriptions="Keep your finger on the pulse of your business" />

                <CardProps cardImage={<img src='https://moniepoint.com/benefits/help.svg' alt='card-image'/>} cardTitle="Easy Help" cardDescriptions="Quick and accessible support whenever you need it" />
            </div>

            
        </div>
    </>
  )
}

export default Card