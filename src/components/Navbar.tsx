import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <div className={`fixed w-full h-[90px] z-[100] ${shadow ? 'shadow-xl bg-white/80 backdrop-blur-md' : 'bg-white'}`}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Portfolio</h1>
        </div>
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <Menu size={25} className="text-gray-800" />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <h1 className='text-2xl font-bold text-gray-800'>Portfolio</h1>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <X size={20} className="text-gray-800" />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link onClick={handleNav} to="home" smooth={true} duration={500} className='py-4 text-sm'>Home</Link>
              <Link onClick={handleNav} to="about" smooth={true} duration={500} className='py-4 text-sm'>About</Link>
              <Link onClick={handleNav} to="skills" smooth={true} duration={500} className='py-4 text-sm'>Skills</Link>
              <Link onClick={handleNav} to="projects" smooth={true} duration={500} className='py-4 text-sm'>Projects</Link>
              <Link onClick={handleNav} to="contact" smooth={true} duration={500} className='py-4 text-sm'>Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 