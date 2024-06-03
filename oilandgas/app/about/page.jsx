import PageBanner from '@/components/PageBanner'
import React from 'react'
//aboutBanner
import AboutBanner from '../../public/aboutBanner.webp'
import AboutOverview from '@/components/About/AboutOverview'
import Header from '@/components/Header'

function About() {
  return (
    <div>
      <Header/>
       <PageBanner image={AboutBanner} title={'About Us'}/>
       <AboutOverview/>
    </div>
  )
}

export default About