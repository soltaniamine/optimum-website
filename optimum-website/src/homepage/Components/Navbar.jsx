import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleScrolled = () => {
    setIsScrolled(!isScrolled);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-screen z-50 ${isScrolled ? 'backdrop-blur-sm bg-myblue/50' : 'bg-transparent '}  max-sm:bg-myblue/50 `}>
      <div className='h-16 flex justify-center '>
        <div className='flex justify-between items-center h-16 w-[92%]'>
          <img src={logo} alt="Logo" className='h-16' />
          <div className='px-4 cursor-pointer lg:hidden' onClick={() => {toggleMenu(); toggleScrolled(); }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-mypink"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          {isMenuOpen && (
            <div className='fixed top-0 left-0 w-screen h-screen bg-mydarkblue z-40 flex flex-col'>
              <div className='flex justify-end p-4'>
                <div className='px-4' onClick={() => {toggleMenu(); toggleScrolled(); }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-9 text-mypink cursor-pointer"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center text-white text-lg space-y-6'>
                <a href="#home" onClick={toggleMenu} className='hover:text-mypink font-semibold'>Home</a>
                <a href="#About" onClick={toggleMenu} className='hover:text-mypink font-semibold'>About</a>
                <a href="#Features" onClick={toggleMenu} className='hover:text-mypink font-semibold'>Features</a>
                <a href="#Aboutus" onClick={toggleMenu} className='hover:text-mypink font-semibold'>About us</a>
                <a href="#App" onClick={toggleMenu} className='hover:text-mypink font-semibold'>App</a>
              </div>
            </div>
          )}
          <div className='w-[40%] hidden lg:block'>
            <div className='text-black flex justify-between text-lg'>
              <a href="#home" className='hover:text-mypink font-semibold'>Home</a>
              <a href="#About" className='hover:text-mypink font-semibold'>About</a>
              <a href="#Features" className='hover:text-mypink font-semibold'>Features</a>
              <a href="#Aboutus" className='hover:text-mypink font-semibold'>About us</a>
              <a href="#App" className='hover:text-mypink font-semibold'>App</a>
            </div>
          </div>
          <a className='hidden lg:block' href="/app/optimum-app.apk">
            <button className='bg-mypink text-white h-10 w-36 rounded-3xl hidden lg:block'>Download</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

