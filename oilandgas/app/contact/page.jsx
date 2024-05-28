import PageBanner from '@/components/PageBanner'
import React from 'react'
import ContactBanner from '../../public/contactBanner.webp'
function Contact() {
  return (
    <div>
       <PageBanner image={ContactBanner} title={'Contact Us'}/>
    </div>
  )
}

export default Contact