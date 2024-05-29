import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-[#091829] pt-8 px-8 text-white -mx-10 '>
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:items-center justify-between'>  
            <div >
                <h6 className='font-bol'>Join our mailing list</h6>
                <form action="" className='flex flex-col items-start gap-3'>
                    <input className='outline-none bg-[#D9D9D9] p-3 rounded-md text-black' placeholder='E-mail Address' type="email" name="email" id="email" />
                    <button className='bg-[#F10009] py-2 px-4 text-white rounded-md' type="submit">Submit</button>
                </form>
                {/* <div>
                    <h6>Follow Us</h6>
                    <div>
                        <Link href={'#'}>
                            <Image src={facebook} width={40} height={40} alt='x logo'/>
                        </Link>
                    </div>
                </div> */}
            </div>

            <div>
                <h6 className='mb-2 font-bold'>ABOUT US</h6>
                <ul>
                    <Link href={'/about'}>
                        <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span>About Us</span>
                        </li>
                    </Link>
                    <Link href={'/services'}>
                        <li className='flex items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span>Our Services</span>
                        </li>
                    </Link>
                    <Link href={'/projects'}>
                        <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span>Project</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div>
                <h6 className='mb-2 font-bold'>CONTACT US</h6>
                <ul>
                    <li>info@yahoo.com</li>
                    <li className='my-2'>+234 - 7084922257</li>
                    <li>plot 2, Mesi-ogo layout Sawmill, Moniya, Ibadan.</li>
                </ul>
            </div>
        </div>

        <div className='bg-[#060F1A] -mx-8 px-8 py-8 text-center mt-8'> 
        <p className='text-[#D9D9D9] font-bold'>Copyright, 2024 <span className='text-white ml-10'>All Right Reserved.</span></p>

        </div>
       
    </div>
  )
}

export default Footer