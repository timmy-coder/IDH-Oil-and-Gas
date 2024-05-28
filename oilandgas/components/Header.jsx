import Link from 'next/link'
import React from 'react'
import Logo from "../public/logo.webp"
import Image from 'next/image'

function Header() {
  return (
    <div className='text-white relative mx-5'>
      <nav className='flex absolute top-5 items-center justify-between w-full h-20'>
        <Link href={'/'}>
          <Image src={Logo} alt='Company Logo' width={80} height={80}/>
        </Link>

        <ul className='flex items-center justify-evenly gap-10'>
          <li>
            <Link href={`/`}>Home</Link>
          </li>

          <li>
            <Link href={`/about`}>Our Company</Link>
          </li>

          <li>
            <Link href={`/projects`}>Projects</Link>
          </li>
          <li>
            <Link href={`/services`}>Services</Link>
          </li>
          <li>
            <Link href={`/contact`}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header