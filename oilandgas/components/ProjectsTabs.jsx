import React from 'react'
import TotalEnergies from '../public/TotalEnergies.webp'
import Mobil from '../public/Mobil.webp'
import Shell from '../public/Shell.webp'
import Image from 'next/image'
import Link from 'next/link'

function ProjectsTabs() {
  return (
    <div >
        <div className='flex flex-col md:flex-row items-center justify-center gap-20 mb-10'>
            <div className=''>
                <Image src={TotalEnergies} className='rounded-md p-5 shadow-md' alt='Total Enegries Logo' width={250} height={250}/>
            </div>
            <div className=''>
                <Image src={Mobil} className='rounded-md p-5 shadow-md' alt='Total Enegries Logo' width={250} height={250}/>
            </div>
            <div className=''>
                <Image src={Shell} className='rounded-md p-5 shadow-md' alt='Total Enegries Logo' width={250} height={250}/>
            </div>
        </div>

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

export default ProjectsTabs