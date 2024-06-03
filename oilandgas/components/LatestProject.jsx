import React from 'react'
import ProjectsTabs from './ProjectsTabs'

import TotalEnergies from '../public/TotalEnergies.webp'
import Mobil from '../public/Mobil.webp'
import Shell from '../public/Shell.webp'
import Link from 'next/link'

function LatestProject() {
  const LatestImage = [
    {
      id: 1,
      image: TotalEnergies
    },
    {
      id: 2,
      image: Mobil
    },
    {
      id: 3,
      image: Shell
    }
  ]
  return (
    <div className='mb-20'>
        <div className='font-bold text-black flex items-center justify-center mb-10 gap-10'>
            <div className='border border-[#F40F0F] w-40 md:w-60'/>
            <h4 className=' text-lg whitespace-nowrap md:text-4xl'>Latest Project</h4>
            <div className='border border-[#F40F0F] w-40 md:w-60'/>
        </div>

        <ProjectsTabs image={LatestImage}/>
        <Link href={'#'}>
            <div className='flex items-center justify-center md:items-end md:justify-end md:mr-20'>
            <div className='bg-[#F40F0F] p-2  rounded-md flex items-center gap-2'>
                <p className='text-white'>View All Projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

            </div>
            </div>
            
        </Link>
    </div>
  )
}

export default LatestProject