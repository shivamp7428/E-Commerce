import { Mail, PhoneCall } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
   <>
        <h1 className='flex ml-35 mt-20'>Home / <p className='font-black'>Contact</p></h1>
     
      <div className='flex ml-35 mt-20 m-10 gap-15 '>
          <div className='w-80 p-3   rounded-2xl shadow-2xl'>
            <h1 className='flex gap-5 m-3 font-bold items-center'><h1 className='bg-red-500 text-white p-2 rounded-full'><PhoneCall/></h1> Call To Us</h1>
            <h1 className='m-3'>We are available 24/7 , 7 days a week.</h1>
            <h1 className='m-3'>Phone:+8871736638</h1>
            <hr  className='m-4 mt-10'/>
            <h1 className='flex m-3 gap-5 font-bold items-center'><h1 className='bg-red-500 text-white p-2 rounded-full'><Mail/></h1> Write To Us</h1>
            <h1 className='m-3'>Fill out form and  we  will contact you with in 24 hours.</h1>
            <h1 className='m-3'>Email: customer@gmail.com</h1>
            <h1 className='m-3'>Email: support@gmail.com</h1>
        </div>

        <form action="#" className=' rounded-2xl shadow-2xl p-10'>
            <div className='flex gap-20'>
                <input type="text" placeholder='Your Name' className='bg-gray-100 p-3 ' />
                <input type="email" placeholder='Your Email' className='bg-gray-100 p-3 '/>
                <input type="number" placeholder='Your Phone' className='bg-gray-100 p-3 ' />
            </div>
            <textarea name="message" placeholder='Message' className='bg-gray-100 mt-10 w-full h-40 p-3'></textarea>
            <div className='flex justify-end items-end mt-8'>
              <button className='bg-red-500 p-3 text-white rounded ' type='submit'>Send Message</button>
            </div>
        </form>
      </div>
       
   
   </>
  )
}

export default Contact
