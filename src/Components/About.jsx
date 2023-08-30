import React from 'react'

const About = () => {

    const cvLink = "https://drive.google.com/file/d/1VIUBnwjBHBVEV_-NNRxbytgqkHrBkJHT/view?usp=drive_link";

    const desc = "I'm an enthusiastic developer with a love for creating engaging and user-friendly web interfaces using ReactJs. My skills in HTML, CSS and JS are strong and I have deep understanding of web development best practices. I am also proficient in NodeJs and Rest APIs. I am excited to bring my expertise to new challenges and projects. In my spare time I watch movies and grind FPS titles. Check out my resume!";

    return (
        <>
            <div id='about' className="w-full min-h-full bg-white px-6 py-12">
                <div className="flex justify-center items-center mb-4 ">
                    <h2 className="w-full md:w-1/2 text-3xl md:text-4xl lg:text-6xl border-b-4 border-b-indigo-500 text-center font-normal font-['Acme']">Know more about me!</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto w-[90%]">
                    <p className="w-full text-black order-1 m-4 text-xl md:text-2xl lg:text-3xl">
                        {desc}
                    </p>
                    <a
                        className="w-full md:w-2/5 order-2 p-4 text-xl md:text-2xl lg:text-4xl font-bold transition-all duration-300 text-indigo-500 border-4 border-indigo-500 hover:scale-105 cursor-pointer text-center"
                        href={cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Résumé
                    </a>
                </div>
            </div>
        </>
    )
}

export default About