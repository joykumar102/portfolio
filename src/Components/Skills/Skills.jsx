import React from 'react';
import html from '../../../src/assets/icons/html.png'
import css from '../../../src/assets/icons/text.png'
import javascript from '../../../src/assets/icons/java-script.png'
import tailwind from '../../../src/assets/icons/tailwind_css.png'
import react from '../../../src/assets/icons/react.png'
import firebase from '../../../src/assets/icons/google_firebase-2-512.webp'
import nodejs from '../../../src/assets/icons/node-js-icon-8.jpg'
import mongoDb from '../../../src/assets/icons/mongodb-icon-2048x2048-cezvpn3f.png'
import { motion } from "motion/react"


const Skills = () => {

  const varients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }


  // iconverient
  const iconVsrients = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        case: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  })

  return (

    <div id='skills' className='bg-[#1f242d]'>
      <div className='max-w-6xl  mx-auto'>
        <div className='pt-20 pb-10'>
          <motion.h1
            variants={varients}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}

            className='text-5xl text-center font-bold text-accent '>My Skills</motion.h1>
        </div>


        {/* <div className='grid lg:grid-cols-8 grid-cols-3 lg:min-h-[300px] gap-10 items-center justify-center  px-10  max-w-6xl  mx-auto py-10 '>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={html} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={css} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={javascript} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={tailwind} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={react} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={firebase} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={nodejs} alt="" />
        </motion.div>

        <motion.div variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}>
          <img
            className=' cursor-pointer w-[90px]  text-accent transition-all duration-300 
        hover:-translate-y-5 '
            src={mongoDb} alt="" />
        </motion.div>
      </div> */}

        {/* another style */}
        <div className=' grid lg:grid-cols-4 grid-cols-2  gap-10  justify-center items-center    py-10 '>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVsrients(2.5)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={html} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(3)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={css} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(6)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={javascript} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(6)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={tailwind} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(3)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={react} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(6)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={firebase} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(4)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={nodejs} alt="" />
          </motion.div>

          <motion.div initial="initial"
            animate="animate"
            variants={iconVsrients(3)}>
            <img
              className=' cursor-pointer w-[150px] mx-auto  text-accent transition-all duration-300 
        hover:-translate-y-5 '
              src={mongoDb} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;