import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function GetInTouch() {
  return (
    <div className='container mx-auto py-[32px] px-[16px] md:p-[40px] lg:p-[40px] xl:p-0'>
        <div className='bg-[#0058FF] p-[16px] md:p-[40px] lg:p-20  rounded-2xl flex flex-col items-center gap-[32px] text-white'>
        <h1 className='font-bold text-[24px] md:text-[32px] lg:text-[48px]'>Get In Touch</h1>
        <p className='md:text-[14px] lg:text-[18px] text-center'>Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
        <button className='py-[16px] px-[24px] flex items-center gap-2 rounded-xl bg-white text-[#0058FF] font-bold'>Book a Professional Plumber <FaArrowRight /></button>
    </div>
    </div>
  )
}
