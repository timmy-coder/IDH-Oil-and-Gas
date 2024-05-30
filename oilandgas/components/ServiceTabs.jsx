import React from 'react'
import ServiceImage1 from '../public/ServiceImage1.webp'
import ServiceImage2 from '../public/ServiceImage2.webp'
import ServiceImage3 from '../public/ServiceImage3.webp'
import Image from 'next/image'
import Link from 'next/link'

function ServiceTabs() {
  return (
    <div className='mb-20'>
        <div className='font-bold text-black flex mb-10 items-center justify-center gap-10'>
            <div className='border border-[#F40F0F] w-60'/>
            <h4 className=' text-lg text-[#091829] md:text-4xl'>Our Services</h4>
            <div className='border border-[#F40F0F] w-60'/>
        </div>

        <div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-20 my-8'>
                <div className='border-2 border-black rounded-md'>
                    <Image priority={true} src={ServiceImage1} alt='Shipp Image' width={300}
                    height={200}/>
                    <div className='bg-[#D1DEE1] p-4 max-w-[300px]'>
                        <h4 className='font-bold text-2xl mb-3'>Oil & Gas Shipping</h4>
                        <p className='text-base w-[300px] '>We work with some notable refineries in Europe, North America, Asia to deliver premium products.</p>

                    </div>
                </div>
                <div className='border-2 border-black rounded-md'>
                    <Image priority={true} src={ServiceImage2} alt='Valve Image' width={300}
                    height={200}/>
                    <div className='bg-[#D1DEE1] p-4 max-w-[300px]'>
                        <h4 className='font-bold text-2xl mb-5'>Valves Supply</h4>
                        <p className='text-base max-w-sm'>We supply valves and also deal with repair and maintenance of valves.</p>

                    </div>
                </div>
                <div className='border-2 border-black rounded-md'>
                    <Image priority={true} src={ServiceImage3} alt='Ship Image' width={300}
                    height={200}/>
                    <div className='bg-[#D1DEE1] p-4 max-w-[300px]'>
                        <h4 className='font-bold text-2xl mb-5'>Well Services</h4>
                        <p className='text-base max-w-sm'>Well testing, well simulation installation and support services.</p>

                    </div>
                </div>
            </div>
            <Link href={'#'}>
                <div className='flex items-center justify-center md:items-end md:justify-end md:mr-20'>
                <div className='bg-[#F40F0F] p-2  rounded-md flex items-center gap-2'>
                    <p className='text-white'>See All Services</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                     </svg>

                </div>
                </div>
                
            </Link>
        </div>

        <div className='bg-[#C6E2F2] p-8 -mx-5 flex flex-col items-center justify-center mt-8'>
            <p className='font-bold text-lg md:text-[30px] mb-5'>“Making  Great Impacts <br/>
Powering our Environments”</p>


<div className='bg-[#F40F0F] p-2  rounded-md flex items-center cursor-pointer gap-2'>
                    <p className='text-white'>Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                     </svg>

                </div>

        </div>

        
    </div>
  )
}

export default ServiceTabs