import React from 'react'
import Header from './Header'
import Banner from '../public/landingBanner.webp'
import Image from 'next/image'

function PageBanner() {
  return (
    <div className='mb-10 relative -mx-5'>
         <Header/>
         <div className=''>
            <h1 className='absolute top-1/2 left-72 2xl:left-1/4 font-bold text-[70px] 2xl:text-[96px] text-white'>Welcome to  company</h1>
            <Image src={Banner} alt='Banner Image' className='w-full h-[100vh] object-cover'/>
         </div>
         
    </div>
  )
}

export default PageBanner