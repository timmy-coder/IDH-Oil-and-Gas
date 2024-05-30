import React from 'react'
import Phone from '../../public/phone.webp'
import Email from '../../public/email.webp'
import Location from '../../public/location.webp'
import Image from 'next/image'
import dynamic from 'next/dynamic'


const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false})

function ContactOverview() {
  return (
    <div>
        <div className='flex flex-col items-center md:flex-row justify-center gap-20 my-40' >

            <div className='relative  bg-[#FAF4F4] p-3 rounded-xl shadow-md flex flex-col justify-center items-center'>
                <Image src={Phone} alt='Phone number' className='object-contain  -mt-10' width={100} height={100}/>
                <h2 className='font-bold text-lg'>Phone Number</h2>
                <div className='mt-10'>
                    <p>+234-802-490-5841</p>
                    <p>+234-802-490-5841</p>
                </div>
            </div>
            <div className='relative bg-[#FAF4F4] px-4 p-3 rounded-xl shadow-md flex flex-col justify-center items-center'>
                <Image src={Email} alt='Email' className='object-contain -mt-14' width={100} height={100}/>
                <h2 className='font-bold text-lg'>Email-Address</h2>
                <div className='mt-10'>
                    <p>operations@company.com</p>
                    <p>operations@company.com</p>
                </div>
               
            </div>
            <div className='relative bg-[#FAF4F4] px-4 p-3 rounded-xl shadow-md flex flex-col justify-center items-center'>
                <Image src={Location} alt='Location' className='object-contain -mt-14' width={100} height={100}/>
                <h2 className='font-bold text-lg'>Address</h2>
                <div className='mt-10'>
                    <p className='max-w-[200px] mx-auto'>Plot 2, Mesi-ogo layout, Sawmill, Moniya, Ibadan</p>
                    
                </div>
               
            </div>

        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactOverview