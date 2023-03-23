import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejsSmall, DiMongodb, DiMysql, DiGit } from "react-icons/di";
import { SiTailwindcss, SiExpress } from 'react-icons/si'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    };

    return (
        <>
            <div id='skills' className='w-full min-h-[80vh] h-auto text-white flex flex-col justify-center items-center'>
                <div className="flex flex-col items-center w-[70%] mb-8 mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl border-b-4 border-b-indigo-500 font-bold font-['Acme']">My Skills</h2>
                    <p className="text-white mt-8 text-xl md:text-2xl lg:text-4xl">Here are some of my skills</p>
                </div>
                <div className="w-[80%] my-12 mx-auto px-4">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["mobile"]}
                    >
                        <div className='carousel-box autoScroll'>
                            <DiHtml5 className='car-icon text-orange-500' />
                            <h2 className="car-text">HTML5</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiCss3 className='car-icon text-blue-500' />
                            <h2 className="car-text">CSS3</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiJsBadge className='car-icon text-yellow-300' />
                            <h2 className="car-text">javaScript</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiReact className='car-icon text-blue-400' />
                            <h2 className="car-text">React</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <SiTailwindcss className='car-icon text-blue-500' />
                            <h2 className="car-text">Tailwind Css</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiNodejsSmall className='car-icon text-green-500' />
                            <h2 className="car-text">Node Js</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <SiExpress className='car-icon text-green-500' />
                            <h2 className="car-text">Express Js</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiMongodb className='car-icon text-green-700' />
                            <h2 className="car-text">MongoDB</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiMysql className='car-icon text-blue-500' />
                            <h2 className="car-text">Mysql</h2>
                        </div>
                        <div className='carousel-box autoScroll'>
                            <DiGit className='car-icon text-red-600' />
                            <h2 className="car-text">Git</h2>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Skills