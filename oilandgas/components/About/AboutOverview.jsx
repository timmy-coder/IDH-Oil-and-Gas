import Image from 'next/image'
import React from 'react'
import Overivew from '../../public/logo2.webp'

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
        <div  className='bg-[#44749F] text-white py-5 px-5 rounded-md text-lg w-[350px] lg:w-[600px]  lg:text-[23px]'>
            <p> At POBG, we leverage cutting-edge technology and industry expertise to deliver energy solutions that power businesses, industries, and households. Our strategic location in Lagos positions us at the heart of Nigeria&apos;s oil and gas industry, allowing us to serve a diverse range of clients while contributing to the nation&apos;s economic development.</p>

            <p className="mt-2">Our vision is to lead the transformation of Nigeria&apos;s energy sector by fostering innovation, supporting sustainable practices, and creating value for our stakeholders. We prioritize community development, environmental responsibility, and customer satisfaction in all our operations.</p>

    <p className="mt-4">Join us as we work towards a brighter, energy-secure future for Nigeria and beyond.</p>
        </div>

    </div>
        </div>
    </div>
  )
}

export default AboutOverview