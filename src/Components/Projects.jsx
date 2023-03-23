import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import {
    anime,
    calculator,
    firewatch,
    grocery,
    menus,
    netflix,
    task,
    tours,
    youtube
} from './index'
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            name: "youtube_clone",
            link: "https://meshreyast.github.io/youtubeclone/",
            image: youtube
        },
        {
            name: "netflix_clone",
            link: "https://netflix-clone-2abd6.web.app/",
            image: netflix,
        },
        {
            name: "task_manager",
            link: "https://meshreyast.github.io/Task-Manager-App/",
            image: task,
        },
        {
            name: "grocery_cart",
            link: "https://meshreyast.github.io/Grocery-cart-project/",
            image: grocery,
        },
        {
            name: "calculator",
            link: "https://meshreyast.github.io/react-calculator/",
            image: calculator,
        },
        {
            name: "menus",
            link: "https://meshreyast.github.io/menus/",
            image: menus,
        },
        {
            name: "firewatch",
            link: "https://meshreyast.github.io/firewatch_replica/",
            image: firewatch,
        },
        {
            name: "tours",
            link: "https://meshreyast.github.io/tours-app/",
            image: tours,
        },
        {
            name: "anime_list",
            link: "https://meshreyast.github.io/Anime-list/",
            image: anime,
        },
    ];

    const gitRepoLink = "https://github.com/meshreyast?tab=repositories"

    return (
        <>
            <div id='projects' className='w-full min-h-screen mt-8'>
                <div className="w-[60%] mx-auto flex justify-center items-center">
                    <h2 className="font-['Acme'] text-3xl md:text-4xl lg:text-6xl text-center text-white border-b-4 border-indigo-500">My Projects</h2>
                </div>
                <div className="w-[85%] md:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 mx-auto mt-8 md:mt-12">
                    {projects.map((item, id) => (
                        <Project key={id} item={item} />
                    ))}
                </div>
                <div className="w-full flex flex-row justify-center items-center mb-4">
                    <p className="text-white text-center text-xl md:text-3xl my-4">
                        Check out more of my projects
                        <a
                            href={gitRepoLink}
                            className='text-blue-500 ml-2'
                            target="_blank"
                            rel="noopener noreferrer"
                        >here{<BsBoxArrowUpRight
                            className='ml-2 text-white text-xl md:text-3xl inline-block'
                        />}
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Projects