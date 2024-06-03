import React from 'react'
import ServiceImage1 from '../../public/service4.webp'
import ServiceImage2 from '../../public/service3.webp'
import ServiceImage3 from '../../public/service2.webp'
import ServiceImage4 from '../../public/service1.webp'
import Image from 'next/image'

function ServicesOverview() {
  const  ServiceData = [
    {
        id: 1,
        title: "Oil & Gas Shipping",
        description: "We specialize in the safe and efficient transportation of oil and gas across global channels. Utilizing a fleet of modern tankers equipped with the latest in safety and environmental technologies, we ensure timely and secure delivery of hydrocarbon products.",
        image: ServiceImage1,
        flip: false
    },
    {
      id: 2,
      title: "Valves Supply",
      description: "We specialize in the safe and efficient transportation of oil and gas across global channels. Utilizing a fleet of modern tankers equipped with the latest in safety and environmental technologies, we ensure timely and secure delivery of hydrocarbon products.",
      image: ServiceImage2,
      flip: true
  },
  {
    id: 3,
    title: "Well Services",
    description: "Our well services cover the entire lifecycle of your oil and gas wells, from drilling to decommissioning. We offer well intervention, well testing, and routine maintenance to maximize your asset's productivity and longevity.",
    image: ServiceImage3,
    flip: false
},
{
  id: 4,
  title: "Pipeline Construction",
  description: "With decades of experience, we provide end-to-end pipeline construction services, including planning, design, execution, and maintenance. Our approach ensures that pipelines are built to the highest standards of quality and safety.",
  image: ServiceImage4,
  flip: true
},
]
  return (
    <div>
        <div className='text-lg md:text-2xl my-20 mx-4 md:mx-10'>
          <h1>At PetroGlobal Energy Solutions, we are committed to delivering superior oil and gas services that cater to the full spectrum of industry needs. With decades of expertise and a commitment to safety, sustainability, and innovation, we provide a range of specialized services designed to enhance efficiency and maximize the performance of energy projects worldwide. </h1>

          <p className='my-10'>Our solutions span from strategic oil and gas shipping to essential valve supply, comprehensive well services, and meticulous pipeline construction. Each service we offer is backed by our dedicated team of experts who ensure that your specific requirements are met with the highest standards of excellence and reliability.</p>

          <p>Discover how our tailored services can support your operations and contribute to your project&apos;s success:</p>
      </div>

      <div className='mt-20 mx-10 mb-10'>
        {ServiceData.map((data) => (
          <div key={data.id} className={`flex mb-10 md:mb-20 flex-col md:flex-row items-start  ${data.flip?"md:flex-row-reverse ":""}  items-center gap-20`}>
          <Image src={data.image} alt='Ship Image' width={400} height={300}/>
          <div>
            <h2 className='font-bold text-3xl xl:text-4xl mb-5'>{data.title}</h2>
            <p className='text-lg md:text-xl xl:text-2xl'>{data.description}</p>
          </div>
        </div>

        ))}
        

       


      </div>
    </div>
    
  )
}

export default ServicesOverview