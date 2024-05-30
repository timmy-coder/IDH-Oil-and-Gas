import React from 'react'
import TotalEnergies from '../public/TotalEnergies.webp'
import Mobil from '../public/Mobil.webp'
import Shell from '../public/Shell.webp'
import Image from 'next/image'
import Link from 'next/link'

function ProjectsTabs({image}) {
  return (
    <div >
      <div className='flex items-center justify-center'> 
        <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mb-10 gap-20'>
              {image.map((img) => (
                  <div key={img.id} className=''>
                  <Image src={img.image} className='rounded-xl p-5 shadow-lg w-[200px] h-[150px] object-contain' alt='Total Enegries Logo'/>
              </div>
              ))}
              
            
          </div>
      </div>
        

       
       
    </div>
  )
}

export default ProjectsTabs