import React from 'react'
import ProjectsTabs from './ProjectsTabs'

function LatestProject() {
  return (
    <div className='mb-20'>
        <div className='font-bold text-black flex items-center justify-center mb-10 gap-10'>
            <div className='border border-[#F40F0F] w-60'/>
            <h4 className=' text-lg md:text-4xl'>Latest Project</h4>
            <div className='border border-[#F40F0F] w-60'/>
        </div>

        <ProjectsTabs/>
    </div>
  )
}

export default LatestProject