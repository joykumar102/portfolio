import React, { Children, useState } from 'react';
import projectImg1 from "../../assets/projects/winter.png";
import projectImg2 from "../../assets/projects/crowdfunding.png";
import projectImg3 from "../../assets/projects/marathon.png";

import projectImg4 from "../../assets/projects/newspaper.png";
import {  motion } from "motion/react"
import Scrool from '../ScrollReveal/Scrool';
import { MdArrowOutward } from 'react-icons/md';


const projects = [
    {

        name: "Winter Cloth Donation",
        image: projectImg1,
        description: "Donate winter clothing to keep those in need warm this season.",
        briefDescription:
            "Crowd Funding  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React | Tailwind CSS | JavaScript | NodeJs ",
        liveLink: "https://winter-clothing-donation-1b527.web.app/",
        githubLink:
            "https://github.com/programming-hero-web-course1/b10-a9-authentication-joykumar102",
        details:
            "During the development of this project, I learned how to create reusable components and manage state in React. The challenge was to ensure responsiveness across all devices. Future improvements include adding more animations and optimizing performance.",
    },
    {

        name: "Crowd Funding",
        image: projectImg2,
        description: "Crowdfunding is raising money from many people online for projects, causes, or businesses.",
        briefDescription:
            "Crowd Funding  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React | Tailwind CSS | JavaScript | NodeJs | ExpressJs | MongoDB",
        liveLink: "https://crowd-funding-42c30.web.app/",
        githubLink:
            "https://github.com/programming-hero-web-course2/b10-a10-client-side-joykumar102",
        details:
            "During the development of this project, I learned how to create reusable components and manage state in React. The challenge was to ensure responsiveness across all devices. Future improvements include adding more animations and optimizing performance.",
    },
    {

        name: "Marathon Management",
        image: projectImg3,
        description: "Marathon management involves planning, organizing, and executing marathon events efficiently.",
        briefDescription:
            "Marathon Management  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React, Tailwind CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
        liveLink: "https://marathons-99a92.web.app/#slide1",
        githubLink:
            "https://github.com/programming-hero-web-course2/b10a11-client-side-joykumar102",
        details:
            "Building this platform taught me about react routing operations. The challenge was to implement efficient search functionality. Future improvements include adding user comments and social sharing options..",
    },
    {

        name: "Newsaper Fullstack ",
        image: projectImg4,
        description: "A full-stack newspaper website manages articles, users, and media with front-end, back-end, and database integration for seamless publishing.",
        briefDescription:
            "Marathon Management  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React | Tailwind CSS | JavaScript | NodeJs | ExpressJs | MongoDB",
        liveLink: "https://newspaper-fullstack-fced2.web.app/",
        githubLink:
            "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-joykumar102",
        details:
            "Developing this app involved handling backend API integration and implementing secure user authentication. The main challenge was ensuring data security. Future improvements include adding more payment options and enhancing the UI.",
    },

]


const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewMore = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };


    const varients = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }



    return (
        <div
            id='projects' className='bg-[#1f242d]'>
            <div
               className="max-w-7xl mx-auto gap-8 py-20">
                <Scrool>
                <h2 className='lg:text-5xl text-2xl uppercase font-bold text-center text-accent mb-5'>A Small selection of my work</h2>
                </Scrool>
                {
                    projects.map((project, index) =>
                        <Scrool>
                            <div key={index} className='lg:flex justify-between gap-10 py-8 px-5'>

                                <img className='lg:w-[700px] h-[400px] rounded-md' src={project.image} alt="" />


                                <div className='space-y-5 py-5'>

                                    <motion.div 
                                    variants={varients}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.8 }}
                                        className='flex gap-3  items-center '>
                                        <h2 className='lg:text-3xl text-lg text-white font-bold'>{project.name}</h2>
                                        <button className='btn flex gap-3 bg-accent outline-none hover:bg-accent text-white   border-accent  shadow-none  hover:scale-105'><a href={project.liveLink}>View Live  </a> <MdArrowOutward className='text-xl' /></button>
                                    </motion.div>
                                    <p                                   
                                        className='text-2xl text-gray-400'>{project.description}</p>
                                    <h4 className='text-white  text-lg'>Technologies Used: {project.techStack}</h4>
                                    <div className='flex-col'>
                                        <button className='btn  bg-accent outline-none hover:bg-accent text-white   border-accent  shadow-none hover:scale-105'><a href={project.githubLink}>View GitHub Repo</a></button>
                                    </div>
                                    <button onClick={() => handleViewMore(project)} className='btn  bg-accent outline-none hover:bg-accent text-white   border-accent  shadow-none hover:scale-105'>Projects Details</button>
                                </div>
                            </div>
                        </Scrool>
                    )
                }
            </div>

            {/* open modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
                    <div className="bg-[#1f242d] text-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-2/3">
                        <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
                        <p className="text-gray-400 text-2xl mb-4">
                            {selectedProject.briefDescription}
                        </p>
                        <div className="mb-4 text-2xl">
                            <strong>Technology Used:</strong>{" "}
                            {selectedProject.techStack}
                        </div>
                        <div className="flex gap-4 mb-4">
                            <a
                                href={selectedProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                Live Link
                            </a>
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                            >
                                GitHub Link
                            </a>
                        </div>
                        <h4 className="text-3xl font-bold mb-2">
                            Challenges Faced
                        </h4>
                        <p className="text-gray-400 text-xl mb-4">{selectedProject.details}</p>
                        <button
                            onClick={handleCloseModal}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Project;