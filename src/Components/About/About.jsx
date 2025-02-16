import React from 'react';
import { motion } from "motion/react"
const About = () => {

  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  const varient = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div id='about' className='bg-[#1f242d] py-20'>

      <div className='lg:flex justify-between lg:max-w-6xl mx-auto gap-10'>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <div className='items-center py-20 text-white px-5 space-y-5'>
            <h2 className='text-accent text-4xl font-bold'>About Me</h2>
            <p className='text-xl'>Hello! I'm Joy Kumar, a passionate web developer based in Dhaka, Bangladesh. My journey into programming began with a desire to develop valuable skills, which quickly turned into a passion for creating engaging digital experiences.
              I enjoy working on a variety of projects, focusing on clean, efficient code and user-friendly design. Outside of programming, I have a keen interest in drawing and playing sports, which help fuel my creativity and provide balance.</p>
          </div>

          
        </motion.div>

        <motion.div  variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
         >
          <img
          className="max-w-sm mx-auto rounded-lg shadow-2xl"
          src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg"
          alt="joy kumar"

        />
      </motion.div>
    </div>
    </div >
  );
};

export default About;