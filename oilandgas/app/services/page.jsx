import PageBanner from '@/components/PageBanner'
import React from 'react'
import ServiceBanner from '../../public/serviceBanner.webp'
import ServicesOverview from '@/components/Services/ServicesOverview'

function Services() {
  return (
    <div>
      <PageBanner image={ServiceBanner} title={'Our Services'}/>
      <ServicesOverview/>
    </div>
  )
}

export default Services