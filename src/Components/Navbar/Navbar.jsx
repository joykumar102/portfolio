import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

    const links = (
        <>

            <li className='text-white cursor-pointer font-bold text-lg hover:text-accent'><Link smooth={true} duration={1000}
                activeClass='active' to="Home">Home</Link></li>
            <li className='text-white cursor-pointer font-bold text-lg hover:text-accent'>
                <Link
                    to="about"
                    smooth={true} duration={1000}
                    activeClass='active'
                >
                    About
                </Link>
            </li>
            <li className='text-white font-bold text-lg hover:text-accent'>
                <Link
                    to="skills"
                    smooth={true} duration={1000}
                    activeClass='active'
                    className="cursor-pointer"
                >
                    Skills
                </Link>
            </li>
            <li className='text-white cursor-pointer font-bold text-lg hover:text-accent'>
                <Link
                    to="projects"
                    smooth={true} duration={1000}
                    activeClass='active'
                >

                    Projects
                </Link>
            </li>
            <li className='text-white cursor-pointer font-bold text-lg hover:text-accent'>
                <Link
                    to="contact"
                    smooth={true} duration={1000}
                    activeClass='active'
                    className="cursor-pointer"
                >
                    Contact
                </Link>
            </li>

        </>
    )


return (
        <div className="navbar  fixed top-0 z-10 bg-[#1f242d]/50 px-10">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}

                        className="text-black bg-gray-900 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className=" text-3xl text-accent font-bold">Joy Kumar</a>
            </div>
            <div className="navbar-end hidden  lg:flex">
                <ul className="menu menu-horizontal  text-black">
                    {links}

                </ul>
            </div>

            {/* <div className='navbar-end '>


                <a className='btn outline-none bg-[#1f242d] border-accent hover:bg-accent  hover:shadow-none  shadow-accent text-white rounded-3xl text-xl'> Hire me</a>

            </div> */}
        </div>

    );
};

export default Navbar;