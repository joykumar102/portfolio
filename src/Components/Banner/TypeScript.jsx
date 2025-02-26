import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeScript = () => {
    const [text] = useTypewriter({
        words: ["Frontend Developer", "Web Developer"],
        typeSpeed: 100,
        delaySpeed: 70,
        delaySpeed: 1500,
        loop: 0,
      });
    return (
        <div className="h-14 text-4xl font-bold py-10">
        <p className="text-gray-500">
          I am a{" "}
          <span className="lg:text-3xl text-xl bg-accent text-white font-bold">
            {text}
            <Cursor cursorStyle="|" />
          </span>{" "}
        </p>
      </div>
    );
};

export default TypeScript;