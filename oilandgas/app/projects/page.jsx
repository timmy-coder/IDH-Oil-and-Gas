import PageBanner from '@/components/PageBanner'
import React from 'react'
import Banner from '../../public/latestProjectBanner.webp'

function Project() {
  return (
    <div className=''>
      <PageBanner image={Banner} title={'Latests Projects'}/>
    </div>
  )
}

export default Project