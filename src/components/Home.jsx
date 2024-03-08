import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const textToType = [
    'Frontend Developer.',
    'Web Developer.',
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typeEffect = setInterval(() => {
      const currentText = textToType[currentTextIndex];
      const nextIndex = (currentTextIndex + 1) % textToType.length;
      const slicedText = currentText.substring(0, displayText.length + 1);

      setDisplayText(slicedText);

      if (displayText === currentText) {
        setTimeout(() => {
          setDisplayText('');
          setCurrentTextIndex(nextIndex);
        }, 200);
      }
    }, 150);

    return () => clearInterval(typeEffect);
  }, [displayText, currentTextIndex, textToType]);
  return (
    <div name='home' className='w-full h-screen bg-[#066565]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl font-bold text-[#ccd6f6]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Saurav Semwal 
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a {displayText}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Frontend web applications.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-[#03052b] hover:border-[#012a72]'>
            View Work
            <span className='duration-300 group-hover:rotate-90'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home;
