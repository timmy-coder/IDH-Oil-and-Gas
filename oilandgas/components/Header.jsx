import Link from 'next/link'
import React from 'react'
import Logo from "../public/logo.webp"
import Image from 'next/image'

function Header() {
  return (
    <div className='text-white relative mx-5'>
      <nav className='flex absolute top-0 items-center justify-between w-full h-20'>
        <Link href={'/'}>
          <Image src={Logo} alt='Company Logo' width={80} height={80}/>
        </Link>

        <ul className='flex items-center justify-evenly gap-20'>
          <li>
            <Link href={`#`}>Home</Link>
          </li>

          <li>
            <Link href={`#`}>Our Company</Link>
          </li>

          <li>
            <Link href={`#`}>Projects</Link>
          </li>
          <li>
            <Link href={`#`}>Services</Link>
          </li>
          <li>
            <Link href={`#`}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header