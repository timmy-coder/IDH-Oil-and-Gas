import PageBanner from '@/components/PageBanner'
import React from 'react'
import ServiceBanner from '../../public/serviceBanner.webp'
import ServicesOverview from '@/components/Services/ServicesOverview'
import Header from '@/components/Header'

function Services() {
  return (
    <div>
      <Header/>
      <PageBanner image={ServiceBanner} title={'Our Services'}/>
      <ServicesOverview/>
    </div>
  )
}

export default Services