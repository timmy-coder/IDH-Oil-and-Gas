import Image from 'next/image'
import React from 'react'
import Overivew from '../../public/overviewImage.webp'

function AboutOverview() {
  return (
    <div>
        <div className='font-bold text-black flex items-center justify-center mb-10 gap-10'>
            <div className='border border-[#F40F0F] w-40 md:w-60'/>
            <h4 className=' text-lg md:text-4xl whitespace-nowrap'>Overview</h4>
            <div className='border border-[#F40F0F] w-40 md:w-60'/>
        </div>

        <div>
        <div className='flex flex-col items-center lg:flex-row lg:items-start  justify-center gap-10 mb-20'>
        <div className='w-[400px] '>
            <Image priority={true} src={Overivew} alt='About Image' className='object-fill'/>
            
        </div>
        <div  className='bg-[#44749F] text-white py-5 px-5 rounded-md text-lg w-[350px] lg:w-[600px] h-[360px] lg:text-[23px]'>
            <p> Founded in 1982 in Texas, PetroGlobal Energy Solutions quickly became a pioneer in sustainable oil and gas practices. By integrating advanced technologies and environmental initiatives early on, we expanded globally, embracing efficient extraction methods and renewable energy. </p>

            <p className='mt-4'>Today, PetroGlobal is a leader in the international energy sector, committed to providing innovative and sustainable energy solutions worldwide</p>
        </div>

    </div>
        </div>
    </div>
  )
}

export default AboutOverview