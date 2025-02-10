import React from 'react';

const About = () => {
    return (
        // <div className='flex justify-evenly gap-10 max-w-6xl mx-auto'>

        //     <div className=''>
        //         <img className='w-full  ' src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg" alt="" />
        //     </div>

        //     <div className='bg-gray-600 '>
        //         <h2 className='text-3xl font-bold'>About Me</h2>
        //         <p>Hello! I'm Joy Kumar, a passionate web developer based in Dhaka, Bangladesh. My journey into programming began with a desire to develop valuable skills, which quickly turned into a passion for creating engaging digital experiences.

        //             I enjoy working on a variety of projects, focusing on clean, efficient code and user-friendly design. Outside of programming, I have a keen interest in drawing and playing sports, which help fuel my creativity and provide balance.</p>
        //     </div>

        //     <div className='bg-gray-600'>
        //         <h2 className='text-3xl font-bold'>Education</h2>
        //         <p>Bachelor of Science (B.Sc.) in Computer Science & Engineering
        //             National University of Bangladesh
        //             During my academic journey, I have gained knowledge in data structures, algorithms, web development, and modern technologies like React, Node.js, and MongoDB. I'm always eager to learn and improve my skills.</p>
        //     </div>

        // </div>
        <div className="hero min-h-screen  bg-gray-900">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            className="max-w-md rounded-lg shadow-2xl"
            src="https://i.ibb.co.com/z6bHScj/423670923-1792336831210942-7011210272215150681-n.jpg"
            alt="joy kumar"
            
          />
          
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            
          >
           
            <div className="bg-gray-800 rounded-lg   shadow-lg p-6 ">
              <h2 className="text-3xl font-bold text-accent mb-4">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm Jyoti Prokash, a passionate web developer based in
                Dhaka, Bangladesh. My journey into programming began with a
                desire to develop valuable skills, which quickly turned into a
                passion for creating engaging digital experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I enjoy working on a variety of projects, focusing on clean,
                efficient code and user-friendly design. Outside of programming,
                I have a keen interest in drawing and playing sports, which help
                fuel my creativity and provide balance.
              </p>
            </div>

            
            
          </div>
        </div>
      </div>
    );
};

export default About;