
import PageBanner from '@/components/PageBanner'
import React from 'react'
import ContactBanner from '../../public/contactBanner.webp'
import ContactOverview from '@/components/contact/ContactOverview'
import Header from '@/components/Header'
 

export const metadata = {
  title: "PetroGlobal Energy | Contact ",
  description: "Solutions quickly became a pioneer in sustainable oil and gas practices",
};

function Contact() {
  return (
    <main>
      <Header/>
       <PageBanner image={ContactBanner} title={'Contact Us'}/>

       <ContactOverview/>
    </main>
  )
}

export default Contact