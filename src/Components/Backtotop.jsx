import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'

const Backtotop = () => {
    return (
        <>
            <HashLink to='#home'>
                <div className='fixed bottom-8 right-8 bg-red-400 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-[50%] flex justify-center items-center'>
                    <IoIosArrowUp className='text-white text-4xl md:text-5xl lg:text-8xl' />
                </div>
            </HashLink>

        </>
    )
}

export default Backtotop