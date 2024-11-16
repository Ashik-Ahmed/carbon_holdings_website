"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {


    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }


    return (
        <span className='text-primary text-xl md:text-2xl font-light'>
            {/* Style will be inherited from the parent element */}
            <Typewriter
                words={['Where Business Meets Precision and Performance', 'Where Global Trade Finds Strength and Stability', 'Where Opportunities Are Custom-made']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={10}
                deleteSpeed={5}
                delaySpeed={3000}
            />
        </span>
    );
};

export default TypewriterText;
