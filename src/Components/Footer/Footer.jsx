import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-900 text-white rounded p-10">
      <div className='grid grid-cols-1'>

        <div className='space-y-8'>
          <div>
            <h2 className='text-4xl font-bold'>Joy Kumar</h2>
          </div>

          <ul className='grid grid-flow-col gap-5 '>
            <li className='cursor-pointer font-bold text-2xl'><Link smooth={true} duration={1000}
              activeClass='active' to='Home'>Home</Link></li>
            <li className='cursor-pointer font-bold text-2xl'><Link smooth={true} duration={1000}
              activeClass='active' to='about'>About</Link></li>
            <li className='cursor-pointer font-bold text-2xl'><Link smooth={true} duration={1000}
              activeClass='active' to='skills'>Skills</Link></li>
            <li className='cursor-pointer font-bold text-2xl'><Link smooth={true} duration={1000}
              activeClass='active' to='projects'>Projects</Link></li>
          </ul>

        </div>

        <div className='pt-5'>
          <p className='text-lg'> © {new Date().getFullYear()} - All rights reserved by <span className='text-2xl  font-semibold'>Joy Kumar</span></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;