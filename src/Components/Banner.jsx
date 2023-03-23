import React, { useEffect, useState } from 'react'
import videoBG from '../assets/background.webm'
import ReactTyped from 'react-typed'
import 'react-typed/dist/animatedCursor.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'

const Banner = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener('load', setLoading(false))

        return window.removeEventListener('load', setLoading(false))
    }, [])

    return (
        <>
            <div id="home" className='w-full min-h-screen relative z-10'>
                {loading && (
                    <div className="text-white text-2xl md:text-5xl flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 z-[99]">Loading...</div>
                )}
                <div className="w-full h-screen">
                    <video
                        src={videoBG} muted autoPlay loop
                        className='w-full h-full object-cover z-20'
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
                        <h1 className="text-2xl md:text-4xl text-white mx-8 md:ml-auto md:mr-24 font-['Acme']">Hello & Welcome</h1>
                        <ReactTyped
                            className='typewrite'
                            strings={[
                                `I'm Shreyas Thakare`,
                                `I'm a Full Stack Developer`
                            ]}
                            typeSpeed={100}
                            backSpeed={75}
                            loop >
                        </ReactTyped>
                        <div className="w-3/4 md:w-1/2 mt-8 mx-8 md:ml-auto md:mr-24 text-center md:text-right">
                            <p className="text-white text-xl md:text-3xl 2xl:text-4xl">Hi I'm a passionate Full-Stack developer!</p>
                        </div>
                        <div className="mt-8 mx-8 md:ml-auto md:mr-24 group">
                            <HashLink to='#contact' className=' flex flex-row justify-center items-center'>
                                <p className="text-white text-xl md:text-2xl 2xl:text-3xl">
                                    Let's Connect
                                </p>
                                <BsFillArrowRightCircleFill
                                    className='ml-2 cursor-pointer text-white text-xl md:text-2xl  2xl:text-3xl transition-all group-hover:translate-x-4'
                                />
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner