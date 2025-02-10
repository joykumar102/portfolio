import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TypeScript from './TypeScript';
import './Banner.css'
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div className='bg-[#1f242d]'>
            <div className='max-w-7xl mx-auto  py-10 px-10 lg:flex    justify-between text-white 
            flex-col lg:flex-row-reverse'>

                <div className='px-8 pt-5 hover:scale-105  rounded-full w-96'>

                <div className=' relative '> 
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{ 
                        opacity: 1,
                        transition: {delay: 2, duration: 0.4}, ease: "easeIn"
                    }}
                    ></motion.div>
                    
                </div>

                    <div className="avatar  ">
                     
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{ 
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.5}, ease: "easeInOut"
                    }}
                    ></motion.div>
                    
                           {/* image */}
                        <div className="w-[390px] rounded-full  absolute">
                            <img 
                        className=''
                            priority
                            quality={100}
                            fail
                            src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="Joy kumar" />
                        </div>
                        
                    </div>

                    {/* circle */}
                    <motion.svg 
                    fill='transparent'
                    viewBox=" 0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-[400px]  rounded-full relative bottom-4 right-[5px]'>
                        <motion.circle 
                         cx="253"
                         r="250"
                          cy="253"
                           stroke="#00ff99" 
                           strokeLinecap="round" 
                           strokeLinejoin="round"
                           initial={{strokeDasharray: "24 10 0 0"}} 
                           animate={{
                            strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22 "],
                            rotate: [120, 360]
                           }}
                           transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reserve",
                           
                           }}
                           ></motion.circle>
                    </motion.svg>
                </div>

                {/* <div className="w-96 rounded-full">
                            <img 
                            priority
                            quality={100}
                            fail
                            src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="Joy kumar" />
                        </div> */}


                <div className='pt-5'>
                   
                    <div className='items-center  space-y-10'>
                        <h4 className='text-4xl font-bold'>HELLO I'M</h4>
                        <h2 className='text-7xl text-accent font-bold'>Joy Kumar</h2>
                      
                        <section className="mb-10">
                            <TypeScript></TypeScript>
                        </section>
                        <div className='lg:w-2xl'><p className='text-xl text-gray-200'>
                        A passionate Frontend Developer from Bangladesh, specializing in React.js, Tailwind CSS, and the MERN stack. I love crafting modern, responsive, and user-friendly web applications that provide seamless experiences.
                            </p></div>
                    </div>

                    <div className="flex space-x-4 mt-10 ">

                    <div className='pt-1'>
                        {/* <button  className='group rounded-full border-2 border-accent btn bg-[#1f242d] hover:bg-accent transition-all text-white duration-300 ease-in-out text-xl'>Download <FaDownload></FaDownload></button> */}
                        <button  className='uppercase outline-none hover:bg-accent hover:text-white btn rounded-3xl border-accent bg-[#1f242d] shadow-none text-accent '>Download <FaDownload></FaDownload></button>
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
                </div>



                {/* <div className='relative'>

               


               <div className='absolute ml-20 mt-5 bg-red-500 rounded-full w-[380px] h-[380px] '></div>
               <div className='absolute ml-20 mt-5 w-[300px] h-[300px] bg-[#7cf03d] flex justify-center items-center'></div>

                <div className='absolute  ml-20 mt-5 bg-slate-500 rounded-full w-[380px] h-[380px]  '></div>

              


                    <div className="avatar relative pl-20 pt-5 ">
                        
                        <div className="avatar  w-[380px] h-[380px] ">
                            <img className='p-5  rounded-full'  src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="" />
                        </div>
                    </div>
               </div> */}





                {/* <div id='home-img'>
    <div id='img-box'>
        <div id='img-item'>
            <img className="w-52 rounded-full" src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="" />
        </div>
    </div>
</div> */}

            </div>
        </div>

    );
};

export default Banner;