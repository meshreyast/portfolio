import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return window.removeEventListener('scroll', onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
        setShow(false)
    }

    return (
        <>
            <div className={`fixed w-full py-4 z-[9999] transition-all duration-500 ease-in-out ${scrolled ? 'scrolled' : ''}`}>
                <div className="flex justify-around items-center relative">
                    <div className="">
                        <HashLink to='#home'>
                            <p className="text-4xl md:text-6xl text-white font-bold">ST</p>
                        </HashLink>
                    </div>
                    <div className="transition-all duration-300 ease-in-out">
                        <div
                            className='text-white text-3xl cursor-pointer sm:inline-block md:hidden transition-all'
                            onClick={() => setShow(!show)}
                        >
                            {show ? <ImCross /> : <GiHamburgerMenu />}
                        </div>
                        <ul className={`text-xl md:text-2xl lg:text-3xl absolute left-0 top-16 w-screen transition-all duration-300  bg-black/50 ${show ? 'flex flex-col' : 'hidden'} md:bg-transparent md:relative md:flex md:justify-center md:items-center md:flex-row md:w-full md:top-0`}>
                            <li className={`link hover:opacity-100 ${activeLink === 'home' ? 'active' : ''}`}>
                                <HashLink
                                    to='#home'
                                    onClick={() => onUpdateActiveLink('home')}
                                >Home</HashLink>
                            </li>
                            <li className={`link hover:opacity-100 ${activeLink === 'about' ? 'active' : ''}`}>
                                <HashLink
                                    to='#about'
                                    onClick={() => onUpdateActiveLink('about')}
                                >About Me</HashLink>
                            </li>
                            <li className={`link hover:opacity-100 ${activeLink === 'skills' ? 'active' : ''}`}>
                                <HashLink
                                    to='#skills'
                                    onClick={() => onUpdateActiveLink('skills')}
                                >Skills</HashLink>
                            </li>
                            <li className={`link hover:opacity-100 ${activeLink === 'projects' ? 'active' : ''}`} >
                                <HashLink
                                    to='#projects'
                                    onClick={() => onUpdateActiveLink('projects')}
                                >Projects</HashLink>
                            </li>
                            <li className={`link hover:opacity-100 ${activeLink === 'contact' ? 'active' : ''}`}>
                                <HashLink
                                    to='#contact'
                                    onClick={() => onUpdateActiveLink('contact')}
                                >Connect</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar