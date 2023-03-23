import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {

    const linkedin = 'https://www.linkedin.com/in/shreyas-thakare-691261151/';
    const github = 'https://github.com/meshreyast';

    const d = new Date();
    let year = d.getFullYear();

    return (
        <>
            <div className='w-full min-h-[35vh] md:min-h-[30vh] flex flex-col justify-center items-center'>
                <div className="w-[50vw] md:w-[25vw] flex flex-row justify-around items-center mx-auto mt-4">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <div className='container group'>
                            <div className="tooltip">Linkedin<span className='arrow'></span></div>
                            <span className='icon linkedin'><BsLinkedin className='inner-icon' /></span>
                        </div>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <div className='container group'>
                            <div className="tooltip">Github<span className='arrow'></span></div>
                            <span className='icon git'><BsGithub className='inner-icon' /></span>
                        </div>
                    </a>
                </div>
                <p className='mt-4 text-xl md:text-2xl lg:text-4xl text-white'>Copyright {year}. All rights resereved</p>
            </div>
        </>
    )
}

export default Footer