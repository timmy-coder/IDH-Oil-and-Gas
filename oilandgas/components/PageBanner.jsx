import React from 'react'
import Header from './Header'

import Image from 'next/image'

function PageBanner({image, title}) {
  return (
    <div className='mb-20 relative -mt-24 md:-mt-20 -mx-5  md:-mx-10'>
         <div className=''>
            <h1 className='absolute top-1/2 left-[35%] 2xl:left-1/4 font-bold text-[40px] whitespace-nowrap md:text-[70px] 2xl:text-[96px] text-white'>{title}</h1>
            <Image src={image} alt='Banner Image' className='w-full h-[583px] object-bottom object-cover'/>
         </div>
         
    </div>
  )
}

export default PageBanner