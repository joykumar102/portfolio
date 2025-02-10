import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Project from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
          {/* <h2 className="text-5xl"> this is Home......</h2> */}
       <div className='pt-20'>
       <Banner></Banner>
       </div>
       <div><About></About></div>
       <div><Skills></Skills></div>
       <div><Project></Project></div>
       <div><Contact></Contact></div>
       </div>
    );
};

export default Home;