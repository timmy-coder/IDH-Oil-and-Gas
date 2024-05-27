import React from 'react'
import ProjectsTabs from './ProjectsTabs'

function LatestProject() {
  return (
    <div className='mb-10'>
        <div className='font-bold text-[#F40F0F] flex items-center justify-center gap-10'>
            <div className='border border-[#F40F0F] w-20'/>
            <h4>Latest Projects</h4>
            <div className='border border-[#F40F0F] w-20'/>
        </div>

        <ProjectsTabs/>
    </div>
  )
}

export default LatestProject