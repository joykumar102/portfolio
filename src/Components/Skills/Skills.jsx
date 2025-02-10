import React from 'react';

import html from '../../../src/assets/html.png'
import css from '../../../src/assets/text.png'
import javascript from '../../../src/assets/java-script.png'
import tailwind from '../../../src/assets/tailwind_css.png'
import react from '../../../src/assets/react.png'
import firebase from '../../../src/assets/google_firebase-2-512.webp'
import nodejs from '../../../src/assets/node-js-icon-8.jpg'
import mongoDb from '../../../src/assets/mongodb-icon-2048x2048-cezvpn3f.png'
import Marquee from 'react-fast-marquee';

const Skills = () => {

    const skills = [
        { name: "HTML", percentage: "90%", icon: html },
        { name: "CSS3", percentage: "90%", icon: css },
        { name: "JavaScript", percentage: "80%", icon: javascript },
        { name: "Tailwind", percentage: "90%", icon: tailwind },
        { name: "NodeJS", percentage: "75%", icon: nodejs },
        { name: "ReactJS", percentage: "80%", icon: react },
        { name: "firebase", percentage: "80%", icon: firebase },
        { name: "MongoDB", percentage: "70%", icon: mongoDb },
      ];
    return (
        <section  className="bg-[#171e24] text-white py-16 min-h-screen justify-center items-center flex">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-accent">
            My Soft Skills
          </h2>
          <p className="lg:text-xl mb-12 text-gray-400 mx-auto lg:w-4/6">
            I am a highly motivated Frontend Developer with a solid foundation
            in both frontend and backend technologies. I specialize in building
            modern, responsive, and user-centric web applications. My technical
            skillset spans a wide range of tools and frameworks, allowing me to
            deliver seamless, full-stack solutions. Below are the core
            technologies I work with to create efficient and scalable web
            applications.
          </p>
          <Marquee speed={120}>
            <div className="flex justify-center flex-wrap gap-10 ml-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl relative w-44"
                >
                  <div className="absolute inset-0 bg-accent opacity-0 transition-opacity hover:opacity-20 rounded-lg"></div>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="   text-accent opacity-100 text-lg font-bold">
                    {skill.percentage}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    );
};

export default Skills;