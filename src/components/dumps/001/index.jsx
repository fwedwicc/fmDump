import React from 'react'
import './styles.css'
import { FaApple } from "react-icons/fa"

const UI001 = () => {
  return (
    <>
      <div className='flex flex-col gap-y-13 bg-white w-sm rounded-[38px] p-7 shadow-2xl shadow-neutral-400/60'>
        <div className='flex justify-between items-center'>
          <div className='relative grid place-content-center size-12 bg-neutral-800 rounded-xl overflow-hidden'>
            <div className='absolute size-10.5 top-[1.5px] left-[1.5px] border-t-[2px] border-l-[2px] rounded-[10px] border-neutral-400/90 blur-[2px]' />
            <FaApple className="size-8 text-neutral-200" />
          </div>
          <div className='flex flex-col size-12 rounded-xl shadow-lg shadow-neutral-200/60 overflow-hidden'>
            <span className='bg-neutral-800 w-full text-[9px] py-[3.5px] text-center text-neutral-200'>JAN</span>
            <span className='flex flex-col text-center pt-[5px]'>
              <span className='text-neutral-700 font-semibold text-[11px] leading-none'>14</span>
              <span className='text-[9px] font-thin text-neutral-400 leading-none'>Mon</span>
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <span className='text-base font-medium text-neutral-700'>Apple <span className='text-[11px] font-thin text-neutral-400'>7 days ago</span></span>
          <span className='text-xl font-semibold text-neutral-700'>Senior Design Engineer</span>
          <div className='mt-2 flex gap-2'>
            <span className='px-2 py-1.5 text-[11px] leading-none bg-neutral-200/70 rounded-lg text-neutral-600 font-medium'>Full-time</span>
            <span className='px-2 py-1.5 text-[11px] leading-none bg-neutral-200/70 rounded-lg text-neutral-600 font-medium'>Hybrid mode</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-7 mt-4'>
          <div className='flex justify-between items-end pb-3 border-b border-neutral-200'>
            <span className='text-xl font-medium text-neutral-700'>$480k <span className='text-xs font-thin'>/year</span></span>
            <span className='text-sm font-medium text-neutral-700'>Bay Area, CA</span>
          </div>
          <button className='bg-gradient-to-r from-neutral-900/90 to-neutral-700/90 p-[3.3px] rounded-[22px] shadow-xl shadow-neutral-500/50'>
            <div className='w-full p-[1.2px] rounded-[19px] gradient-bg'>
              <div className='relative w-full p-3 bg-gradient-to-r from-neutral-900 to-neutral-900/80 rounded-[17px] text-lg text-neutral-300/90 text-shadow-lg shadow-black'>
                <div className='absolute w-[87%] top-2 h-2 bg-neutral-200/80 blur-sm' />
                <div className='absolute w-1 right-2 top-2 h-10 bg-neutral-200/30 blur-xs' />
                <div className='absolute w-1 right-2 top-2 h-10 bg-neutral-300/30 blur-sm' />
                Apply now
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default UI001
