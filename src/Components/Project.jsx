import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const Project = ({ item }) => {
    return (
        <>
            <div className="w-full h-full relative hover:scale-105 transition-all duration-400 ease-in-out">
                <a
                    className="bg-gradient-to-r from-black"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='rounded-lg' src={item.image} alt={item.name} />
                    <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/60  hover:opacity-100 transition-all duration-600 ease-in-out'>
                        <p className='text-white text-xl md:text-2xl font-bold flex justify-center items-center h-full text-center'>
                            Go to Website
                            {<BsBoxArrowUpRight className='ml-2' />}
                        </p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Project