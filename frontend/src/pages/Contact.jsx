import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} tetx2={'US'} /> 
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gray-600'>Out Store</p>
          <p className='text-slate-500 '> 5XX% Street Near Moon Street <br /> Over Jupiter alley </p>
          <p className='text-slate-500 '> Tel: 909090909 <br/> Email:stombland@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'> Careers at Mono Store</p>
          <p className='teext-gray-500 '>Learn more about our teams and job openings</p>
          <button className='border-black border px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500' >Explore Jobs</button>
        </div>
      </div>

      <NewsLetter />

    </div>
  )
}

export default Contact