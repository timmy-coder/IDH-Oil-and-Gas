
import PageBanner from '@/components/PageBanner'
import React from 'react'
import ContactBanner from '../../public/contactBanner.webp'
import ContactOverview from '@/components/contact/ContactOverview'
 

function Contact() {
  return (
    <main>
       <PageBanner image={ContactBanner} title={'Contact Us'}/>

       <ContactOverview/>
    </main>
  )
}

export default Contact