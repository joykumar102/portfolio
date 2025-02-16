import React from 'react';
import { motion } from "motion/react"

const Scrool = ({children}) => {
    return (
        <motion.div  
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        transition={{duration: 0.8}}
        >
            {children}
        </motion.div>
    );
};

export default Scrool;