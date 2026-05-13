import React from 'react'

const CardProps = ({cardTitle, cardDescriptions, cardImage}) => {
    return (
        <>
            <div className='bg-[#f8fafd] rounded-2xl w-100 py-10 px-7 border border-[#dce4ff]'>
                <div>
                    {cardImage}
                </div>
                <h2 className='text-2xl font-bold py-4 text-[#031335]'> {cardTitle} </h2>
                <p className='text-lg font-medium text-[#54649a]'>{cardDescriptions}</p>
            </div>
        </>
    )
}

export default CardProps