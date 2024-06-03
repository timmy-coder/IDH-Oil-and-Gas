import PageBanner from '@/components/PageBanner'
import React from 'react'
import Banner from '../../public/latestProjectBanner.webp'
import project1 from '../../public/project1.webp'
import project2 from '../../public/project2.webp'
import project3 from '../../public/project3.webp'
import project4 from '../../public/project4.webp'
import project5 from '../../public/project5.webp'
import project6 from '../../public/project6.webp'
import project7 from '../../public/project7.webp'
import project8 from '../../public/project8.webp'
import project9 from '../../public/project9.webp'
import project10 from '../../public/project10.webp'
import project11 from '../../public/project11.webp'
import ProjectsTabs from '@/components/ProjectsTabs'
import Header from '@/components/Header'


export const metadata = {
  title: "PetroGlobal Energy | Projects ",
  description: "Solutions quickly became a pioneer in sustainable oil and gas practices",
};

function Project() {

  const LastesImage = [
    {
      id: 1,
      image: project1
    },
    {
      id: 2,
      image: project2
    },
    {
      id: 3,
      image: project3
    },
    {
      id: 4,
      image: project4
    },
    {
      id: 5,
      image: project5
    },
    {
      id: 6,
      image: project6
    },
    {
      id: 7,
      image: project7
    },
    {
      id: 8,
      image: project8
    },
    {
      id: 9,
      image: project9
    },
    {
      id: 10,
      image: project10
    },
    {
      id: 11,
      image: project11
    },
  ]
  return (
    <div className=''>
      <Header/>
      <PageBanner image={Banner} title={'Latests Projects'}/>

      <div className='my-40'>
    <ProjectsTabs image={LastesImage}/>
      </div>
    </div>
  )
}

export default Project