import React from 'react'

import Director from '../public/director.webp'
import Image from 'next/image'

function DirectorSection() {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-start  justify-center gap-10 mb-20'>
        <div>
            <Image priority={true} src={Director} alt='Director Image' width={300} height={650}/>
            
        </div>
        <div  className='bg-[#44749F] text-white py-10 px-5 rounded-md text-lg w-[350px] lg:w-[600px] h-[380px] lg:text-[23px]'>
        PetroGlobal Energy Solutions is a prominent and multi-award-winning energy company originating from Nigeria, now with a global presence. We are evolving into a comprehensive one-stop energy provider, committed to leveraging cutting-edge technology and innovative strategies. Our offerings are designed to deliver cleaner, more affordable energy solutions, while conscientiously safeguarding our environment.
        <h2 className='text-2xl font-bold text-black mt-10 text-end'>Managing Director</h2>
        </div>

    </div>
  )
}

export default DirectorSection