import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#1f242d]  text-white rounded p-10">
      <div className='grid grid-cols-1'>

        <div className='space-y-8'>
          <div>
            <h2 className='text-4xl font-bold'>Joy Kumar</h2>
          </div>

          <ul className='grid grid-flow-col gap-5 '>
            <li className=' font-bold text-2xl'><a>Home</a></li>
            <li className=' font-bold text-2xl'><a>About</a></li>
            <li className=' font-bold text-2xl'><a>Projects</a></li>
            <li className=' font-bold text-2xl'><a>Contact</a></li>
          </ul>

        </div>

        <div className='pt-5'>
          <p className='text-lg'> © {new Date().getFullYear()} - All rights reserved by <span className='text-2xl font-semibold'>Joy Kumar</span></p>
        </div>
      </div>

    </footer>
    );
};

export default Footer;