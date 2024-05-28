import PageBanner from '@/components/PageBanner'
import React from 'react'
//aboutBanner
import AboutBanner from '../../public/aboutBanner.webp'

function About() {
  return (
    <div>
       <PageBanner image={AboutBanner} title={'About Us'}/>
    </div>
  )
}

export default About