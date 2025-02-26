import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TypeScript from './TypeScript';
import './Banner.css'
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div className='bg-[#1f242d]'>
            <div className='max-w-7xl mx-auto  py-30 px-5 lg:px-20 lg:flex    justify-between text-white 
           '>
           

 
             <motion.div 
             initial={{y: -50, opacity:0}}
             animate={{y: 0, opacity: 1 }}
             transition={{duration: 1.5, delay: 0.2}}
             className='lg:py-10'
             >
             <img
                    className="w-96 border-2 mx-auto rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#66f8fe] "
                    src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="Joy kumar" />
             </motion.div>

                <motion.div className='pt-15' 
                 initial={{y: 50, opacity:0}}
                 animate={{y: 0, opacity: 1 }}
                 transition={{duration: 1.5, delay: 0.5}}
                >

                    <div className='items-center  space-y-2'>
                        <h4 className='text-3xl font-bold'>Hi It's</h4>
                        <h2 className='text-6xl text-accent font-bold'>Joy Kumar</h2>

                        <section className="mb-5">
                            <TypeScript></TypeScript>
                        </section>
                        <div className='lg:w-2xl'><p className='text-xl text-gray-200'>
                            A passionate Frontend Developer from Bangladesh, specializing in React.js, Tailwind CSS, and the MERN stack. I love crafting modern, responsive, and user-friendly web applications that provide seamless experiences.
                        </p></div>
                    </div>

                    <div className="flex space-x-4 mt-5 ">

                        <div className='pt-1'>
                   <a href="https://drive.google.com/file/d/1ySCsUjXIB-Qr3fqnEq_5E3QJNAPbJEVw/view?usp=drive_link">
                            <button className='uppercase outline-none hover:bg-accent hover:text-white btn rounded-3xl border-accent bg-[#1f242d] shadow-none text-accent '>Download <FaDownload></FaDownload></button>
                            </a>
                        </div>

                        <div className="group rounded-full border-2 border-accent p-3 hover:bg-accent transition-all duration-300 ease-in-out">
                            <a
                                href="https://www.facebook.com/krishno.kumar.9809"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-accent group-hover:text-white text-xl" />
                            </a>
                        </div>


                        <div className="group rounded-full border-2 border-accent p-3 hover:bg-accent transition-all duration-300 ease-in-out">
                            <a
                                href="https://www.linkedin.com/in/joy-kumar-20069934a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-accent group-hover:text-white text-xl" />
                            </a>
                        </div>
                        <div className="group rounded-full border-2 border-accent p-3 hover:bg-accent transition-all duration-300 ease-in-out">
                            <a
                                href="https://github.com/joykumar102"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-accent group-hover:text-white text-xl" />

                            </a>
                        </div>


                    </div>
                </motion.div>
            </div>


        
        
        </div>

    );
};

export default Banner;