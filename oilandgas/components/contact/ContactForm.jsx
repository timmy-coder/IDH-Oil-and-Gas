import React from 'react'

function ContactForm() {
  return (
    <div className='mb-20'>
        <div className=' text-black flex flex-col mb-10 items-center justify-center gap-5'>
            <div className='flex mb-10 items-center justify-center gap-5 md:gap-10'>
                <div className='border border-[#F40F0F] w-20 md:w-60'/>
                <h4 className=' text-lg font-bold text-[#091829] md:text-4xl'>Get in touch with us</h4>
                <div className='border border-[#F40F0F] w-20 md:w-60'/>
            </div>
            
            <p>Have questions or need assistance? We&apos; re here to help. Reach out using the form below.</p>
        </div>

        <form action="" className='max-w-lg flex flex-col items-center  gap-5 mx-auto'>
            <input placeholder='Name' className='w-full placeholder:font-bold placeholder:text-lg outline-none bg-[#D9D9D9] p-2 border border-black rounded-lg' type="text" name="name" id="name" />
            <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
            <input placeholder='E-mail' className='w-full placeholder:font-bold placeholder:text-lg outline-none bg-[#D9D9D9] p-2 border border-black rounded-lg' type="temail" name="name" id="name" />
            <input placeholder='Phone' className='w-full placeholder:font-bold placeholder:text-lg outline-none bg-[#D9D9D9] p-2 border border-black rounded-lg' type="text" name="name" id="name" />
            </div>

            <textarea name="message" className='w-full placeholder:font-bold placeholder:text-lg outline-none bg-[#D9D9D9] p-2 border border-black rounded-lg' placeholder='Message' id="" cols="30" rows="10"></textarea>
            <div className='w-full'>
                <button className='bg-[#F40F0F] p-3 rounded-md' type="submit">Send Message</button>
            </div>
        </form>
        
    </div>
  )
}

export default ContactForm