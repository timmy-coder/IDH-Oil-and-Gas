'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "../public/logo.webp"
import Image from 'next/image'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolling]);
  return (
    <>
    <nav className={`${scrolling ? 'bg-[#091829] shadow-sm duration-150  ease-in-out  ': 'bg-transparent'} sticky top-0 -mx-5 md:-mx-10  z-40 text-white px-10 py-2 h-20`}>
        <div className='md:block hidden'>
          <div className='flex items-center justify-between'>
          <Link href={'/'}>
                <Image src={Logo} alt='Company Logo' width={80} height={80}/>
              </Link>

              <ul className='flex items-center justify-evenly gap-10'>
                <li>
                  <Link href={`/`}>Home</Link>
                </li>

                <li>
                  <Link href={`/about`}>Our Company</Link>
                </li>

                <li>
                  <Link href={`/projects`}>Projects</Link>
                </li>
                <li>
                  <Link href={`/services`}>Services</Link>
                </li>
                <li>
                  <Link href={`/contact`}>Contact Us</Link>
                </li>
              </ul>
        </div>

      </div>
      

        <div className='md:hidden '>
          <div className='flex items-center justify-between'>
            <Link href={'/'}>
                <Image src={Logo} alt='Company Logo' width={80} height={80}/>
              </Link>

              <div className="flex ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >

                  {isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>
          </div>
        </div>
      
         
        </nav>


        {isOpen && (
        <div className="md:hidden w-[100vw] h-[100vh] fixed left-0 top-0 z-20 bg-[#091829]  text-white" id="mobile-menu">
          <ul className='pt-40 flex flex-col items-center justify-center gap-10'>
            <li>
              <Link href={`/`}>Home</Link>
            </li>

            <li>
              <Link href={`/about`}>Our Company</Link>
            </li>

            <li>
              <Link href={`/projects`}>Projects</Link>
            </li>
            <li>
              <Link href={`/services`}>Services</Link>
            </li>
            <li>
              <Link href={`/contact`}>Contact Us</Link>
            </li>
          </ul>
        </div>)} 
   
    </>
  )
}

export default Header