import React from 'react'

import Director from '../public/logo2.webp'
import Image from 'next/image'

function DirectorSection() {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-start  justify-center gap-10 mb-20'>
        <div>
            <Image priority={true} className="border" src={Director} alt='Director Image' width={300} height={400}/>
            
        </div>
        <div  className='bg-[#44749F] text-white py-10 px-5 rounded-md text-lg w-[350px] lg:w-[600px] h-[380px] lg:text-[23px]'>
        Welcome to POGOD, a dynamic and innovative oil and gas company based in Lagos, Nigeria. We are committed to driving energy solutions that meet the growing demands of both the local and international markets. Our core operations span exploration, production, refining, and distribution of petroleum products, ensuring the highest standards of safety, sustainability, and efficiency.
        </div>

    </div>
  )
}

export default DirectorSection