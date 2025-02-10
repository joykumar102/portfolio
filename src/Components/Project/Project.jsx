import React, { useState } from 'react';
import projectImg1 from "../../assets/projects/winter.png";
import projectImg2 from "../../assets/projects/marathon.png";
import projectImg3 from "../../assets/projects/newspaper.png";
import projectImg4 from "../../assets/projects/475652724_1594801601162899_6408779719833728231_n.png";


const projects = [
    {
        name: "Winter Cloth Donation",
        image: projectImg4,
        description: "Donate winter clothing to keep those in need warm this season.",
        briefDescription:
            "Crowd Funding  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React, Tailwind CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
        liveLink: "https://winter-clothing-donation-1b527.web.app/",
        githubLink:
            "https://github.com/programming-hero-web-course1/b10-a9-authentication-joykumar102",
        details:
            "During the development of this project, I learned how to create reusable components and manage state in React. The challenge was to ensure responsiveness across all devices. Future improvements include adding more animations and optimizing performance.",
    },
    {
        name: "Crowd Funding",
        image: projectImg1,
        description: "Crowdfunding is raising money from many people online for projects, causes, or businesses.",
        briefDescription:
            "Crowd Funding  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React, Tailwind CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
        liveLink: "https://crowd-funding-42c30.web.app/",
        githubLink:
            "https://github.com/programming-hero-web-course2/b10-a10-client-side-joykumar102",
        details:
            "During the development of this project, I learned how to create reusable components and manage state in React. The challenge was to ensure responsiveness across all devices. Future improvements include adding more animations and optimizing performance.",
    },
    {
        name: "Marathon Management",
        image: projectImg2,
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
        name: "Newsapers Fullstack Website",
        image: projectImg3,
        description: "A full-stack newspaper website manages articles, users, and media with front-end, back-end, and database integration for seamless publishing.",
        briefDescription:
            "Marathon Management  website built with frontend React and Tailwind CSS and also use backend node js,express js mongoDb",
        techStack: "React, Tailwind CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
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

    return (
        <div className='bg-gray-900'>
            <div className="container mx-auto text-center px-10 py-20">
                <h2 className="text-4xl font-bold mb-6 text-accent">My Projects</h2>
                <p className="mb-12 text-gray-400 w-4/6 mx-auto lg:text-xl">
                    Here are some of the projects I've worked on that showcase my skills
                    in frontend and backend development. From creating responsive user
                    interfaces to building full-stack applications, these projects reflect
                    my passion for crafting modern, efficient, and scalable web solutions.
                    Each project highlights my ability to solve problems, write clean
                    code, and continuously learn new technologies. Explore my work to see
                    how I bring ideas to life with code!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 relative"
                           
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <button
                                onClick={() => handleViewMore(project)}
                                className="bg-accent mt-5 text-white px-4 py-2 rounded-md hover:opacity-80"
                            >
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* open modal */}

            {selectedProject && (
                <div className="fixed inset-0  flex items-center justify-center">
                    <div className="bg-gray-900 text-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
                        <p className="text-gray-400 mb-4">
                            {selectedProject.briefDescription}
                        </p>
                        <div className="mb-4">
                            <strong>Main Technology Stack:</strong>{" "}
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
                        <h4 className="text-xl font-bold mb-2">
                            Challenges & Improvements
                        </h4>
                        <p className="text-gray-400 mb-4">{selectedProject.details}</p>
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