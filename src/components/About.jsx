import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#046568] text-gray-300'>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4 sm:text-right'>
            <p className='inline text-4xl font-bold border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-4xl font-bold sm:text-right'>
              <p>Hi. I'm Saurav Semwal, nice to meet you. Please take a look around.</p>
            </div>
            <div>
            <p>
              This website serves as my online resume and showcases all of the experiences and 
              skills I have acquired thus far in the field of web development. I
              am a Frontend Developer. I love to solve DATA STRUCTURES &
              ALGORITHM problems using Javascript & I have done Bachelor of Technology
              in Electronics and communication from NIT Silchar.
            </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
